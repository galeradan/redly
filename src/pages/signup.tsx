import { AuthForm, MasterLayout } from '@redly/components';
import React from 'react';

const SignupPage = () => {
  return <AuthForm headline="Welcome to Redly" subHeadline="Create an Account" isLogin={false}/>;
};

SignupPage.Layout = MasterLayout;

export default SignupPage;
