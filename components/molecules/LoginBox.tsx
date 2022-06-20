import React from 'react';
import TextField from '../atoms/TextField';
import Button from '../atoms/Button';

export interface LoginBoxProps {
  visible: boolean;
  title: string;
  colorIdentity: string;
  closeHandler: Function;
}

export default function LoginBox({
  visible,
  title,
  colorIdentity,
  closeHandler,
}: LoginBoxProps) {
  return (
    <div className={`kc-login-box-backdrop ${visible ? 'kc-login-box-backdrop--visible' : ''}`}>
      <div className="kc-login-wrapper">
        <div className="kc-login-identity-bar" style={{ backgroundColor: `${colorIdentity}` }} />
        <button className="kc-popup-close" type="button" onClick={() => closeHandler()}>
          <span className="fa fa-close" />
        </button>
        <div className="kc-login-box--content">
          <h2 className="kc-headline4">{title}</h2>
          <div className="kc-form-group">
            <div className="kc-input-group">
              <label htmlFor="email" className="kc-body1">Email</label>
              <div className="kc-input">
                <TextField
                  id="email"
                  placeholder="Username or email"
                />
              </div>
            </div>
            <div className="kc-input-group">
              <label htmlFor="password" className="kc-body1">Password</label>
              <div className="kc-input">
                <TextField
                  id="password"
                  placeholder="******"
                />
              </div>
            </div>
          </div>
          <Button
            label="login"
            size="long"
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
