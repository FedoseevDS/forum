import { useCallback, useEffect, useState } from 'react';

import { CheckSquareOutlined, FileOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from 'components/common/modal';
import { Item } from 'components/item';

import { createDiscuss, createForum, deleteForum } from 'store/forum';

import { configDiscuss, configTheme } from './consts';
import { BlankItem, Button, Template, WrapperTable } from './styles';

const Main = ({ depth, parentId }) => {
  const dispatch = useDispatch();
  const { auth, forum } = useSelector((state) => state);

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
          depth,
          id: nanoid(),
          isTheme: true,
          parentId,
          user: {
            email: auth.email,
            name: auth.name,
            signature: auth.signature,
            userId: auth.userId,
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
          depth,
          id: nanoid(),
          isTheme: false,
          parentId,
          user: {
            email: auth.email,
            name: auth.name,
            signature: auth.signature,
            userId: auth.userId,
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
            <th>
              <CheckSquareOutlined />
            </th>
            <th>№</th>
            <th>
              <FileOutlined />
            </th>
            <th>Тема или обсуждение</th>
            <th>Пользователь</th>
            <th>Подпись</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, index) => (
            <Item
              isCheckbox={isCheckbox}
              item={item}
              itemIds={itemIds}
              key={item.id}
              number={index + 1}
              setIsCheckbox={setIsCheckbox}
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
        config={configTheme}
        title='Тема'
        onCancel={setIsCreateTheme}
        onOpen={isCreateTheme}
        onSave={onSaveTheme}
      />
      <Modal
        markdown
        config={configDiscuss}
        title='Обсуждения'
        onCancel={setIsCreateDiscuss}
        onOpen={isCreateDiscuss}
        onSave={onSaveDiscuss}
      />
    </Template>
  );
};

export default Main;
