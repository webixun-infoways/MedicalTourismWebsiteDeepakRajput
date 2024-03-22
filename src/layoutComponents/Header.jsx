import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header id="header" className="header">
      {/* MOBILE HEADER */}
      <div className="wsmobileheader clearfix">
        <a id="wsnavtoggle" className="wsanimated-arrow" onClick={()=>{
          document.querySelector('body').classList.toggle('wsactive')
        }}>
          <span/>
        </a>
        <span className="smllogo">
          <img
            src="images/logo-grey.png"
            width={180}
            height={40}
            alt="mobile-logo"
          />
        </span>
        <a href="tel:123456789" className="callusbtn">
          <i className="fas fa-phone" />
        </a>
      </div>
      {/* HEADER STRIP */}
      <div className="headtoppart bg-blue clearfix">
        <div className="headerwp clearfix">
          {/* Address */}
          <div className="headertopleft">
            <div className="address clearfix">
              <span>
                <i className="fas fa-map-marker-alt" />
                121 King St, Melbourne, VIC 3000{" "}
              </span>{" "}
              <a href="tel:123456789" className="callusbtn">
                <i className="fas fa-phone" />
                (800)-569-7890
              </a>
            </div>
          </div>
          {/* Social Links */}
          <div className="headertopright">
            <a className="googleicon" title="Google" href="#">
              <i className="fab fa-google" />{" "}
              <span className="mobiletext02">Google</span>
            </a>
            <a className="linkedinicon" title="Linkedin" href="#">
              <i className="fab fa-linkedin-in" />{" "}
              <span className="mobiletext02">Linkedin</span>
            </a>
            <a className="twittericon" title="Twitter" href="#">
              <i className="fab fa-twitter" />{" "}
              <span className="mobiletext02">Twitter</span>
            </a>
            <a className="facebookicon" title="Facebook" href="#">
              <i className="fab fa-facebook-f" />{" "}
              <span className="mobiletext02">Facebook</span>
            </a>
          </div>
        </div>
      </div>{" "}
      {/* END HEADER STRIP */}
      {/* NAVIGATION MENU */}
      <div
        className="wsmainfull menu clearfix original"
        style={{ visibility: "visible" }}
      >
        <div className="wsmainwp clearfix">
          {/* LOGO IMAGE */}
          {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
          <div className="desktoplogo">
            <Link href="/">
              <img
                src="images/logo-grey.png"
                width={180}
                height={40}
                alt="header-logo"
              />
            </Link>
          </div>
          {/* MAIN MENU */}
          <nav className="wsmenu clearfix">
            <div className="overlapblackbg" />
            <ul className="wsmenu-list">
              {/* DROPDOWN MENU */}
              <li aria-haspopup="true">
                <span className="wsmenu-click">
                  <i className="wsmenu-arrow" />
                </span>
                <Link href="/">Home</Link>
              </li>{" "}
              {/* END DROPDOWN MENU */}
              {/* PAGES */}
              <li aria-haspopup="true">
                {/* <span className="wsmenu-click">
                  <i className="wsmenu-arrow" />
                </span> */}
                <Link href="/doctor">Doctor</Link>

                {/* End wsmegamenu */}
              </li>{" "}
              {/* END PAGES */}
              {/* HALF MENU */}
              <li aria-haspopup="true">
                <span className="wsmenu-click">
                  <i className="wsmenu-arrow" />
                </span>
                <Link href="/hospital">
                  Hospital <span classname="wsarrow"></span>
                </Link>
              </li>{" "}
              {/* END HALF MENU */}
              {/* MEGAMENU */}
              <li aria-haspopup="true">
                <span className="wsmenu-click">
                  <i className="wsmenu-arrow" />
                </span>
                <Link href="/services">Service <span classname="wsarrow"></span></Link>

                {/* End wsmegamenu */}
              </li>{" "}
               {/* END HALF MENU */}
              {/* MEGAMENU */}
              <li aria-haspopup="true">
                <span className="wsmenu-click">
                  <i className="wsmenu-arrow" />
                </span>
                <Link href="/about">About <span classname="wsarrow"></span></Link>

                {/* End wsmegamenu */}
              </li>{" "}
              {/* END MEGAMENU */}
              {/* SIMPLE NAVIGATION LINK */}
              {/* <li className="nl-simple" aria-haspopup="true">
                <Link href="/contact">Contact Us</Link>
              </li> */}
              {/* NAVIGATION MENU BUTTON */}
              <li className="nl-simple header-btn" aria-haspopup="true">
                <Link href="/contact">Contact Us<span classname="wsarrow"></span></Link>
              </li>
            </ul>
          </nav>{" "}
          {/* END MAIN MENU */}
        </div>
      </div>
      <div
        className="wsmainfull menu clearfix cloned"
        style={{
          position: "fixed",
          top: 0,
          marginTop: 0,
          zIndex: 500,
          display: "none",
          left: 0,
          width: 870,
        }}
      >
        <div className="wsmainwp clearfix">
          {/* LOGO IMAGE */}
          {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 360 x 80 pixels) */}
          <div className="desktoplogo">
            <Link href="/">
              <img
                src="images/logo-grey.png"
                width={180}
                height={40}
                alt="header-logo"
              />
            </Link>
          </div>
          {/* MAIN MENU */}
          <nav className="wsmenu clearfix">
            <div className="overlapblackbg" />
            <ul className="wsmenu-list">
              {/* DROPDOWN MENU */}
              <a aria-haspopup="true">
                <span className="wsmenu-click">
                  <i className="wsmenu-arrow" />
                </span>
                <a href="#">Home</a>
                
              </a>{" "}
              {/* END DROPDOWN MENU */}
              {/* PAGES */}
              <li aria-haspopup="true">
                <span className="wsmenu-click">
                  <i className="wsmenu-arrow" />
                </span>
                <Link href="/doctor">Doctor</Link>

                {/* End wsmegamenu */}
              </li>{" "}
              {/* END PAGES */}
              {/* HALF MENU */}
              <li aria-haspopup="true">
                <span className="wsmenu-click">
                  <i className="wsmenu-arrow" />
                </span>
                <Link href="/services">Service</Link>
              </li>{" "}
              {/* END HALF MENU */}
              {/* MEGAMENU */}
              <li aria-haspopup="true">
                <span className="wsmenu-click">
                  <i className="wsmenu-arrow" />
                </span>
                <Link href="/services">Service</Link> {/* End wsmegamenu */}
              </li>{" "}
              {/* END MEGAMENU */}
              {/* SIMPLE NAVIGATION LINK */}
              {/* <li className="nl-simple" aria-haspopup="true">
                <Link href="/contact">Contact Us</Link>
              </li> */}
              {/* NAVIGATION MENU BUTTON */}
              <li className="nl-simple header-btn" aria-haspopup="true">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>{" "}
          {/* END MAIN MENU */}
        </div>
      </div>{" "}
      {/* END NAVIGATION MENU */}

		
    </header>
  );
}

export default Header;
