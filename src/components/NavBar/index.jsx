import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
export default function NavBar() {
  return (
    <React.Fragment>
      {/* <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <Link className="navbar-brand" to="/">
          myApp
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="home">
            home
          </Link>
          <Link className="nav-item nav-link active" to="portfolio">
            portfolio
          </Link>
          <Link className="nav-item nav-link active" to="detail">
            detail
          </Link>
          <Link className="nav-item nav-link active" to="about">
            about
          </Link>
        </div>
      </nav> */}
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <Link className="navbar-brand" to="/">
          <a class="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </Link>



        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link className="navbar-item nav-link active" to="home">
              Home
          </Link>
            <Link className="navbar-item nav-link active" to="portfolio">
              Portfolio
          </Link>
            <Link className="navbar-item nav-link active" to="detail">
              Detail
          </Link>
            <Link className="navbar-item nav-link active" to="about">
              About
          </Link>



          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
          </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </React.Fragment>
  );
}
