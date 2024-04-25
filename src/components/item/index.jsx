import { CommentOutlined, FolderOpenOutlined } from '@ant-design/icons';
import styled from 'styled-components';

// const ItemId = styled.tr`
//   background: red;
// `;

export const Item = ({ id, value, isCheckbox, setIsCheckbox, itemIds, setItemIds, title }) => {
  // console.log('itemIds', itemIds);
  // console.log('isCheckbox', isCheckbox);

  const onItemHandle = (id) => {
    setItemIds([id]);
  };

  return (
    <tr key={id} style={{ background: itemIds.includes(id) && isCheckbox && '#ed7464' }}>
      {/* <tr key={id}> */}
      <td>
        <input
          type='checkbox'
          checked={isCheckbox && itemIds.includes(id)}
          onChange={({ target }) => {
            setIsCheckbox(target.checked);
            // setItemIds((prev) => (prev ? [...prev, id] : [id]));
            onItemHandle(target.checked ? id : null);
          }}
        />
      </td>
      <td>{id}</td>
      <td>{title === 'тему' ? <FolderOpenOutlined /> : <CommentOutlined />}</td>
      <td>{value}</td>
    </tr>
  );
};
