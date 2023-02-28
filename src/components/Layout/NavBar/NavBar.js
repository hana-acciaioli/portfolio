import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring/web';
import { Link } from 'react-scroll';
import { RxHamburgerMenu } from 'react-icons/rx';
import './NavBar.css';

export default function NavBar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const menuAnimation = useSpring({
  //   opacity: isMenuOpen ? 1 : 0,
  //   height: isMenuOpen ? '100px' : '0px',
  //   overflow: 'hidden',
  //   config: { tension: 250, friction: 20 },
  // });

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

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
              // onClick={toggleMenu}
            >
              <span className="sr-only">
                <RxHamburgerMenu />
              </span>
            </button>
            <div
              // style={menuAnimation}
              className="collapse navbar-collapse"
              id="navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="work" spy={true} smooth={true} duration={500}>
                    Work
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" to="resume" spy={true} smooth={true} duration={500}>
                    Resume
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
