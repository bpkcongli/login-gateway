import Head from 'next/head';
import React, { useState } from 'react';
import Router from 'next/router';
import { toast } from 'react-toastify';
import LoginBox from '../components/organisms/LoginBox';
import Wrapper from '../components/layouts/Wrapper';
import {
  LOGIN_ADMIN,
  LOGIN_CS,
  LOGIN_FUNDING,
  LOGIN_LENDING,
} from '../config';

interface TypeLogin {
  id: string;
  title: string;
  colorIdentity: string;
  redirectTo: string;
}

export default function Home() {
  const [typeLogin, setTypeLogin] = useState('');
  const [isLoginBoxVisible, setIsLoginBoxVisible] = useState(false);
  const TYPE_LOGIN: Record<string, TypeLogin> = {
    loginAdmin: {
      id: 'loginAdmin',
      title: 'Login Admin',
      colorIdentity: '#DE5B5B',
      redirectTo: LOGIN_ADMIN,
    },
    loginCs: {
      id: 'loginCs',
      title: 'Login CS',
      colorIdentity: '#78D16A',
      redirectTo: LOGIN_CS,
    },
    loginFunding: {
      id: 'loginFunding',
      title: 'Login Funding',
      colorIdentity: '#4C82D2',
      redirectTo: LOGIN_FUNDING,
    },
    loginLending: {
      id: 'loginLending',
      title: 'Login Lending',
      colorIdentity: '#5F4CD2',
      redirectTo: LOGIN_LENDING,
    },
  };

  const onClickHandler = (typeLogin: string): void => {
    setTypeLogin(typeLogin);
    setIsLoginBoxVisible(true);
  };

  const onCloseLoginBoxHandler = () => {
    setTypeLogin('');
    setIsLoginBoxVisible(false);
  };

  const loginHandler = (fetchResult: any) => {
    setIsLoginBoxVisible(false);
    if (fetchResult.error) {
      toast.error(fetchResult.message);
    } else {
      Router.replace(typeLogin && TYPE_LOGIN[typeLogin].redirectTo);
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Login Backoffice - Digital Community Bank</title>
      </Head>
      <Wrapper>
        <>
          <div className="kc-login-gate">
            {Object.keys(TYPE_LOGIN).map((type) => {
              const typeLogin = TYPE_LOGIN[type];
              return (
                <button type="button" id={`navigation-${typeLogin.id}`} key={typeLogin.id} onClick={() => onClickHandler(typeLogin.id)}>
                  <div className="kc-box-navigation">
                    <p className="kc-box-navigation--label kc-headline4">{typeLogin.title}</p>
                  </div>
                </button>
              );
            })}
          </div>
          <LoginBox
            visible={isLoginBoxVisible}
            title={typeLogin && TYPE_LOGIN[typeLogin].title}
            colorIdentity={typeLogin ? TYPE_LOGIN[typeLogin].colorIdentity : '#CBCBCB'}
            closeHandler={onCloseLoginBoxHandler}
            loginHandler={loginHandler}
          />
        </>
      </Wrapper>
    </>
  );
}
