import { Layout } from 'antd';
import { Button, Photo, Template, UserInfo } from './styles';
import Avatar from 'assets/img/avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeAuth } from 'store/auth';
import { useCookies } from 'react-cookie';

export const Profile = () => {
  const dispatch = useDispatch();

  const { email, name, signature } = useSelector((state) => state.auth);
  const [, , removeCookie] = useCookies(['profile']);

  const navigate = useNavigate();

  const onExit = () => {
    dispatch(removeAuth());
    removeCookie('profile');
    navigate(-1);
  };

  const onBack = () => {
    navigate(-1);
  };

  return (
    <Template>
      <div>
        <Photo>
          <img src={Avatar} alt='пользователь' />
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
            <button onClick={() => onExit()}>Выйти</button>
            <button onClick={() => onBack()}>Назад</button>
          </Button>
        </UserInfo>
      </div>
    </Template>
  );
};
