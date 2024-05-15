import { Button, Photo, Template, UserInfo } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeAuth, updateAuth } from 'store/auth';
import { useCookies } from 'react-cookie';
import { useCallback, useMemo, useState } from 'react';
import sha256 from 'crypto-js/sha256';
import { config } from './consts';
import { Modal } from 'components/common/modal';
import { updateUser } from 'store/users';
import { updateForum } from 'store/forum';

export const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  const [isEdit, setIsEdit] = useState(false);
  const [, , removeCookie] = useCookies(['profile']);

  const navigate = useNavigate();

  const hash = useMemo(() => sha256(user.email), [user]);

  const onExit = useCallback(() => {
    dispatch(removeAuth());
    removeCookie('profile');
    navigate(-1);
  }, [removeCookie, dispatch, navigate]);

  const onBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onSave = useCallback((submitValue) => {
    dispatch(updateUser({ ...submitValue, userId: user.userId }));
    dispatch(updateAuth({ ...submitValue }));
    dispatch(updateForum({ ...submitValue, userId: user.userId }));
    setIsEdit(false);
  });

  return (
    <Template>
      <div>
        <Photo>
          <img src={`https://www.gravatar.com/avatar/${hash}`} alt='Пользователь' />
        </Photo>
        <UserInfo>
          <p>
            Имя:
            <span>{user.name}</span>
          </p>
          <p>
            подпись:
            <span>{user.signature}</span>
          </p>
          <p>
            Электронная почта:
            <span>{user.email}</span>
          </p>
          <Button>
            <button onClick={() => setIsEdit((e) => !e)}>Редактировать</button>
            <button onClick={onExit}>Выйти</button>
            <button onClick={onBack}>Назад</button>
          </Button>
        </UserInfo>
        <Modal
          onOpen={isEdit}
          onCancel={setIsEdit}
          dataItem={user}
          config={config}
          onSave={onSave}
          isEdit
          title={'Данные пользователя'}
        />
      </div>
    </Template>
  );
};
