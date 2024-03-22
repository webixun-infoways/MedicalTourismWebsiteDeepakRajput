import Link from "next/link";
import React from "react";

function hospital() {
  return (
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
                  <li className="breadcrumb-item active" aria-current="page">
                    Hospital
                  </li>
                </ol>
              </nav>
              {/* Title */}
              <h4 className="h4-sm steelblue-color">Hospital</h4>
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
      <section
        id="doctors-3"
        className="bg-lightgrey wide-60 doctors-section division"
      >
        <div className="container">
          <div className="row">
            {/* DOCTOR #1 */}
            <div className="col-md-6 col-lg-4">
              <div className="doctor-2">
                {/* Doctor Photo */}
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/doctor-1.jpg"
                    alt="Hospital image"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Demo Hospital 1</h5>
                  <span>Address</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/hospitalDetails"
                    title=""
                  >
                    View More Info
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END DOCTOR #1 */}
            {/* DOCTOR #2 */}
            <div className="col-md-6 col-lg-4">
              <div className="doctor-2">
                {/* Doctor Photo */}
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/doctor-1.jpg"
                    alt="Hospital image"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Demo Hospital 2</h5>
                  <span>Address</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/hospitalDetails"
                    title=""
                  >
                    View More Info
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END DOCTOR #2 */}
            {/* DOCTOR #3 */}
            <div className="col-md-6 col-lg-4">
              <div className="doctor-2">
                {/* Doctor Photo */}
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/doctor-1.jpg"
                    alt="Hospital image"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Demo Hospital 3</h5>
                  <span>Address</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/hospitalDetails"
                    title=""
                  >
                    View More Info
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END DOCTOR #3 */}
            {/* DOCTOR #4 */} {/* END DOCTOR #9 */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </div>
  );
}

export default hospital;
