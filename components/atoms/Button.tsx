import React from 'react';

export interface ButtonProps {
  label: string,
  type?: 'primary' | 'secondary';
  size?: 'short' | 'long';
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({
  label,
  type,
  size,
  disabled,
  loading,
  ...nativeProps
}: ButtonProps) {
  const btnType = `kc-button--${type}`;
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
  type: 'primary',
  size: 'short',
  disabled: false,
  loading: false,
};
