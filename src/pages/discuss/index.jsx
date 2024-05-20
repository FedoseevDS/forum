import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import { Block, Border, Button, Comments, Template, WrapperEditor } from './styles';
import { nanoid } from 'nanoid';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createComment, deleteComment } from 'store/forum';
import sha256 from 'crypto-js/sha256';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const Discuss = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const editorRef = useRef(null);
  const checkRef = useRef();

  const [isMarkdown, setIsMarkdown] = useState(false);
  const [comment, setComment] = useState('');

  const { forum, auth: user } = useSelector((state) => state);

  const item = forum?.find(({ id }) => id === pathname.split('/')?.slice(-1)[0]);

  const onBack = useCallback(() => {
    navigate(-1);
  }, []);

  const onDeleteComment = useCallback(
    (submitValue) => {
      dispatch(deleteComment(submitValue));
    },
    [dispatch],
  );

  const onSave = () => {
    dispatch(createComment({ comment, ...user, discussId: item.id, commentId: nanoid() }));
    checkRef.current.editor.setData('');
  };

  useEffect(() => {
    if (isMarkdown) {
      return;
    }

    const handleClickOutside = (event) => {
      if (editorRef.current && !editorRef.current.contains(event.target)) {
        setIsMarkdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const ShowComments = useCallback(() => {
    if (!item?.children?.length) {
      return null;
    }

    const icon = (email) => {
      const hash = sha256(email);
      return `https://www.gravatar.com/avatar/${hash}`;
    };

    return (
      <Comments>
        {item.children.map(({ name, signature, comment, commentId, discussId, userId, email }) => (
          <div
            key={commentId}
            style={{
              background: user.userId === userId ? '#ced8ed' : '#70b768',
              alignSelf: user.userId === userId ? 'end' : 'start',
            }}
          >
            <div>
              <div>
                <img src={icon(email)} />
              </div>
              <span dangerouslySetInnerHTML={{ __html: comment }} />
            </div>
            <div>
              <div>
                <span>Пользователь:</span>
                <span>{name}</span>
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
      <span dangerouslySetInnerHTML={{ __html: item?.value }} />
      <Border />
      <ShowComments />
      {user.isAuth ? (
        <Block>
          <div>
            <label>Комментарий:</label>
            <WrapperEditor ref={editorRef}>
              <CKEditor
                editor={ClassicEditor}
                ref={checkRef}
                config={{
                  placeholder: 'Введите комментарий',
                  toolbar: [
                    'undo',
                    'redo',
                    '|',
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'blockQuote',
                    '|',
                    'numberedList',
                    'bulletedList',
                  ],
                }}
                onChange={(_, editor) => {
                  setComment(editor.getData());
                }}
              />
              <Button>
                <button onClick={() => onSave()}>добавить</button>
                <button onClick={() => onBack()}>Назад</button>
              </Button>
            </WrapperEditor>
          </div>
        </Block>
      ) : (
        <div>Для добавления комментариев, необходимо авторизоваться</div>
      )}
    </Template>
  );
};
