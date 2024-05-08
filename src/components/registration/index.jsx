import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from './styles';
import { addUser } from 'store/users';
import { nanoid } from 'nanoid';
import bcrypt from 'bcryptjs';
import { useState } from 'react';

export const Registration = ({ onCancel }) => {
  const dispatch = useDispatch();

  const users = useSelector(({ users }) => users.users);

  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
      data.id = nanoid();
    }

    if (users.some(({ email }) => email === data.email)) {
      setError(true);
      return;
    }

    dispatch(addUser({ ...data, password: bcrypt.hashSync(password, 5) }));
    onCancel(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Имя пользователя</label>
      <input type='text' name='name' required placeholder='Введите имя пользователя' />
      <label>Подпись</label>
      <input type='text' name='signature' required placeholder='Введите подпись пользователя' />
      <label>Адрес электронной почты</label>
      <input type='email' name='email' required placeholder='Введите адрес электронной почты' />
      {error && <span>Такой адрес электронной почты уже существует</span>}
      <label>Пароль</label>
      <input type='password' minLength={4} name='password' required placeholder='Введите пароль' />
      <Button>
        <button type='reset' onClick={() => setError(false)}>
          Очистить
        </button>
        <button type='submit'>Сохранить</button>
        <button onClick={() => onCancel(false)}>Выйти</button>
      </Button>
    </Form>
  );
};
