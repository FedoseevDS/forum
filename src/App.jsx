import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Main } from './pages/main';
import { ConfigProvider, Layout } from 'antd';
import { theme } from './const/theme';

const App = () => {
  console.log('Layout', Layout);
  const { Content, Footer } = Layout;

  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes>
            <Route
              path='/forum/*'
              element={<Main />}
            />
          </Routes>
          <Footer>
            <span>Разработчик: Федосеев Д.С.</span>
            <br />
            <a href='https://github.com/FedoseevDS/forum'>
              GitHub: https://github.com/FedoseevDS/forum
            </a>
          </Footer>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
