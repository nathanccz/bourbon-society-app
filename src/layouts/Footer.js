const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className="kf-logo element-anim-1 scroll-animate"
              data-animate="active"
            >
              <a href="index.html">
                <img src="images/logo.png" alt="image" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Hours</h5>
              <ul>
                <li>
                  Monday - Thursday
                  <em>05:00pm - 12:00am</em>
                </li>
                <li>
                  Friday & Saturday
                  <em>05:00pm - 2:00am</em>
                </li>
                <li>
                  <strong>Closed Sundays</strong>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>Location :</em>
                  Coming soon to Pasadena, CA
                </li>
                <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email Address :</em>
                  nathanweb.dev@proton.me
                </li>
                <li>
                  <i className="las la-phone" />
                  <em>Phone Number :</em>
                  +626 555 6789 
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Gallery</h5>
              <ul>
                <li>
                  <a
                    href="images/grid_gal1.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal2.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal2.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal3.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal4.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal5.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal6.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 align-center">
            {/* copyright */}
            <div
              className="kf-copyright element-anim-1 scroll-animate"
              data-animate="active"
            >
              Copyright © 2024 Bourbon Society. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
