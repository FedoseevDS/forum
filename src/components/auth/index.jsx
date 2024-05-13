import { useDispatch, useSelector } from 'react-redux';
import { Form } from './styles';
import { setAuth } from 'store/auth';
import { useCookies } from 'react-cookie';
import bcrypt from 'bcryptjs';

export const Authorization = ({ onCancel }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [, setCookies] = useCookies();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    const user = users.find(({ email }) => email === data.email);

    const isAuth = !!user && bcrypt.compareSync(data.password, user.password);

    setCookies('profile', { login: data.login }, { maxAge: 60 * 60 });

    dispatch(setAuth({ ...user, isAuth }));
    onCancel(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Введите Логин</label>
      <input autoComplete='on' type='email' name='email' placeholder='Введите логин' />
      <label>Введите Пароль</label>
      <input autoComplete='on' type='password' name='password' placeholder='Введите пароль' />
      <div>
        <button type='submit'>Войти</button>
        <button onClick={() => onCancel(false)}>Отмена</button>
      </div>
    </Form>
  );
};
