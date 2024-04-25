import { useDispatch, useSelector } from 'react-redux';
import { BlankItem, Button, Table, Template } from './styles';
import { useState } from 'react';
import { CheckSquareOutlined } from '@ant-design/icons';
import { Item } from 'components/item';
import { Modal } from 'components/modal';
import { deleteForum } from 'store/forum';

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forum.value);

  // console.log('data', data);

  const [isCreateTheme, setIsCreateTheme] = useState(false);
  const [isCreateDiscuss, setIsCreateDiscuss] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [itemIds, setItemIds] = useState([]);

  // console.log('itemIds', itemIds);
  // console.log('isCheckbox', isCheckbox);

  const onDelete = () => {
    dispatch(deleteForum({ id: itemIds[0] }));
    setIsCheckbox(false);
    setItemIds([]);
  };

  return (
    <Template>
      <Button>
        <button onClick={() => setIsCreateTheme((e) => !e)}>Создать тему</button>
        <button onClick={() => setIsCreateDiscuss((e) => !e)}>Создать обсуждение</button>
        <button onClick={() => onDelete()}>Удалить</button>
      </Button>
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
            {data.map(({ id, value, title }) => (
              <Item
                key={id}
                id={id}
                value={value}
                isCheckbox={isCheckbox}
                setIsCheckbox={setIsCheckbox}
                itemIds={itemIds}
                setItemIds={setItemIds}
                title={title}
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
