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
          </div>
        </div>
      </div>
    </div>
  );
}
