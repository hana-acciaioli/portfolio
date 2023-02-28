import React from 'react';
import './About.css';
import { GiMountainClimbing, GiMountainRoad, GiHumanPyramid } from 'react-icons/gi';

export default function About() {
  return (
    <div className="section container-fluid" id="about">
      <div className="row section-banner">
        <div className="col-md-offset-3 col-md-6 text-center">
          <div className="center-row">
            <div>
              <span className="line about"></span>
              <span className="section-title about">about</span>
              <span className="line about"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="row max">
        <div className="col-sm-4 text-center">
          <div className="desc">
            <div className="icon-me">
              <img src="assets/images/hanaPortrait.jpg" />
            </div>
            <p>
              I&apos;m a Full-Stack Developer with an eye for design, UX and UI development and a
              strong desire to learn and create. I also have an appreciation for the data side of
              life and take great pride in clean code and thorough testing.
            </p>
          </div>
        </div>
        <div className="icon-row text-center">
          <div className="desc-row">
            <div className="icon-container">
              <GiMountainRoad />
            </div>
            <p>
              {/* I believe in life long learning and I&apos;m constantly exploring new ideas and
              technologies. */}
              My journey into tech began when I worked as a systems administrator for a
              ground-breaking circular textile company. Since then, I have immersed myself in the
              tech world, learning and working with a variety of modern web development tools.
            </p>
          </div>
          <div className="desc-row">
            <div className="icon-container">
              <GiHumanPyramid />
            </div>
            <p>
              I enjoy working with a team and am passionate about creating a positive work
              environment. I believe that humanity is at the heart of every successful project and I
              am committed to creating a positive impact in the world.
            </p>
          </div>
          <div className="desc-row">
            <div className="icon-container">
              <GiMountainClimbing />
            </div>
            <p>
              I love spending time outdoors and connecting to nature. My favorite activities are
              snowboarding, biking, climbing, and just walking. I also enjoy traveling and exploring
              new places and meeting new faces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
