import { useCallback, useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuth } from 'store/auth';
import { config, logo } from './consts';
import { Logo, Profile, Template, User } from './styles';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import { Modal } from 'components/common/modal';
import { setAuth } from 'store/auth';
import bcrypt from 'bcryptjs';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { auth, users } = useSelector((state) => state);

  console.log('users', users);

  const [, setCookies] = useCookies();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [{ profile: session }, , removeCookie] = useCookies(['profile']);

  const onSave = useCallback(
    (submitValue) => {
      const user = users.find(({ email }) => email === submitValue.name);
      const isAuth = !!user && bcrypt.compareSync(submitValue.password, user.password);
      setCookies('profile', { login: submitValue.login }, { maxAge: 60 * 60 });

      dispatch(setAuth({ ...user, isAuth }));
    },
    [users],
  );

  const onExit = useCallback(() => {
    dispatch(removeAuth());
    removeCookie('profile');
    setIsOpenModal(false);

    if (pathname.includes('/forum/profile')) {
      navigate(-1);
    }
  }, [dispatch, navigate, removeCookie, setIsOpenModal, pathname]);

  useEffect(() => {
    if (!session) {
      dispatch(removeAuth());
      setIsOpenModal(false);
    }
  }, [dispatch, session]);

  const Authorization = () => {
    if (!auth.isAuth) {
      return (
        <div>
          <button onClick={() => setIsOpenModal((e) => !e)}>Вход и регистрация</button>
          <Modal
            onOpen={isOpenModal}
            onCancel={setIsOpenModal}
            title={'Авторизация'}
            config={config}
            nameButton={{ first: 'Войти', second: 'Отменить' }}
            addUser
            onSave={onSave}
          />
        </div>
      );
    }

    return (
      <User>
        <div>
          <span>{auth.name}</span>
          <button onClick={() => onExit()}>Выйти</button>
        </div>
        <div>
          <Link to='forum/profile'>Личный кабинет</Link>
        </div>
      </User>
    );
  };

  return (
    <Template>
      <Logo to='/forum/'>
        <img src={logo} alt='логотип' />
      </Logo>
      <h1>Форум: Веселых людей</h1>
      <Profile>
        <Authorization />
      </Profile>
    </Template>
  );
};
