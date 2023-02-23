import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row me animated fadeIn">
          <div className="col-xs-offset-5 col-sm-offset-6 col-xs-7 col-sm-6">
            <div className="tagline2 animated fadeIn">HANA </div>
            <div className="tagline3 animated fadeIn">ACCIAIOLI </div>
            <div className="tagline1">Full-Stack Software Engineer</div>
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
