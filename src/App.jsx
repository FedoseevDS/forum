import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Main } from './pages/main';
import { ConfigProvider } from 'antd';
import { theme } from './const/theme';
import { Profile } from './pages/profile';
import { Wrapper } from './styles/global';
import { Provider } from 'react-redux';
import store from './store';
import { Footer } from './components/footer';

const App = () => (
  <Provider store={store}>
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route path='/forum/*' element={<Main />} />
            <Route path='/forum/profile/*' element={<Profile />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);

export default App;
