import { useCallback, useState } from 'react';
import { Button, CreateForm, Template, WrapperAuthorization } from './styles';
import { useDispatch } from 'react-redux';
import { createDiscuss, createForum } from 'store/forum';
import { Registration } from 'components/registration';
import { Authorization } from 'components/auth';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom/dist';

export const Modal = ({
  onOpen,
  onCancel,
  title,
  placeholder,
  isAuthorization,
  parentId,
  depth,
  isDiscuss,
}) => {
  if (!onOpen) {
    return;
  }

  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [isRegistration, setIsRegistration] = useState(false);

  const onSave = useCallback(() => {
    if (isDiscuss) {
      dispatch(createDiscuss({ ...value, id: nanoid(), parentId, depth }));
      onCancel(false);
      return;
    }
    dispatch(createForum({ ...value, id: nanoid(), parentId, depth }));
    onCancel(false);
  }, [dispatch, value]);

  return (
    <Template>
      <div>
        {isAuthorization ? (
          <WrapperAuthorization>
            <span>Авторизация</span>
            <Authorization onCancel={onCancel} />
            <button onClick={() => setIsRegistration((e) => !e)}>Зарегистрироваться</button>
            {isRegistration && <Registration onCancel={onCancel} />}
          </WrapperAuthorization>
        ) : (
          <CreateForm>
            <span>Создать {title}</span>
            <input
              type='text'
              required
              placeholder={`Введите название ${placeholder}`}
              onChange={({ target }) => setValue({ value: target.value, title })}
            />
            <Button>
              <button onClick={() => onSave()}>Сохранить</button>
              <button onClick={() => onCancel(false)}>Отменить</button>
            </Button>
          </CreateForm>
        )}
      </div>
    </Template>
  );
};
