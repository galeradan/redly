import Link from 'next/link';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <>
      <div className="form-card-group">
        <Form.Group controlId="formUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter " />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </div>
      <Button variant="primary" type="submit">
        Log in
      </Button>
      <div className="form-card-group">
        <p>
          New to Redly?&nbsp;
          <Link href="/signup">
            <a href="/signup">Sign up</a>
          </Link>
        </p>
      </div>
    </>
  );
};
export default LoginForm;
