import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/enter-numbers" style={styles.link}>
            Create a Tree
          </Link>
        </li>
        <li style={styles.li}>
          <Link to="/previous-trees" style={styles.link}>
            View Previous Trees
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#344",
    padding: "10px",
  },
  ul: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "space-around",
  },
  li: {
    display: "inline",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default NavBar;
