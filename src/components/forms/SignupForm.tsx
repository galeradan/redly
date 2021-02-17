import Link from 'next/link';
import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SignupForm = () => {
  return (
    <>
      <div className="form-card-group">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formCheckpassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </div>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
      <div className="form-card-group">
        <p>
          Already have an account?&nbsp;
          <Link href="/login">
            <a href="/login">Log in</a>
          </Link>
        </p>
      </div>
    </>
  );
};
export default SignupForm;
