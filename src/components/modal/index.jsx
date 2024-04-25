import { useState } from 'react';
import { Button, CreateForm, Template, WrapperAuthorization } from './styles';
import { useDispatch } from 'react-redux';
import { createForum } from 'store/forum';
// import { setUser } from 'store/users';
// import { useCookies } from 'react-cookie';
import { Registration } from 'components/registration';
import { Authorization } from 'components/auth';

export const Modal = ({ onOpen, onCancel, title, placeholder, isAuthorization }) => {
  if (!onOpen) {
    return;
  }

  // const [cookies, setCookie, removeCookie] = useCookies();

  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [isRegistration, setIsRegistration] = useState(false);

  // const id = useId();

  const onSave = () => {
    dispatch(createForum(value));
    onCancel(false);
  };

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
              placeholder={`Введите название ${placeholder}`}
              onChange={({ target }) => setValue({ value: target.value, title })}
            />
            <Button>
              <button onClick={() => onSave()}>{'Сохранить'}</button>
              <button onClick={() => onCancel(false)}>{'Отменить'}</button>
            </Button>
          </CreateForm>
        )}
      </div>
    </Template>
  );
};
