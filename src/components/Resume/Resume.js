import React from 'react';
import './Resume.css';

export default function Resume() {
  return (
    <div className="section container-fluid" id="resume">
      <div className="row section-banner">
        <div className="col-md-offset-3 col-md-6 text-center">
          <div className="center-row">
            <div>
              <span className="line Resume"></span>
              <span className="section-title Resume">resume</span>
              <span className="line Resume"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row max">
        <div className="col-sm-offset-2 col-sm-8 text-center">
          <div className="desc">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
