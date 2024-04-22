import { Link } from 'react-router-dom';
import { Logo, Template } from './styles';

export const Header = () => {
  const logo =
    'https://tochka-rosta-sokolniki.ru/800/600/https/www.clipartmax.com/png/full/5-54057_people-cliparts-transparent-happy-new-year-message-for-friends.png';

  return (
    <Template>
      <Logo to='/forum/'>
        <img src={logo} alt='логотип' />
      </Logo>
      <h1>Форум: Веселых людей</h1>
      <Link to='forum/profile'>личный кабинет</Link>
    </Template>
  );
};
