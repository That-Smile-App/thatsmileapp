import React from 'react';
import Header from '../Components/Header';
import '../App.css';

const ContactUs = () => {
  return (
    <>
      <Header />
      <div
        style={{minHeight: 'calc(100vh - 106px)'}}
        className="gradient-background">
        <div class="px-5 pt-5">
          <div class="col-md-10 privacy-policy">
            <p className="contact-us px-5">Contact Us</p>
            <p className="contact-description px-5">
              We welcome your questions and feedback.
              Please contact us at:
            </p>
            <p className=".contact-email px-5">support@thatsmileapp.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
