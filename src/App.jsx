import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Wrapper } from './styles/global';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'store';
import { Footer } from 'components/footer';
import { theme } from 'const/theme';
import { Header } from 'components/header';
import { CookiesProvider } from 'react-cookie';
import { Root } from 'components/route';

const App = () => (
  <CookiesProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider theme={theme}>
          <BrowserRouter>
            <Wrapper>
              <Header />
              <Root />
              <Footer />
            </Wrapper>
          </BrowserRouter>
        </ConfigProvider>
      </PersistGate>
    </Provider>
  </CookiesProvider>
);

export default App;
