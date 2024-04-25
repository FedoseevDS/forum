import { Link } from 'react-router-dom';
import { Logo, Profile, Template } from './styles';
import { Modal } from 'components/modal';
import { logo } from './consts';
import { useEffect, useMemo, useState } from 'react';
import { Cookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { removeAuth, setAuth } from 'store/auth';

const cookies = new Cookies();

export const Header = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  console.log('auth', auth);

  const [isAuthorization, setIsAuthorization] = useState(false);

  const token = cookies.get('profile');

  useEffect(() => {
    if (!token) {
      dispatch(removeAuth({ login: null, password: null, isAuth: false, id: null }));
    }

    // console.log('isAuth', isAuth);
  }, [dispatch, token]);

  return (
    <Template>
      <Logo to='/forum/'>
        <img src={logo} alt='логотип' />
      </Logo>
      <h1>Форум: Веселых людей</h1>
      <Profile>
        {!auth.profile.isAuth ? (
          <div>
            <button onClick={() => setIsAuthorization((e) => !e)}>Вход и регистрация</button>
            <Modal isAuthorization onOpen={isAuthorization} onCancel={setIsAuthorization} />
          </div>
        ) : (
          <div>привет</div>
        )}
      </Profile>
    </Template>
  );
};
