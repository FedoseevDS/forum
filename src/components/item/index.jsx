import { FolderOpenOutlined } from '@ant-design/icons';
import styled from 'styled-components';

// const ItemId = styled.tr`
//   background: red;
// `;

export const Item = ({ id, value, isCheckbox, setIsCheckbox, itemIds, setItemIds }) => {
  console.log('itemIds', itemIds);
  // console.log('isCheckbox', isCheckbox);

  const onItemHandle = (id) => {
    // console.log('id', id);
    // setItemIds(() => {
    //   if (itemIds.includes(id)) {
    //     return;
    //   }
    //   if (itemIds.some((item) => item === id)) {
    //     setItemIds((prev) => console.log('prev', prev));
    //     return;
    //   }
    //   setItemIds([id]);
    // });
  };

  return (
    // <tr key={id} style={{ background: itemIds.includes(id) && isCheckbox && 'red' }}>
    <tr key={id}>
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
      <td>{<FolderOpenOutlined />}</td>
      <td>{value}</td>
    </tr>
  );
};
