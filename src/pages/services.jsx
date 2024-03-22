import Link from "next/link";

import React from "react";

function services() {
  return (
    <>
      {/* BREADCRUMB
			============================================= */}
      <div id="breadcrumb" className="division">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className=" breadcrumb-holder">
                {/* Breadcrumb Nav */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item">
                <a href="departments.html">Departments</a>
              </li> */}
                    <li className="breadcrumb-item active" aria-current="page">
                      Service
                    </li>
                  </ol>
                </nav>
                {/* Title */}
                <h4 className="h4-sm steelblue-color">Services</h4>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* END BREADCRUMB */}
      <section id="services-2" className="wide-70 services-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              {/* Title 	*/}
              <h3 className="h3-md steelblue-color">Our Services</h3>
              {/* Text */}
              <p>
                Where Health Meets Happiness: Creating Healthy Smiles and
                Brighter Futures
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div
                className="sbox-2 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <Link href="/servicesDetails">
                  {" "}
                  <a>
                    {/* Icon  */}
                    <div className="sbox-2-icon">
                      <img
                        className="img-80"
                        src="images/icons/braces.png"
                        alt="service-icon"
                      />
                    </div>
                    {/* Title */}
                    <h5 className="h5-sm sbox-2-title">Tooth Braces</h5>
                  </a>
                </Link>
              </div>
            </div>

            {/* SERVICE BOX #2 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="sbox-2 wow fadeInUp"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <Link href="/servicesDetails">
                  {/* Icon  */}
                  <div className="sbox-2-icon">
                    <img
                      className="img-80"
                      src="images/icons/implant.png"
                      alt="service-icon"
                    />
                  </div>
                  {/* Title */}
                  <h5 className="h5-sm sbox-2-title">Dental Implants</h5>
                </Link>
              </div>
            </div>
            {/* SERVICE BOX #3 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="sbox-2 wow fadeInUp"
                data-wow-delay="0.8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInUp",
                }}
              >
                <Link href="/servicesDetails">
                  {/* Icon  */}
                  <div className="sbox-2-icon">
                    <img
                      className="img-80"
                      src="images/icons/broken.png"
                      alt="service-icon"
                    />
                  </div>
                  {/* Title */}
                  <h5 className="h5-sm sbox-2-title">Paradontosis</h5>
                </Link>
              </div>
            </div>
            {/* SERVICE BOX #4 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="sbox-2 wow fadeInUp"
                data-wow-delay="1s"
                style={{
                  visibility: "visible",
                  animationDelay: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <Link href="/servicesDetails">
                  {/* Icon  */}
                  <div className="sbox-2-icon">
                    <img
                      className="img-80"
                      src="images/icons/calculus.png"
                      alt="service-icon"
                    />
                  </div>
                  {/* Title */}
                  <h5 className="h5-sm sbox-2-title">Dental Calculus</h5>
                </Link>
              </div>
            </div>
            {/* SERVICE BOX #5 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="sbox-2 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <Link href="/servicesDetails">
                  {/* Icon  */}
                  <div className="sbox-2-icon">
                    <img
                      className="img-80"
                      src="images/icons/equipment.png"
                      alt="service-icon"
                    />
                  </div>
                  {/* Title */}
                  <h5 className="h5-sm sbox-2-title">Teeth Whitening</h5>
                </Link>
              </div>
            </div>
            {/* SERVICE BOX #6 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="sbox-2 wow fadeInUp"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <Link href="/servicesDetails">
                  {/* Icon  */}
                  <div className="sbox-2-icon">
                    <img
                      className="img-80"
                      src="images/icons/clean.png"
                      alt="service-icon"
                    />
                  </div>
                  {/* Title */}
                  <h5 className="h5-sm sbox-2-title">Teeth Cleaning</h5>
                </Link>
              </div>
            </div>
            {/* SERVICE BOX #7 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="sbox-2 wow fadeInUp"
                data-wow-delay="0.8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInUp",
                }}
              >
                <Link href="/servicesDetails">
                  {/* Icon  */}
                  <div className="sbox-2-icon">
                    <img
                      className="img-80"
                      src="images/icons/anesthetic.png"
                      alt="service-icon"
                    />
                  </div>
                  {/* Title */}
                  <h5 className="h5-sm sbox-2-title">Modern Anesthetic</h5>
                </Link>
              </div>
            </div>
            {/* SERVICE BOX #8 */}
            <div className="col-sm-6 col-lg-4">
              <div
                className="sbox-2 wow fadeInUp"
                data-wow-delay="1s"
                style={{
                  visibility: "visible",
                  animationDelay: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <Link href="/servicesDetails">
                  {/* Icon  */}
                  <div className="sbox-2-icon">
                    <img
                      className="img-80"
                      src="images/icons/caries.png"
                      alt="service-icon"
                    />
                  </div>
                  {/* Title */}
                  <h5 className="h5-sm sbox-2-title">Emergency Help</h5>
                </Link>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}

export default services;
