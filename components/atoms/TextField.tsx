import React, { ReactElement, InputHTMLAttributes } from 'react';
import '../../styles/globals.scss';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string,
  _prefix?: ReactElement,
  suffix?: ReactElement,
  _size?: 'small' | 'medium' | 'large';
  title?: string;
  subtitle?: string;
  disabled?: boolean;
}

export default function TextField({
  placeholder,
  _prefix,
  suffix,
  _size,
  title,
  subtitle,
  disabled,
  ...nativeProps
}: TextFieldProps) {
  const textFieldSize = `kc-textfield--field--${_size}`;
  const textFieldDisable = disabled ? 'kc-textfield--disabled' : '';

  return (
    <div className={`kc-textfield ${textFieldDisable}`}>
      <div className="kc-textfield--title">
        <span className="kc-caption">{title}</span>
      </div>
      <div className={`kc-textfield--field ${textFieldSize}`}>
        {_prefix ? <div className="kc-textfield--prefix">{_prefix}</div> : null}
        <input
          placeholder={placeholder}
          disabled={disabled}
          {...nativeProps}
        />
        {suffix ? <div className="kc-textfield--suffix">{suffix}</div> : null}
      </div>
      <div className="kc-textfield--subtitle">
        <span className="kc-overline">{subtitle}</span>
      </div>
    </div>
  );
}

TextField.defaultProps = {
  _prefix: null,
  suffix: null,
  _size: 'medium',
  title: '',
  subtitle: '',
  disabled: false,
};
