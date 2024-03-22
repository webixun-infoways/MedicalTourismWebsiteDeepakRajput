import Link from "next/link";
import React from "react";

function doctorDetails() {
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
                      Doctor Details
                    </li>
                  </ol>
                </nav>
                {/* Title */}
                <h4 className="h4-sm steelblue-color">Doctor Details</h4>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* END BREADCRUMB */}
      {/* DEPARTMENT DETAILS
			============================================= */}
      <div
        id="department-page"
        className="wide-60 department-page-section division"
      >
        <div className="container">
          <div className="row">
            {/* DEPARTMENT DETAILS */}
            <div className="col-lg-8">
              <div className="txt-block pr-30">
                {/* CONTENT BLOCK */}
                <div className="content-block mb-40">
                  {/* Text */}
                  <p className="p-md">
                    Nemo ipsam egestas volute turpis quaerat sodales sapien
                    vitae mollis ligula ipsum gestas. Felis orci lacinia risus,
                    vitae auctor magna morbi pretium neque sapien undo sodales
                    primis cubilia laoreet augue vitae
                  </p>
                  {/* Text */}
                  <p>
                    Ligula risus auctor tempus dolor feugiat, felis lacinia
                    risus interdum auctor id viverra dolor iaculis luctus
                    bibendum luctus neque rhoncus ipsum tempor varius iaculis at
                    luctus neque rhoncus ipsum tempor varius cubilia laoreet
                    augue vitae laoreet augue undo cubilia feugiat suscipit
                    emper lacus cursus, feugiat primis ultrice in ligula risus
                    auctor tempus at feugiat dolor impedit magna
                  </p>
                  {/* Small Title */}
                  <h5 className="h5-md steelblue-color">
                    Feugiat primis ultrice
                  </h5>
                  {/* CONTENT BOX #1 */}
                  <div className="box-list">
                    <div className="box-list-icon">
                      <i className="fas fa-genderless" />
                    </div>
                    <p>
                      Nemo ipsam egestas volute turpis dolores ut aliquam
                      quaerat sodales sapien undo pretium purus feugiat dolor
                      impedit quaerat sodales sapien vitae mollis ligula ipsum
                      gestas
                    </p>
                  </div>
                  {/* CONTENT BOX #2 */}
                  <div className="box-list">
                    <div className="box-list-icon">
                      <i className="fas fa-genderless" />
                    </div>
                    <p>
                      Maecenas gravida porttitor nunc, quis vehicula magna
                      luctus tempor. Quisque vel laoreet turpis urna augue,
                      viverra a augue eget, dictum tempor diam pulvinar massa
                      purus nulla sodales primis cubilia laoreet augue vitae
                      laoreet augue in cubilia feugiat magna
                    </p>
                  </div>
                  {/* CONTENT BOX #3 */}
                  <div className="box-list">
                    <div className="box-list-icon">
                      <i className="fas fa-genderless" />
                    </div>
                    <p>
                      Nemo ipsam egestas volute turpis quaerat sodales sapien
                      vitae mollis ligula ipsum gestas. Felis orci lacinia
                      risus, vitae auctor eros erat nec magna morbi pretium
                      neque sapien
                    </p>
                  </div>
                  {/* Image */}
                  <div className="content-block-img">
                    <img
                      className="img-fluid"
                      src="images/cardiology_1000x500.jpg"
                      alt="content-image"
                    />
                  </div>
                  {/* Small Title */}
                  <h5 className="h5-md steelblue-color">
                    Bibendum luctus neque rhoncus
                  </h5>
                  {/* Text */}
                  <p className="mb-30">
                    Ligula risus auctor tempus dolor feugiat, felis lacinia
                    risus interdum auctor id viverra dolor iaculis luctus
                    bibendum luctus neque rhoncus ipsum tempor varius iaculis
                    luctus at neque rhoncus ipsum tempor varius cubilia laoreet
                    augue vitae laoreet augue and cubilia feugiat suscipit
                  </p>
                  {/* Options List */}
                  <div className="options-list">
                    <div className="row">
                      <div className="col-xl-6">
                        {/* Option #1 */}
                        <div className="box-list m-top-15">
                          <div className="box-list-icon blue-color">
                            <i className="fas fa-angle-double-right" />
                          </div>
                          <p>
                            Nemo ipsam egestas volute and turpis dolores quaerat
                            vitae auctor integer congue
                          </p>
                        </div>
                        {/* Option #2 */}
                        <div className="box-list">
                          <div className="box-list-icon blue-color">
                            <i className="fas fa-angle-double-right" />
                          </div>
                          <p className="p-sm">
                            Magna luctus tempor and curae integer
                          </p>
                        </div>
                        {/* Option #3 */}
                        <div className="box-list">
                          <div className="box-list-icon blue-color">
                            <i className="fas fa-angle-double-right" />
                          </div>
                          <p>
                            An enim nullam tempor undo pretium blandit purus
                            pretium ligula rutrum and laoreet
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        {/* Option #4 */}
                        <div className="box-list">
                          <div className="box-list-icon blue-color">
                            <i className="fas fa-angle-double-right" />
                          </div>
                          <p>
                            Magna luctus tempor blandit a nullam tempor sapien
                            feugiat at vitae suscipit mollis
                          </p>
                        </div>
                        {/* Option #5 */}
                        <div className="box-list m-top-15">
                          <div className="box-list-icon blue-color">
                            <i className="fas fa-angle-double-right" />
                          </div>
                          <p>
                            Nemo ipsam egestas tempus feugiat at dolor impedit
                            magna purus at pretium donec
                          </p>
                        </div>
                        {/* Option #6 */}
                        <div className="box-list">
                          <div className="box-list-icon blue-color">
                            <i className="fas fa-angle-double-right" />
                          </div>
                          <p>An enim nullam at tempor primis</p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* End row */}
                  </div>{" "}
                  {/* End Options List */}
                </div>{" "}
                {/* END CONTENT BLOCK */}
                {/* PRICING */}
                {" "}
                {/* END PRICING */}
              </div>
            </div>{" "}
            {/* END DEPARTMENT DETAILS */}
            {/* SIDEBAR  */}
            <aside id="sidebar" className="col-lg-4">
              {/* TEXT WIDGET */}
              <div id="txt-widget" className="sidebar-div mb-50">
                {/* Title */}
                <h5 className="h5-sm steelblue-color">The Heart Of Clinic</h5>
                {/* Head of Clinic */}
                <div className="txt-widget-unit mb-15 clearfix d-flex align-items-center">
                  {/* Avatar */}
                  <div className="txt-widget-avatar">
                    <img
                      src="images/head-of-clinic.jpg"
                      alt="testimonial-avatar"
                    />
                  </div>
                  {/* Data */}
                  <div className="txt-widget-data">
                    <h5 className="h5-md steelblue-color">
                      Dr. Jonathan Barnes
                    </h5>
                    <span>Chief Medical Officer, Founder</span>
                    <p className="blue-color">1-800-1234-567</p>
                  </div>
                </div>{" "}
                {/* End Head of Clinic */}
                {/* Text */}
                <p className="p-sm">
                  An enim nullam tempor sapien at gravida donec pretium ipsum
                  porta justo integer at odiovelna vitae auctor integer congue
                  magna purus
                </p>
                {/* Button */}
               
              </div>{" "}
              {/* END TEXT WIDGET */}
              {/* SIDEBAR TABLE */}
              <div className="sidebar-table blue-table sidebar-div mb-50">
                {/* Title */}
                <h5 className="h5-md">Working Time</h5>
                {/* Text */}
                <p className="p-sm">
                  Porta semper lacus cursus, feugiat primis ultrice ligula risus
                  auctor at tempus feugiat dolor lacinia cursus nulla vitae
                  massa
                </p>
                {/* Table */}
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Mon – Wed</td>
                      <td> - </td>
                      <td className="text-right">9:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td> - </td>
                      <td className="text-right">9:00 AM - 6:30 PM</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td> - </td>
                      <td className="text-right">9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr className="last-tr">
                      <td>Sun - Sun</td>
                      <td>-</td>
                      <td className="text-right">CLOSED</td>
                    </tr>
                  </tbody>
                </table>
                {/* Title */}
                
              </div>{" "}
              {/* END SIDEBAR TABLE */}
              {/* SIDEBAR TIMETABLE */}
              {" "}
              {/* END SIDEBAR TABLE */}
              {/* IMAGE WIDGET */}
              <div id="image-widget" className="sidebar-div">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/blog/image-widget.jpg"
                    alt="image-widget"
                  />
                </a>
              </div>
            </aside>{" "}
            {/* END SIDEBAR */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* END DEPARTMENT DETAILS */}
      {/* DOCTORS-1
			============================================= */}
     {" "}
      {/* END DOCTORS-1 */}
      {/* ABOUT-5
			============================================= */}
      <section id="about-5" className="pt-100 about-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-lg-6">
              <div
                className="about-img text-center wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <img
                  className="img-fluid"
                  src="images/image-03.png"
                  alt="about-image"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-lg-6">
              <div
                className="txt-block pc-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Section ID */}
                <span className="section-id blue-color">
                  Highest Quality Care
                </span>
                {/* Title */}
                <h3 className="h3-md steelblue-color">
                  Complete Medical Solutions in One Place
                </h3>
                {/* Text */}
                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor lacinia cubilia curae
                  integer congue leo metus, eu mollislorem primis in orci
                  integer metus mollis faucibus. An enim nullam tempor sapien
                  gravida donec pretium and ipsum porta justo integer at velna
                  vitae auctor integer congue
                </p>
                {/* Singnature */}
                <div className="singnature mt-35">
                  {/* Text */}
                  <p className="p-small mb-15">Randon Pexon, Head of Clinic</p>
                  {/* Singnature Image */}
                  {/* Recommended sizes for Retina Ready displays is 400x68px; */}
                  <img
                    className="img-fluid"
                    src="images/signature.png"
                    width={200}
                    height={34}
                    alt="signature-image"
                  />
                </div>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* END ABOUT-5 */}
    </>
  );
}

export default doctorDetails;
