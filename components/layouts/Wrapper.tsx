import React from 'react';

export interface WrapperProps {
  children: React.ReactElement;
}

export default function Wrapper({
  children,
}: WrapperProps) {
  return (
    <div className="kc-wrapper">
      <div className="kc-container">
        <div className="kc-title">
          <h1 className="kc-headline2">DCB</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
