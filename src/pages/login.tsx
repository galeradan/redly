import { AuthForm, MasterLayout } from '@redly/components';
import React from 'react';

const LoginPage = () => {
  return (
    <AuthForm
      headline="Welcome Back"
      subHeadline="Log in to your account"
      isLogin
    />
  );
};

LoginPage.Layout = MasterLayout;

export default LoginPage;
