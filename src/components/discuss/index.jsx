import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom/dist';
import { Block, Template, TextArea } from './styles';
import { nanoid } from 'nanoid';
import { useCallback, useState } from 'react';

export const Discuss = () => {
  const navigate = useNavigate();
  const param = useParams();

  const [clearValue, setClearValue] = useState('');

  const data = useSelector((state) => state.forum.value);

  const { value } = data?.find(({ id }) => id === param.id);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = {};
    for (let [key, value] of formData.entries()) {
      comment[key] = value;
      comment.id = nanoid();
    }

    dispatch(createDiscuss({ ...comment }));
    setClearValue('');
  }, []);

  return (
    <Template>
      <div>
        <span>Тема обсуждения:</span>
        <span>{value}</span>
      </div>
      <Block>
        <form onSubmit={handleSubmit}>
          <TextArea>
            <label>Комментарий:</label>
            <textarea
              type='textarea'
              name='comment'
              placeholder='Введите комментарий'
              onChange={({ target }) => setClearValue(target.value)}
              value={clearValue}
            />
          </TextArea>
          <div>
            <button type='submit'>Добавить комментарий</button>
            <button onClick={() => navigate(-1)}>Назад</button>
          </div>
        </form>
      </Block>
    </Template>
  );
};
