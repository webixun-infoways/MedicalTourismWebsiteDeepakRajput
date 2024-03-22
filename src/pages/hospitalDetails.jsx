import Link from "next/link";
import React from "react";

function hospitalDetail() {
  return (
    <>
      <section
        id="doctor-breadcrumbs"
        className="bg-fixed doctor-details-section division"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7 offset-md-5">
              <div className="doctor-data white-color">
                {/* Name */}
                <h2 className="h2-xs">Hospital Name</h2>
                <h5 className="h5-md">Address </h5>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>

      <section
        id="doctor-1-details"
        className="doctor-details-section division"
      >
        <div className="container">
          <div className="row">
            {/* DOCTOR PHOTO */}
            <div className="col-md-5">
              <div className="doctor-photo mb-40">
                {/* Photo */}
                <img
                  className="img-fluid"
                  src="images/doctor-1.jpg"
                  alt="hospital-foto"
                />

                {/* End Doctor Info */}
                {/* Doctor Contacts */}
                <div className="doctor-contacts text-center">
                  <h4 className="h4-xs">
                    <i className="fas fa-mobile-alt" /> 1-(800)-569-7890
                  </h4>
                  <h4 className="h4-xs blue-color">
                    <i className="fas fa-envelope-open-text" />
                    <a href="mailto:yourdomain@mail.com" className="blue-color">
                      hello@yourdomain.com
                    </a>
                  </h4>
                </div>
                {/* Buttons */}
                {/* <div className="doctor-photo-btn text-center">
            <a
              href="appointment.html"
              className="btn btn-md btn-blue blue-hover"
            >
              Book an Appointment
            </a>
            <a
              href="timetable.html"
              className="btn btn-md btn-tra-grey grey-hover"
            >
              View Timetable
            </a>
          </div> */}
              </div>
            </div>{" "}
            {/* END DOCTOR PHOTO */}
            {/* DOCTOR'S BIO */}
            <div className="col-md-7">
              <div className="doctor-bio">
                {/* Text */}
                <p>
                  Etiam sapien sem magna at vitae pulvinar congue augue egestas
                  pretium neque id viverra suscipit egestas magna porta ratione,
                  mollis risus lectus porta rutrum arcu aenean primis in augue
                  luctus neque purus ipsum neque dolor primis suscipit in magna
                  dignissim, porttitor hendrerit diam
                </p>
                {/* Text */}
                <p>
                  In at mauris vel nisl convallis porta at vitae dui. Nam lacus
                  ligula, vulputate molestie bibendum quis, aliquet elementum
                  massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu
                  cursus est. Fusce non nulla vitae massa placerat vulputate vel
                  a purus. Aliqum mullam blandit tempor sapien
                </p>
                {/* Title */}
                <h5 className="h5-md blue-color">Discription</h5>
                {/* Text */}
                <p>
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus. Mauris donec ociis et magnis sapien etiam sapien
                  sem sagittis congue tempor gravida
                </p>
                {/* Option #1 */}
                <div className="box-list m-top-15">
                  <div className="box-list-icon blue-color">
                    <i className="fas fa-angle-double-right" />
                  </div>
                  <p className="p-sm">
                    Nemo ipsam egestas volute and turpis dolores quaerat
                  </p>
                </div>
                {/* Option #2 */}
                <div className="box-list">
                  <div className="box-list-icon blue-color">
                    <i className="fas fa-angle-double-right" />
                  </div>
                  <p className="p-sm">
                    Magna luctus tempor augue vitae laoreet augue in cubilia
                    risus auctor tempus dolor felis lacinia risus auctor id
                    viverra dolor
                  </p>
                </div>
                {/* Option #3 */}
                <div className="box-list">
                  <div className="box-list-icon blue-color">
                    <i className="fas fa-angle-double-right" />
                  </div>
                  <p className="p-sm">
                    Ligula risus auctor tempus dolor feugiat, felis lacinia
                    risus interdum auctor id viverra dolor iaculis luctus
                  </p>
                </div>
                {/* Option #3 */}
                <div className="box-list">
                  <div className="box-list-icon blue-color">
                    <i className="fas fa-angle-double-right" />
                  </div>
                  <p className="p-sm">
                    An enim nullam tempor at pretium purus blandit
                  </p>
                </div>
                {/* CERTIFICATES */}

                {/* END CERTIFICATES */}
              </div>
            </div>{" "}
            {/* END DOCTOR BIO */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>

      <section
        id="doctors-3"
        className="bg-lightgrey wide-60 doctors-section division"
      >
        <div className="doctor-data steelblue-color text-center">
          {/* Name */}
          <h2 className="h2-xs">Our Doctors</h2>
        </div>
        <div className="container">
          <div className="row">
            {/* DOCTOR #1 */}
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
      </section>
    </>
  );
}

export default hospitalDetail;
