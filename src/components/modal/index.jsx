import { useState } from 'react';
import { Button, Template } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createForum } from '../../store/forum';

export const Modal = ({ onCancel, title, placeholder }) => {
  // const data = useSelector((state) => state.forum.value);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

  // console.log('value', value);
  // console.log('data', data);

  const onSave = () => {
    dispatch(createForum(value));
    onCancel(false);
  };

  return (
    <Template>
      <div>
        <span>Создать {title}</span>
        <input
          type='text'
          placeholder={`Введите название ${placeholder}`}
          onChange={({ target }) => setValue(target.value)}
        />
        <Button>
          <button onClick={() => onSave()}>Сохранить</button>
          <button onClick={() => onCancel(false)}>Отменить</button>
        </Button>
      </div>
    </Template>
  );
};
