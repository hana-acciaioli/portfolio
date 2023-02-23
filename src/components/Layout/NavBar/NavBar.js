import React from 'react';
import { Link } from 'react-scroll';
import { RxHamburgerMenu } from 'react-icons/rx';
import './NavBar.css';

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">
                <RxHamburgerMenu />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-collapse-1">
              <a className="navbar-brand animated flip" href="home">
                Back to top
              </a>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
