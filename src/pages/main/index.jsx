import { useDispatch, useSelector } from 'react-redux';
import { BlankItem, Button, Table, Template } from './styles';
import { useEffect, useState } from 'react';
import { CheckSquareOutlined } from '@ant-design/icons';
import { Item } from 'components/item';
import { Modal } from 'components/modal';
import { deleteForum } from 'store/forum';

const Main = ({ depth, parentId }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forum);
  const auth = useSelector((state) => state.auth);

  // console.log('data', data);

  const [isCreateTheme, setIsCreateTheme] = useState(false);
  const [isCreateDiscuss, setIsCreateDiscuss] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [itemIds, setItemIds] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [isChildren, setIsChildren] = useState(false);

  // console.log('itemIds', itemIds);
  // const isChildren = state.some(({ parentId }) => parentId === item.id);

  const onDelete = () => {
    dispatch(deleteForum({ id: itemIds[0] }));
    setIsCheckbox(false);
    setItemIds([]);
  };

  useEffect(() => {
    if (parentId) {
      setFilterData(data?.filter((item) => item.depth === depth && item.parentId === parentId));
      setIsChildren(data.some((item) => item.parentId !== null && item.parentId === itemIds[0]));
      return;
    }

    setIsChildren(data.some((item) => item.parentId !== null && item.parentId === itemIds[0]));
    setFilterData(data?.filter((item) => item.depth === null));
  }, [data, itemIds, parentId, depth]);

  return (
    <Template>
      {auth.isAuth ? (
        <Button>
          <button onClick={() => setIsCreateTheme((e) => !e)}>Создать тему</button>
          <button onClick={() => setIsCreateDiscuss((e) => !e)}>Создать обсуждение</button>
          <button disabled={isChildren} onClick={() => onDelete()}>
            Удалить
          </button>
        </Button>
      ) : (
        <span>Для добавления темы или обсуждения необходимо авторизоваться.</span>
      )}
      {data?.length ? (
        <Table>
          <thead>
            <tr>
              <th>{<CheckSquareOutlined />}</th>
              <th>№</th>
              <th>картинка</th>
              <th>тема для обсуждения</th>
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
        </Table>
      ) : (
        <BlankItem>Создайте тему или обсуждение</BlankItem>
      )}
      <Modal
        onOpen={isCreateTheme}
        onCancel={setIsCreateTheme}
        title={'тему'}
        placeholder={'темы'}
        parentId={parentId}
        depth={depth}
      />
      <Modal
        onOpen={isCreateDiscuss}
        onCancel={setIsCreateDiscuss}
        title={'обсуждение'}
        placeholder={'обсуждения'}
        isDiscuss
        parentId={parentId}
        depth={depth}
      />
    </Template>
  );
};

export default Main;
