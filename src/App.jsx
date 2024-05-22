import { ConfigProvider } from 'antd';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'store';

import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Root } from 'components/route';

import { theme } from 'const/theme';

import { Wrapper } from './styles/global';

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
