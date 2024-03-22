import Link from "next/link";
import React from "react";

function contact() {
  return (
    <>
      <div id="breadcrumb" className="division">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-holder">
                {/* Breadcrumb Nav */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="demo-1.html">Home</a>
                    </li>

                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
                    </li>
                  </ol>
                </nav>
                {/* Title */}
                <h4 className="h4-sm steelblue-color">Contact Us</h4>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      <section id="contacts-1" className="wide-60 contacts-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              {/* Title 	*/}
              <h3 className="h3-md steelblue-color">
                Have a Question? Get In Touch
              </h3>
              {/* Text */}
              <p>
                Have a question? Want to book an appointment for yourself or
                your children? Give us a call or send an email to contact the
                MedService.
              </p>
            </div>
          </div>
          <div className="row">
            {/* CONTACTS INFO */}
            <div className="col-md-5 col-lg-4">
              {/* General Information */}
              <div className="contact-box mb-40">
                <h5 className="h5-sm steelblue-color">General Information</h5>
                <p>121 King Street, Melbourne,</p>
                <p>Victoria 3000 Australia</p>
                <p>Phone: +12 9 8765 4321</p>
                <p>
                  Email:{" "}
                  <a href="mailto:yourdomain@mail.com" className="blue-color">
                    hello@yourdomain.com
                  </a>
                </p>
              </div>
              {/* Patient Experience */}
              <div className="contact-box mb-40">
                <h5 className="h5-sm steelblue-color">Patient Experience</h5>
                <p>Hannah Harper - Patient Experience Coordinator</p>
                <p>Phone: +12 9 8765 4321</p>
                <p>
                  Email:{" "}
                  <a href="mailto:yourdomain@mail.com" className="blue-color">
                    hello@yourdomain.com
                  </a>
                </p>
              </div>
              {/* Working Hours */}
              <div className="contact-box mb-40">
                <h5 className="h5-sm steelblue-color">Working Hours</h5>
                <p>Monday – Friday : 8:00 AM - 8:00 PM</p>
                <p>Saturday : 10:00 AM - 6:00 PM</p>
                <p>Sunday : 10:00 AM - 4:00 PM</p>
              </div>
            </div>{" "}
            {/* END CONTACTS INFO */}
            {/* CONTACT FORM */}
            <div className="col-md-7 col-lg-8">
              <div className="form-holder mb-40">
                <form name="contactForm" className="row contact-form">
                  {/* Contact Form Input */}
                  <div id="input-name" className="col-md-12 col-lg-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control name"
                      placeholder="Enter Your Name*"
                      required=""
                    />
                  </div>
                  <div id="input-email" className="col-md-12 col-lg-6">
                    <input
                      type="text"
                      name="email"
                      className="form-control email"
                      placeholder="Enter Your Email*"
                      required=""
                    />
                  </div>
                  <div id="input-phone" className="col-md-12 col-lg-12">
                    <input
                      type="tel"
                      name="phone"
                      className="form-control phone"
                      placeholder="Enter Your Phone Number*"
                      required=""
                    />
                  </div>

                  <div id="input-message" className="col-lg-12 input-message">
                    <textarea
                      className="form-control message"
                      name="message"
                      rows={6}
                      placeholder="Your Message ..."
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  {/* Contact Form Button */}
                  <div className="col-lg-12 mt-15 form-btn">
                    <button
                      type="submit"
                      className="btn btn-blue blue-hover submit"
                    >
                      Send Your Message
                    </button>
                  </div>
                  {/* Contact Form Message */}
                  <div className="col-lg-12 contact-form-msg text-center">
                    <div className="sending-msg">
                      <span className="loading" />
                    </div>
                  </div>
                </form>
              </div>
            </div>{" "}
            {/* END CONTACT FORM */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* END CONTACTS-1 */}
    </>
  );
}

export default contact;
