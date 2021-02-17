import Link from 'next/link';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

interface AuthProps {
  headline: string;
  subHeadline: string;
  isLogin: boolean;
}

const AuthForm = ({ headline, subHeadline, isLogin }: AuthProps) => {
  return (
    <div className="auth-form">
      <Form className="card form-card">
        <div>
          <span className="headline">{headline}</span>
          <p className="sub-headline">{subHeadline}</p>
        </div>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </Form>
    </div>
  );
};

export default AuthForm;
