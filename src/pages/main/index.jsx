import { useDispatch, useSelector } from 'react-redux';
import { BlankItem, Button, Template, WrapperTable } from './styles';
import { useCallback, useEffect, useState } from 'react';
import { CheckSquareOutlined } from '@ant-design/icons';
import { Item } from 'components/item';
import { createDiscuss, createForum, deleteForum } from 'store/forum';
import { Modal } from 'components/common/modal';
import { configDiscuss, configTheme } from './consts';
import { nanoid } from 'nanoid';

const Main = ({ depth, parentId }) => {
  const dispatch = useDispatch();
  const { forum, auth } = useSelector((state) => state);

  const [isCreateTheme, setIsCreateTheme] = useState(false);
  const [isCreateDiscuss, setIsCreateDiscuss] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [itemIds, setItemIds] = useState([]);
  const [filterData, setFilterData] = useState(forum);
  const [isChildren, setIsChildren] = useState(false);

  const onSaveTheme = useCallback(
    (submitValue) => {
      dispatch(
        createForum({
          ...submitValue,
          id: nanoid(),
          parentId,
          depth,
          isTheme: true,
          user: {
            userId: auth.userId,
            name: auth.name,
            signature: auth.signature,
            email: auth.email,
          },
        }),
      );
    },
    [dispatch, parentId, depth, auth],
  );

  const onSaveDiscuss = useCallback(
    (submitValue) => {
      dispatch(
        createDiscuss({
          ...submitValue,
          id: nanoid(),
          parentId,
          depth,
          isTheme: false,
          user: {
            userId: auth.userId,
            name: auth.name,
            signature: auth.signature,
            email: auth.email,
          },
        }),
      );
    },
    [dispatch, parentId, depth, auth],
  );

  const onDelete = useCallback(() => {
    dispatch(deleteForum({ id: itemIds[0] }));
    setIsCheckbox(false);
    setItemIds([]);
  }, [itemIds]);

  useEffect(() => {
    if (parentId) {
      setIsChildren(forum.some((item) => item?.parentId && item?.parentId === itemIds[0]));
      setFilterData(forum?.filter((item) => item.depth === depth && item.parentId === parentId));
      return;
    }

    setIsChildren(forum.some((item) => !!item.parentId && item.parentId === itemIds[0]));
    setFilterData(forum?.filter((item) => !item.depth));
  }, [forum, itemIds, parentId, depth]);

  const TopBar = () => {
    if (!auth.isAuth) {
      return <span>Для добавления темы или обсуждения необходимо авторизоваться.</span>;
    }

    return (
      <Button>
        <button onClick={() => setIsCreateTheme((e) => !e)}>Создать тему</button>
        <button onClick={() => setIsCreateDiscuss((e) => !e)}>Создать обсуждение</button>
        <button disabled={isChildren} onClick={() => onDelete()}>
          Удалить
        </button>
      </Button>
    );
  };

  const Table = () => {
    if (!forum.some((i) => i.depth === depth)) {
      return <BlankItem>Создайте тему или обсуждение</BlankItem>;
    }

    return (
      <WrapperTable>
        <thead>
          <tr>
            <th>{<CheckSquareOutlined />}</th>
            <th>№</th>
            <th>картинка</th>
            <th>тема для обсуждения</th>
            <th>Пользователь</th>
            <th>Подпись</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, index) => (
            <Item
              number={index + 1}
              key={item.id}
              item={item}
              isCheckbox={isCheckbox}
              setIsCheckbox={setIsCheckbox}
              itemIds={itemIds}
              setItemIds={setItemIds}
            />
          ))}
        </tbody>
      </WrapperTable>
    );
  };

  return (
    <Template>
      <TopBar />
      <Table />
      <Modal
        onOpen={isCreateTheme}
        onCancel={setIsCreateTheme}
        title='Создать "Тема"'
        config={configTheme}
        onSave={onSaveTheme}
      />
      <Modal
        onOpen={isCreateDiscuss}
        onCancel={setIsCreateDiscuss}
        title='Создать "Обсуждения"'
        config={configDiscuss}
        onSave={onSaveDiscuss}
      />
    </Template>
  );
};

export default Main;
