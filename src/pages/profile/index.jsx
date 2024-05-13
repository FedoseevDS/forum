import { Button, Photo, Template, UserInfo } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeAuth } from 'store/auth';
import { useCookies } from 'react-cookie';
import { useCallback, useState } from 'react';

export const Profile = () => {
  const dispatch = useDispatch();

  const { email, name, signature, img } = useSelector((state) => state.auth);
  const data = useSelector((state) => state);
  const [, , removeCookie] = useCookies(['profile']);

  console.log('img', img);

  const navigate = useNavigate();

  const onExit = useCallback(() => {
    dispatch(removeAuth());
    removeCookie('profile');
    navigate(-1);
  }, [removeCookie, dispatch, navigate]);

  const onBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const randomString = Math.random().toString(36).substring(7);

  // const [randomString, setRandomString] = useState(Math.random().toString(36).substring(7));

  // console.log('randomString', randomString);

  // const handleRefreshImage = () => {
  //   setRandomString(Math.random().toString(36).substring(7));
  // };

  return (
    <Template>
      <div>
        <Photo>
          <img src={`https://www.gravatar.com/avatar/${img}`} alt='Пользователь' />
        </Photo>
        <UserInfo>
          <p>
            Имя:
            <span>{name}</span>
          </p>
          <p>
            подпись:
            <span>{signature}</span>
          </p>
          <p>
            Электронная почта:
            <span>{email}</span>
          </p>
          <Button>
            <button onClick={onExit}>Выйти</button>
            <button onClick={onBack}>Назад</button>
          </Button>
        </UserInfo>
      </div>
    </Template>
  );
};
