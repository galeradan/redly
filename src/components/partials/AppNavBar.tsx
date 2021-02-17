import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const AppNavBar = () => {
  return (
    <>
      <Navbar className="app-nav" fixed="top">
        <Link href="/" passHref>
          <Navbar.Brand className="redly-brand">Redly</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" activeKey="/">
            <Link href="/login" passHref>
              <Nav.Link>Log In</Nav.Link>
            </Link>
            <Link href="/signup" passHref>
              <Nav.Link>Sign up</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppNavBar;
