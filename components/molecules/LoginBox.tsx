import React, { useState } from 'react';
import TextField from '../atoms/TextField';
import Button from '../atoms/Button';
import AdminAuthenticationService from '../../services/admin-authentication';
import { LoginPayload } from '../../services/admin-authentication/types';

export interface LoginBoxProps {
  visible: boolean;
  title: string;
  colorIdentity: string;
  closeHandler: Function;
  loginHandler: Function;
}

export default function LoginBox({
  visible,
  title,
  colorIdentity,
  closeHandler,
  loginHandler,
}: LoginBoxProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onClickHandler = async () => {
    const loginPayload: LoginPayload = { username, password };
    const loginFetchResult = await AdminAuthenticationService.login(loginPayload);
    loginHandler(loginFetchResult);
  };

  const onClickClosePopupButton = () => {
    setUsername('');
    setPassword('');
    closeHandler();
  };

  return (
    <div className={`kc-login-box-backdrop ${visible ? 'kc-login-box-backdrop--visible' : ''}`}>
      <div className="kc-login-wrapper">
        <div className="kc-login-identity-bar" style={{ backgroundColor: `${colorIdentity}` }} />
        <button className="kc-popup-close" type="button" onClick={() => onClickClosePopupButton()}>
          <span className="fa fa-close" />
        </button>
        <div className="kc-login-box--content">
          <h2 className="kc-headline4">{title}</h2>
          <div className="kc-form-group">
            <div className="kc-input-group">
              <label htmlFor="email" className="kc-body1">Email</label>
              <div className="kc-input">
                <TextField
                  type="text"
                  id="email"
                  placeholder="Username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="kc-input-group">
              <label htmlFor="password" className="kc-body1">Password</label>
              <div className="kc-input">
                <TextField
                  type="password"
                  id="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <Button
            label="login"
            size="long"
            onClick={onClickHandler}
          />
          <div className="kc-login-box--caption">
            <p className="kc-caption">
              Lupa password?
              <a href="/forgot-password">  Klik disini</a>
            </p>
            <p className="kc-caption">
              Belum menerima email verifikasi?
              <a href="/request-verification-link">  Klik disini</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
