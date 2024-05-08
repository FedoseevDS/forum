import { CommentOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

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
            // setItemIds((prev) => (prev ? [...prev, id] : [id]));
            onItemHandle(target.checked ? id : null);
          }}
        />
      </td>
      <td>{number}</td>
      <td>{title === 'тему' ? <FolderOpenOutlined /> : <CommentOutlined />}</td>
      <td>
        {title !== 'обсуждение' ? (
          <Link to={path ? `${path}/${id}` : id}>{value}</Link>
        ) : (
          <Link to={`${path ? `${path}/discuss/${id}` : `discuss/${id}`}`}>{value}</Link>
        )}
      </td>
    </tr>
  );
};
