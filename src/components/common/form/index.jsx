import { Button, Template } from './styles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEditor } from 'store/forum';
import { nanoid } from 'nanoid';
import { Markdown } from '../markdown';

export const Form = ({
  onSubmit,
  config,
  nameButton,
  dataItem,
  onCancel,
  resetButton,
  markdown,
}) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const [value, setValue] = useState(null);

  const onSave = () => {
    dispatch(
      createEditor({
        value,
        id: nanoid(),
        parentId: undefined,
        depth: undefined,
        isTheme: false,
        user: {
          userId: user.userId,
          name: user.name,
          signature: user.signature,
          email: user.email,
        },
      }),
    );
    onCancel(false);
  };

  return (
    <>
      {!markdown ? (
        <Template onSubmit={onSubmit} id='form'>
          {config.map(({ label, index, required, placeholder, type, checkEmail }) => (
            <div key={label}>
              <label>{`${label}:`}</label>
              <input
                type={type || 'text'}
                name={index}
                autoComplete='on'
                required={required}
                placeholder={placeholder}
                defaultValue={dataItem && dataItem[index]}
              />

              {checkEmail && <span>Такой адрес электронной почты уже существует</span>}
            </div>
          ))}
          <Button>
            {resetButton && <button type='reset'>Очистить</button>}
            <button type='submit'>{nameButton.first}</button>
            <button onClick={() => onCancel(false)}>{nameButton.second}</button>
          </Button>
        </Template>
      ) : (
        <Markdown onCancel={onCancel} onSave={onSave} nameButton={nameButton} setValue={setValue} />
      )}
    </>
  );
};
