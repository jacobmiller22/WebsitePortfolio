import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "../styles/Header.module.css";

export const Header = () => {
  return (
    <Navbar sticky="top" id={styles.nav} className="nav">
      <Navbar.Brand
        href="/"
        className={`${styles["navbar-brand"]} ${styles.link}`}
      >
        Jacob Miller
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="/#projects">Projects</Nav.Link>

          <Nav.Link href="/#about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav id={styles["right-side"]}>
        <Nav.Link href="/admin">Admin</Nav.Link>
      </Nav>
      <div id={styles["nav-blur"]} />
    </Navbar>
  );
};

export default Header;