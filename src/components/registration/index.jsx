import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from './styles';
import { addUser } from 'store/users';
import { nanoid } from 'nanoid';

const id = nanoid();

export const Registration = ({ onCancel }) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
      data.id = id;
    }

    dispatch(addUser(data));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Имя пользователя</label>
      <input type='text' name='name' required placeholder='Введите имя пользователя' />
      <label>Подпись</label>
      <input type='text' name='signature' required placeholder='Введите подпись пользователя' />
      <label>Адрес электронной почты</label>
      <input type='email' name='email' required placeholder='Введите адрес электронной почты' />
      <label>Пароль</label>
      <input
        type='password'
        minLength={4}
        name='newPassword'
        required
        placeholder='Введите пароль'
      />
      <label>Пароль еще раз</label>
      <input
        type='password'
        minLength={4}
        name='againPassword'
        required
        placeholder='Введите пароль еще раз'
      />
      <Button>
        <button type='reset'>Очистить</button>
        <button type='submit'>Сохранить</button>
        <button onClick={() => onCancel(false)}>Выйти</button>
      </Button>
    </Form>
  );
};
