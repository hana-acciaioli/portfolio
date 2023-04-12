import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="section container-fluid" id="contact">
      <div className="row section-banner">
        <div className="col-md-offset-3 col-md-6 text-center">
          <div className="center-row">
            <div>
              <span className="line contact"></span>
              <span className="section-title contact">contact</span>
              <span className="line contact"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row max">
        <div className="col-sm-offset-2 col-sm-8 text-center">
          <div className="desc">
            <p>Want to talk coding, design, or just say hi? Send me a message!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
