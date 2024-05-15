import { useDispatch, useSelector } from 'react-redux';
import { addUser } from 'store/users';
import { nanoid } from 'nanoid';
import bcrypt from 'bcryptjs';
import { useState } from 'react';
import { Form } from 'components/common/form';

export const Registration = ({ onCancel }) => {
  const dispatch = useDispatch();

  const users = useSelector(({ users }) => users);

  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
      data.userId = nanoid();
    }

    if (users?.some(({ email }) => email === data.email)) {
      setError(true);
      return;
    }

    dispatch(
      addUser({
        ...data,
        password: bcrypt.hashSync(data.password, 5),
      }),
    );
    onCancel(false);
  };

  const configFields = [
    {
      label: 'Имя пользователя',
      index: 'name',
      required: true,
      placeholder: 'Введите имя пользователя',
    },
    {
      label: 'Подпись',
      index: 'signature',
      required: true,
      placeholder: 'Введите подпись пользователя',
    },
    {
      label: 'Адрес электронной почты',
      type: 'email',
      index: 'email',
      required: true,
      placeholder: 'Введите адрес электронной почты',
      checkEmail: error,
    },
    {
      label: 'Пароль',
      type: 'password',
      index: 'password',
      required: true,
      placeholder: 'Введите пароль',
    },
  ];

  const configButton = { first: 'Сохранить', second: 'Выйти' };

  return (
    <Form
      config={configFields}
      onCancel={onCancel}
      onSubmit={handleSubmit}
      nameButton={configButton}
      resetButton
    />
  );
};
