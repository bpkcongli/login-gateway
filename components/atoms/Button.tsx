import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string,
  model?: 'primary' | 'secondary';
  size?: 'short' | 'long';
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({
  label,
  model,
  size,
  disabled,
  loading,
  ...nativeProps
}: ButtonProps) {
  const btnType = `kc-button--${model}`;
  const btnSize = `kc-button--${size}`;

  return (
    <button
      type="button"
      className={['kc-button', btnSize, btnType].join(' ')}
      disabled={disabled}
      {...nativeProps}
    >
      {loading ? null : <span className="kc-button-label">{label}</span>}
    </button>
  );
}

Button.defaultProps = {
  model: 'primary',
  size: 'short',
  disabled: false,
  loading: false,
};
