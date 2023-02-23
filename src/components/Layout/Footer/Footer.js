import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithubSquare, FaEnvelopeSquare } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="social-footer">
      <ul>
        <li className="highlight">
          <a
            className="fa-stack fa-1x"
            data-toggle="tooltip"
            title=""
            name="Email"
            data-placement="top"
            href="mailto:hana.acciaioli@gmail.com"
          >
            <FaEnvelopeSquare className="fa" />
          </a>
        </li>
        <li className="highlight">
          <a
            className="fa-stack fa-1x"
            data-toggle="tooltip"
            title=""
            name="LinkedIn"
            data-placement="top"
            href="https://www.linkedin.com/in/hana-jones-acciaioli/"
          >
            <FaLinkedin className="fa" />
          </a>
        </li>
        <li className="highlight">
          <a
            className="fa-stack fa-1x"
            data-toggle="tooltip"
            title=""
            name="Github"
            data-placement="top"
            href="https://github.com/hana-acciaioli"
          >
            <FaGithubSquare className="fa" />
          </a>
        </li>
      </ul>
      <div className="text-center copyright">
        <p>© 2023 Hana Jones Acciaioli. All rights reserved </p>
      </div>
    </footer>
  );
}
