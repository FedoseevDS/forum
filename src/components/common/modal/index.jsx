import { useState } from 'react';
import { Template } from './styles';
import { Registration } from 'components/registration';
import { Form } from '../form';

export const Modal = ({
  onOpen,
  onCancel,
  onSave,
  title,
  config,
  dataItem,
  addUser,
  nameButton = { first: 'Сохранить', second: 'Отменить' },
  children,
  isForm = true,
}) => {
  if (!onOpen) {
    return;
  }

  const [isRegistration, setisRegistration] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const submitValue = {};
    for (let [key, value] of formData.entries()) {
      submitValue[key] = value;
    }

    onSave(submitValue);
    onCancel(false);
  };

  return (
    <Template>
      <div>
        <span>{title}</span>
        {children}
        {isForm ? (
          <Form
            onSubmit={handleSubmit}
            config={config}
            nameButton={nameButton}
            dataItem={dataItem}
            onCancel={onCancel}
          />
        ) : (
          <button onClick={() => onCancel(false)}>Закрыть</button>
        )}
        {addUser && (
          <button onClick={() => setisRegistration((e) => !e)}>Зарегистрироваться</button>
        )}
        {isRegistration && <Registration onCancel={onCancel} />}
      </div>
    </Template>
  );
};
