import { Layout } from 'antd';
import { Photo, Template } from './styles';
import Avatar from 'assets/img/avatar.jpg';

export const Profile = () => (
  <Layout.Content>
    <Template>
      <div>
        <Photo>
          <img src={Avatar} alt='пользователь' />
        </Photo>
        <div>
          <div>e-mail</div>
          <div>Подпись</div>
        </div>
      </div>
    </Template>
  </Layout.Content>
);
