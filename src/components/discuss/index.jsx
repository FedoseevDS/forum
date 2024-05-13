import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import { Block, Border, Comments, Input, Template } from './styles';
import { nanoid } from 'nanoid';
import { useCallback, useState } from 'react';
import { createComment, deleteComment } from 'store/forum';
import { SendOutlined } from '@ant-design/icons';

export const Discuss = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [clearValue, setClearValue] = useState('');

  const { forum, auth: user } = useSelector((state) => state);

  const item = forum?.find(({ id }) => id === pathname.split('/')?.slice(-1)[0]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const comment = {};
      for (let [key, value] of formData.entries()) {
        comment[key] = value;
        comment.commentId = nanoid();
      }

      dispatch(createComment({ ...comment, ...user, discussId: item.id }));
      setClearValue('');
    },
    [dispatch, user],
  );

  const onBack = useCallback(() => {
    navigate(-1);
  }, []);

  const onDeleteComment = useCallback(
    (submitValue) => {
      dispatch(deleteComment(submitValue));
    },
    [dispatch],
  );

  const ShowComments = useCallback(() => {
    if (!item.children?.length) {
      return null;
    }

    return (
      <Comments>
        {item.children.map(({ name, signature, comment, commentId, discussId, userId }) => (
          <div
            key={commentId}
            style={{
              background: user.userId === userId ? '#ced8ed' : '#70b768',
              alignSelf: user.userId === userId ? 'end' : 'start',
            }}
          >
            <div>
              <div>
                <img src='' />
                <span>{name}</span>
              </div>
              <span>{comment}</span>
            </div>
            <div>
              <div>
                <span>Подпись:</span>
                <span>{signature}</span>
              </div>
              {user.userId === userId && (
                <button onClick={() => onDeleteComment({ commentId, discussId })}>Удалить</button>
              )}
            </div>
          </div>
        ))}
      </Comments>
    );
  }, [item, user]);

  return (
    <Template>
      <div>
        <span>Тема обсуждения:</span>
        <span>{item.value}</span>
      </div>
      <Border />
      <ShowComments />
      {user.isAuth ? (
        <Block>
          <form onSubmit={handleSubmit}>
            <Input>
              <label>Комментарий:</label>
              <input
                type='text'
                name='comment'
                required
                placeholder='Введите комментарий'
                onChange={({ target }) => setClearValue(target.value)}
                value={clearValue}
              />
            </Input>
            <div>
              <button type='submit'>
                <SendOutlined />
              </button>
            </div>
          </form>
          <button onClick={() => onBack()}>Назад</button>
        </Block>
      ) : (
        <div>Для добавления комментариев, необходимо авторизоваться</div>
      )}
    </Template>
  );
};
