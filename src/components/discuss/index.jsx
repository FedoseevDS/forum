import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom/dist';
import { Block, Template } from './styles';

export const Discuss = () => {
  const data = useSelector((state) => state.forum.value);
  const params = useParams();
  const navigate = useNavigate();

  console.log('data', data);
  console.log('params', params);

  const { value } = data.find(({ id }) => id === params.id);

  const onComment = () => {};

  const onBack = () => {
    navigate(-1);
  };

  return (
    <Template>
      <div>
        <span>Тема обсуждения:</span>
        <span>{value}</span>
      </div>
      <Block>
        <div>
          <button onClick={() => onComment()}>Добавить комментарий</button>
          <button onClick={() => onBack()}>Назад</button>
        </div>
      </Block>
    </Template>
  );
};
