import { CommentOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom/dist';
import styled from 'styled-components';

export const Item = ({
  id,
  value,
  isCheckbox,
  setIsCheckbox,
  itemIds,
  setItemIds,
  title,
  number,
}) => {
  const onItemHandle = (id) => {
    setItemIds([id]);
  };

  return (
    <tr key={id} style={{ background: itemIds.includes(id) && isCheckbox && '#ed7464' }}>
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
      <td>{number}</td>
      <td>{title === 'тему' ? <FolderOpenOutlined /> : <CommentOutlined />}</td>
      <td>
        <Link to={id}>{value}</Link>
      </td>
    </tr>
  );
};
