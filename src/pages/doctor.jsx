import Link from "next/link";
import React from "react";

function doctor() {
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
                    Doctors
                  </li>
                </ol>
              </nav>
              {/* Title */}
              <h4 className="h4-sm steelblue-color">Doctors</h4>
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
                    src="images/doctor-4.jpg"
                    alt="doctor-foto"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Jonathan Barnes D.M.</h5>
                  <span>Chief Medical Officer</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/doctorDetails"
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
                    src="images/doctor-2.jpg"
                    alt="doctor-foto"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Hannah Harper D.M.</h5>
                  <span>Anesthesiologist</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/doctorDetails"
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
                    src="images/doctor-3.jpg"
                    alt="doctor-foto"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Matthew Anderson D.M.</h5>
                  <span>Cardiology</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/doctorDetails"
                    title=""
                  >
                    View More Info
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END DOCTOR #3 */}
            {/* DOCTOR #4 */}
            <div className="col-md-6 col-lg-4">
              <div className="doctor-2">
                {/* Doctor Photo */}
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/doctor-4.jpg"
                    alt="doctor-foto"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Megan Coleman D.M.</h5>
                  <span>Neurosurgeon</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/doctorDetails"
                    title=""
                  >
                    View More Info
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END DOCTOR #4 */}
            {/* DOCTOR #5 */}
            <div className="col-md-6 col-lg-4">
              <div className="doctor-2">
                {/* Doctor Photo */}
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/doctor-5.jpg"
                    alt="doctor-foto"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Robert Peterson D.M.</h5>
                  <span>Allergist</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/doctorDetails"
                    title=""
                  >
                    View More Info
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END DOCTOR #5 */}
            {/* DOCTOR #6 */}
            <div className="col-md-6 col-lg-4">
              <div className="doctor-2">
                {/* Doctor Photo */}
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/doctor-6.jpg"
                    alt="doctor-foto"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Joshua Elledge D.M.</h5>
                  <span>Orthopaedics</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/doctorDetails"
                    title=""
                  >
                    View More Info
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END DOCTOR #6 */}
            {/* DOCTOR #7 */}
            <div className="col-md-6 col-lg-4">
              <div className="doctor-2">
                {/* Doctor Photo */}
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/doctor-3.jpg"
                    alt="doctor-foto"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Matthew Anderson D.M.</h5>
                  <span>Cardiology</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/doctorDetails"
                    title=""
                  >
                    View More Info
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END DOCTOR #7 */}
            {/* DOCTOR #8 */}
            <div className="col-md-6 col-lg-4">
              <div className="doctor-2">
                {/* Doctor Photo */}
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/doctor-4.jpg"
                    alt="doctor-foto"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Jonathan Barnes D.M.</h5>
                  <span>Chief Medical Officer</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/doctorDetails"
                    title=""
                  >
                    View More Info
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END DOCTOR #8 */}
            {/* DOCTOR #9 */}
            <div className="col-md-6 col-lg-4">
              <div className="doctor-2">
                {/* Doctor Photo */}
                <div className="hover-overlay">
                  <img
                    className="img-fluid"
                    src="images/doctor-2.jpg"
                    alt="doctor-foto"
                  />
                </div>
                {/* Doctor Meta */}
                <div className="doctor-meta">
                  <h5 className="h5-xs blue-color">Hannah Harper D.M.</h5>
                  <span>Anesthesiologist</span>
                  {/* Button */}
                  <Link
                    className="btn btn-sm btn-blue blue-hover mt-15"
                    href="/doctorDetails"
                    title=""
                  >
                    View More Info
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END DOCTOR #9 */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
    </div>
  );
}

export default doctor;
