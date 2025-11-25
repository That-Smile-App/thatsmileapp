import React from 'react';
import logo from '../Images/logos.png';

// Styles
import '../App.css';

const About = () => {
  return (
    <>
      <div
        className="gradient-background about-container"
        style={{minHeight: 'calc(100vh - 106px)'}}>
        <div className="container-box about-main-header">
          <img
            src={logo}
            alt="My Image"
            className="mbl-img align-items-center"
          />

          <div className="mt-3 align-item-center text-center">
            <div className="col-md-12">
              <p className="about-header text-center">
                Changing your world one smile at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
