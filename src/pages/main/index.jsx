import { useDispatch, useSelector } from 'react-redux';
import { BlankItem, Button, Table, Template } from './styles';
import { useState } from 'react';
import { CheckSquareOutlined } from '@ant-design/icons';
import { Item } from 'components/item';
import { Modal } from 'components/modal';
import { deleteForum } from 'store/forum';
import { useParams } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forum.value);
  const auth = useSelector((state) => state.auth);
  const { id: topicId } = useParams();

  console.log('data', data);
  console.log('topicId', topicId);

  const [isCreateTheme, setIsCreateTheme] = useState(false);
  const [isCreateDiscuss, setIsCreateDiscuss] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [itemIds, setItemIds] = useState([]);

  const onDelete = () => {
    dispatch(deleteForum({ id: itemIds[0] }));
    setIsCheckbox(false);
    setItemIds([]);
  };

  // const filterData = data.filter((item) => item.id === topicId || !topicId);

  return (
    <Template>
      {auth.isAuth ? (
        <Button>
          <button onClick={() => setIsCreateTheme((e) => !e)}>Создать тему</button>
          <button onClick={() => setIsCreateDiscuss((e) => !e)}>Создать обсуждение</button>
          <button onClick={() => onDelete()}>Удалить</button>
        </Button>
      ) : (
        <span>Для добавления темы или обсуждения необходимо авторизоваться.</span>
      )}
      {data.length ? (
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
            {data.map(({ value, title, parentId, id }, index) => {
              // if (parentId === topicId) {
              return (
                <Item
                  number={index + 1}
                  key={id}
                  id={id}
                  value={value}
                  isCheckbox={isCheckbox}
                  setIsCheckbox={setIsCheckbox}
                  itemIds={itemIds}
                  setItemIds={setItemIds}
                  title={title}
                />
              );
              // } else if (!parentId) {
              //   <Item
              //     number={index + 1}
              //     key={id}
              //     id={id}
              //     value={value}
              //     isCheckbox={isCheckbox}
              //     setIsCheckbox={setIsCheckbox}
              //     itemIds={itemIds}
              //     setItemIds={setItemIds}
              //     title={title}
              //   />;
              // }
            })}
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
        topicId={topicId}
      />

      <Modal
        onOpen={isCreateDiscuss}
        onCancel={setIsCreateDiscuss}
        title={'обсуждение'}
        placeholder={'обсуждения'}
      />
    </Template>
  );
};

export default Main;
