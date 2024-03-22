import Link from "next/link";
import React from "react";

function servicesDetails() {
  return (
    <>
      {/* BREADCRUMB
        ============================================= */}
      <div id="breadcrumb" className="division">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumb-holder">
                {/* Breadcrumb Nav */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="blog-listing.html">Details</a>
                    </li>
                    {/* <li className="breadcrumb-item active" aria-current="page">
                    Blog Post
                  </li> */}
                  </ol>
                </nav>
                {/* Title */}
                <h4 className="h4-sm steelblue-color">Service Name</h4>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* END BREADCRUMB */}
      {/* BLOG PAGE CONTENT
        ============================================= */}
      <div
        id="single-blog-page"
        className="wide-100 blog-page-section division"
      >
        <div className="container">
          <div className="row">
            {/* SINGLE POST */}
            <div className="col-lg-12">
              <div className="single-blog-post pr-30">
                {/* BLOG POST IMAGE */}
                <div className="blog-post-img mb-40">
                  <img
                    className="img-fluid"
                    src="images/blog/post-4-img.jpg"
                    alt="blog-post-image"
                  />
                </div>
                {/* BLOG POST TEXT */}
                <div className="sblog-post-txt">
                  {/* Post Title */}
                  <h4 className="h4-lg steelblue-color">
                    5 Benefits Of Integrative Medicine
                  </h4>
                  {/* Post Data */}
                  <span>
                    Posted May 03, 2019 by <span>Dr.Jeremy Smith</span>
                  </span>
                  {/* Post Text */}
                  <p className="mt-30">
                    Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                    porta justo. Velna vitae auctor congue magna nihil impedit
                    ligula risus. Mauris donec ociis et magnis sapien etiam
                    sapien sem sagittis congue tempor gravida donec enim ipsum
                    porta justo integer at odio velna
                  </p>
                  {/* Text */}
                  <p>
                    Sagittis congue augue egestas volutpat egestas magna
                    suscipit egestas magna ipsum vitae purus efficitur ipsum
                    primis in cubilia laoreet augue egestas luctus donec diam.
                  </p>
                  {/* Text */}
                  <p>
                    Maecenas gravida porttitor nunc, quis vehicula magna luctus
                    tempor. Quisque vel laoreet turpis urna augue, viverra a
                    augue eget, dictum tempor diam. Sed pulvinar consectetur
                    nibh, vel imperdiet dui varius viverra. Pellentesque ac
                    massa lorem. Fusce eu cursus non nulla vitae massa placerat
                    purus
                  </p>
                  {/* Small Title */}
                  <h5 className="h5-md steelblue-color">
                    Vitae massa placerat vulputate
                  </h5>
                  {/* Text */}
                  <p>
                    Nullam non scelerisque lectus. In at mauris vel nisl
                    convallis porta at vitae dui. Nam lacus ligula, vulputate
                    molestie bibendum quis, aliquet elementum massa. Vestibulum
                    ut sagittis odio
                  </p>
                  {/* Post Text */}
                  <p>
                    In at mauris vel nisl convallis porta at vitae dui. Nam
                    lacus ligula, vulputate molestie bibendum quis, aliquet
                    elementum massa. Vestibulum ut sagittis odio. Ac massa
                    lorem. Fusce eu cursus est. Fusce non nulla vitae massa
                    placerat vulputate vel a purus. Aliqum mullam blandit tempor
                    sapien
                  </p>
                  {/* INNER IMAGE */}

                  {/* Small Title */}
                  <h5 className="h5-md steelblue-color">
                    Semper lacus cursus porta, feugiat primis
                  </h5>
                  {/* Text */}
                  <p>
                    Curabitur ac dapibus libero. Quisque eu tristique neque.
                    Phasellus blandit tristique justo ut aliquam. Aliquam vitae
                    molestie nunc. Quisque sapien justo, aliquet non molestie
                    sed, venenatis nec purus. Aliquam eget lacinia elit.
                    Vestibulum tincidunt tincidunt massa, et porttitor justo.
                  </p>
                  {/* Option #1 */}
                  <div className="box-list">
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
                  {/* Small Title */}
                  <h5 className="h5-md steelblue-color">
                    Cubilia laoreet augue egestas luctus
                  </h5>
                  {/* Post Text */}
                  <p>
                    Curabitur ac dapibus libero. Quisque eu tristique neque.
                    Phasellus blandit tristique justo ut aliquam. Aliquam vitae
                    molestie nunc. Quisque sapien justo, aliquet non molestie
                    sed, venenatis nec purus. Aliquam eget lacinia tincidunt
                    tincidunt massa, et porttitor justo. Quisque vel laoreet
                    turpis. Urna augue, viverra a augue eget, dictum tempor
                    diam. Sed pulvinar consectetur nibh, vel imperdiet dui
                    varius viverra. Pellentesque ac massa lorem. Fusce eu cursus
                    est. Fusce non nulla vitae massa placerat bulum tincidunt
                    tincidunt massa, et porttitor justo
                  </p>
                  {/* Post Text */}
                  <p>
                    Sagittis congue augue egestas volutpat egestas magna
                    suscipit egestas magna ipsum vitae purus efficitur ipsum
                    primis in cubilia laoreet augue egestas luctus donec diam.
                    Curabitur ac dapibus libero. Quisque eu tristique neque.
                    Phasellus blandit tristique justo ut aliquam. Aliquam vitae{" "}
                    <a href="#">molestie nunc sapien justo</a>, aliquet non
                    molestie sed, venenatis nec purus. Aliquam eget lacinia
                    elit. Vestibulum tincidunt tincidunt massa, et porttitor
                    justo.
                  </p>
                  {/* BLOG POST SHARE LINKS */}

                  {/* END BLOG POST SHARE */}
                </div>{" "}
              </div>
            </div>{" "}
            {/* END SINGLE POST */}
            {/* SIDEBAR */}
            {/* END SIDEBAR */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </div>{" "}
      {/* END BLOG PAGE CONTENT */}
    </>
  );
}

export default servicesDetails;
