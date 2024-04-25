import { useDispatch, useSelector } from 'react-redux';
import { Form } from './styles';
import { setAuth } from 'store/auth';
import { useCookies } from 'react-cookie';

export const Authorization = ({ onCancel }) => {
  // const [login, setLogin]
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => users.users);

  console.log('users', users);

  const [cookies, setCookies, removeCookie] = useCookies();

  // const clickHandler = useCallback(
  //   () =>
  //     authorizeAction({ password, username }).then((res) => {
  //       if (res.data) {
  //         const { r7Token, token } = res.data.body;

  //         dispatch(setNoAuth(false));
  //         setCookies('token', token, { maxAge: 60 * 60 * 24 });
  //         setCookies('r7Token', r7Token, { maxAge: 60 * 60 * 24 });
  //         navigate(prevPage || '/');
  //         removeCookie('prev-page');
  //       } else {
  //         console.warn('Ошибка:', res.error);
  //       }
  //     }),
  //   [dispatch, navigate, authorizeAction, setCookies, removeCookie, username, password, prevPage],
  // );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    const isAuth = users.some(
      ({ email, newPassword }) => email === data.login && newPassword === data.password,
    );
    const userId = users.find(({ email }) => email === data.login).id;

    const { login, password } = data;

    setCookies('profile', { login, password }, { maxAge: 10 });

    dispatch(setAuth({ ...data, isAuth, userId }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Введите Логин</label>
      <input autoComplete='on' type='email' name='login' placeholder='Введите логин' />
      <label>Введите Пароль</label>
      <input autoComplete='on' type='password' name='password' placeholder='Введите пароль' />
      <div>
        <button type='submit'>Войти</button>
        <button onClick={() => onCancel(false)}>Отмена</button>
      </div>
    </Form>
  );
};
