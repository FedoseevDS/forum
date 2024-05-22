import { useCallback, useEffect, useRef, useState } from 'react';

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import sha256 from 'crypto-js/sha256';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom/dist';

import { createComment, deleteComment } from 'store/forum';

import { Block, Border, Button, Comments, Template, WrapperEditor } from './styles';

export const Discuss = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const editorRef = useRef(null);
  const checkRef = useRef();

  const [isMarkdown, setIsMarkdown] = useState(false);
  const [comment, setComment] = useState('');

  const { auth: user, forum } = useSelector((state) => state);

  const item = forum?.find(({ id }) => id === pathname.split('/')?.slice(-1)[0]);

  const onBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onDeleteComment = useCallback(
    (submitValue) => {
      dispatch(deleteComment(submitValue));
    },
    [dispatch],
  );

  const onSave = () => {
    dispatch(createComment({ comment, ...user, commentId: nanoid(), discussId: item.id }));
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
        {item.children.map(({ comment, commentId, discussId, email, name, signature, userId }) => (
          <div
            key={commentId}
            style={{
              alignSelf: user.userId === userId ? 'end' : 'start',
              background: user.userId === userId ? '#ced8ed' : '#70b768',
            }}
          >
            <div>
              <div>
                <img alt='аватар пользователя' src={icon(email)} />
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
  }, [item.children, onDeleteComment, user.userId]);

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
                editor={ClassicEditor}
                ref={checkRef}
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
