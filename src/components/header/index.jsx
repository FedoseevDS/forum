import { Template } from './styles';
import { Layout } from 'antd';

export const Header = () => {
  return (
    <Layout.Header>
      <Template>
        <div>лого</div>
        <div>название</div>
        <div>личный кабинет</div>
      </Template>
    </Layout.Header>
  );
};
