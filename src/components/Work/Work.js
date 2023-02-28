import React from 'react';
import './Work.css';

export default function Work() {
  return (
    <div className="section container-fluid" id="work">
      <div className="row section-banner">
        <div className="col-md-offset-3 col-md-6 text-center">
          <div className="center-row">
            <div>
              <span className="line work"></span>
              <span className="section-title work">my work</span>
              <span className="line work"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row max">
        <div className="col-sm-offset-2 col-sm-8 text-center">
          <div className="desc">
            <p>
              Check out what I&apos;ve been working on! Details are on the back of the cards with
              links to the live sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
