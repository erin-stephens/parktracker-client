/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
} from 'react-bootstrap';
import Logo from './Logo';
import UserProfile from './UserProfile';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <div className="logocontainer">
          <Link passHref href="/">
            <Navbar.Brand>
              <div
                className="logo"
                style={{
                  height: '50px',
                  width: '50px',
                }}
              >
                <Logo />
              </div>
            </Navbar.Brand>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/parks">
              <Nav.Link>Parks</Nav.Link>
            </Link>
            <Link passHref href="/trails">
              <Nav.Link>Trails</Nav.Link>
            </Link>
            <Link passHref href="/sites">
              <Nav.Link>Attractions</Nav.Link>
            </Link>
            <Link passHref href="/favorites">
              <Nav.Link>My Favorites</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="userprofilecontainer">
          <UserProfile />
        </div>
      </Container>
    </Navbar>
  );
}
