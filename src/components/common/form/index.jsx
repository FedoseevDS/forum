import { Button, Template } from './styles';

export const Form = ({ onSubmit, config, nameButton, dataItem, onCancel, resetButton }) => {
  return (
    <Template onSubmit={onSubmit}>
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
  );
};
