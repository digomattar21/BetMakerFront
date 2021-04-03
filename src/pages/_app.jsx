import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global-styles';
import P from 'prop-types';
import AuthContext from '../context/UserProvider/context';
import { useState } from 'react';
import Api from '../utils/api.utils';
import UserInfoContext from '../context/UserInfoProvider/context';

export default function App({ Component, pageProps }) {
  const [userAuth, setUserAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const changeUserAuth = (value) => {
    setUserAuth(value);
  };

  const getUserInfo = async () => {
    try {
      let req = await Api.getUserInfo();
      if (req.status === 200 || req.status === 201) {
        setUserInfo(req.data.user);
        console.log('user', req.data.user);
        return req.data.user;
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <AuthContext.Provider
        value={{ userAuth: userAuth, changeUserAuth: changeUserAuth }}
      >
        <UserInfoContext.Provider
          value={{ userInfo: userInfo, getUserInfo: getUserInfo }}
        >
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <style jsx global>{`
              @font-face {
                font-family: 'Pragmatica-EL';
                src: url('/assets/fonts/Pragmatica-ExtraLight.ttf');
                font-weight: bold;
                font-style: normal;
                font-display: swap;
              }
            `}</style>
          </ThemeProvider>
        </UserInfoContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

App.propTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.any,
};
