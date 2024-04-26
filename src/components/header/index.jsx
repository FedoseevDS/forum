import { Modal } from 'components/modal';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuth } from 'store/auth';
import { logo } from './consts';
import { Logo, Profile, Template, User } from './styles';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom/dist';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const auth = useSelector((state) => state.auth);

  const [isAuthorization, setIsAuthorization] = useState(false);

  const [{ profile: session }, , removeCookie] = useCookies(['profile']);

  const onExit = () => {
    dispatch(removeAuth());
    removeCookie('profile');
    setIsAuthorization(false);

    if (pathname.includes('/forum/profile')) {
      navigate(-1);
    }
  };

  useEffect(() => {
    if (!session) {
      dispatch(removeAuth());
      setIsAuthorization(false);
    }
  }, [dispatch, session]);

  return (
    <Template>
      <Logo to='/forum/'>
        <img src={logo} alt='логотип' />
      </Logo>
      <h1>Форум: Веселых людей</h1>
      <Profile>
        {!auth.isAuth ? (
          <div>
            <button onClick={() => setIsAuthorization((e) => !e)}>Вход и регистрация</button>
            <Modal isAuthorization onOpen={isAuthorization} onCancel={setIsAuthorization} />
          </div>
        ) : (
          <User>
            <div>
              <span>{auth.name}</span>
              <button onClick={() => onExit()}>Выйти</button>
            </div>
            <div>
              <Link to='forum/profile'>Личный кабинет</Link>
            </div>
          </User>
        )}
      </Profile>
    </Template>
  );
};
