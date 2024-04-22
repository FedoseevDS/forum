import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../components/modal';
import { BlankItem, Button, Table, Template } from './styles';
import { useState } from 'react';
import { CheckSquareOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { deleteForum } from '../../store/forum';
import { Item } from '../../components/item';

export const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forum.value);

  const [isCreateTheme, setIsCreateTheme] = useState(false);
  const [isCreateDiscuss, setIsCreateDiscuss] = useState(false);
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [itemIds, setItemIds] = useState([]);

  // console.log('itemIds', itemIds);
  // console.log('isCheckbox', isCheckbox);

  const onDelete = () => {
    dispatch(deleteForum(itemIds));
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
              <th>тема</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, value }) => (
              <Item
                key={id}
                id={id}
                value={value}
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
      {isCreateTheme && <Modal onCancel={setIsCreateTheme} title={'тему'} placeholder={'темы'} />}
      {isCreateDiscuss && (
        <Modal onCancel={setIsCreateDiscuss} title={'обсуждение'} placeholder={'обсуждения'} />
      )}
    </Template>
  );
};
