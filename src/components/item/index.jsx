import { CommentOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

export const Item = ({ isCheckbox, setIsCheckbox, itemIds, setItemIds, number, item }) => {
  const { value, isTheme, id } = item;

  const onItemHandle = (id) => {
    setItemIds([id]);
  };

  const { pathname } = useLocation();
  const path = pathname.split('/').slice(3).join('/');

  return (
    <tr key={id} style={{ background: itemIds.includes(id) && isCheckbox && '#ed7464' }}>
      <td>
        <input
          type='checkbox'
          checked={isCheckbox && itemIds.includes(id)}
          onChange={({ target }) => {
            setIsCheckbox(target.checked);
            onItemHandle(target.checked ? id : null);
          }}
        />
      </td>
      <td>{number}</td>
      <td>{isTheme ? <FolderOpenOutlined /> : <CommentOutlined />}</td>
      <td>
        <Link to={path ? `${path}/${id}` : id}>{value}</Link>
      </td>
    </tr>
  );
};
