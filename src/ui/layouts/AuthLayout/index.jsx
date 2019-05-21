import React from 'react';
import './index.scss';

const AuthLayout = ({ children, ...rest }) => (
    <div className="auth-layout">
      {children}
    </div>
);

export default AuthLayout;
