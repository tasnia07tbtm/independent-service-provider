import React, { Fragment } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Fragment>
      <div className="row w-100  mx-0 footer-aria text-white p-5">
        <div className="col-md-3 footer">
          <h6 className="mb-4">About us</h6>
          <p>
            We Welcome New Patients, Including Those With Medicare. Call For More Information. Hormone And Testosterone Therapies, Behavioral Health, Weight Loss, Sleep Apnea & More. Medicare Accepted.
          </p>
        </div>
        <div className="col-md-3 footer">
          <h6 className="mb-4">QuickLinks</h6>

          <h6 className="hover-style" >Home</h6>
          <h6 className="hover-style">services</h6>
          <h6 className="hover-style">Blog</h6>
          <h6 className="hover-style">Contact</h6>
          <h6 className="hover-style">About </h6>


        </div>
        <div className="col-md-3 footer">
          <h6 className="mb-4">Press</h6>
          <h6 className="hover-style">Press Release</h6>
          <h6 className="hover-style">Contact Us</h6>
          <h6 className="hover-style">Family Help</h6>
        </div>
        <div className="col-md-3 footer">
          <h6 className="mb-4"> <FontAwesomeIcon className="text-white" icon={faLocationDot} /> Address</h6>
          <h6 className="hover-style"> <FontAwesomeIcon className="text-white" icon={faPhone} /> +64584684455</h6>
          <h6 className="hover-style"> <FontAwesomeIcon className="text-white" icon={faEnvelope} />dr.ibrahimislam@gmail.com</h6>
        </div>
        <p className="copyright">
          <small>Copyright {year} © Dr.ibrahim islam</small>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
