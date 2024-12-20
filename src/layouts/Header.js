import Link from "next/link";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils";

const Header = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (document.querySelector("header").className.includes("animated")) {
      setTimeout(() => {
        document.querySelector("header").classList.add("opened", "show");
      }, 800);
    }
  }, [toggle]);

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <header className={`kf-header ${toggle ? "animated" : ""}`}>
      {/* topline */}
      <div className="kf-topline">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            {/* hours */}
            <div className="kf-h-group">
              <i className="far fa-clock" /> <em>opening hours :</em> 05:00pm -
              2:00am
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
            {/* social */}
            <div className="kf-h-social">
              <a href="facebook.com" target="blank">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="twitter.com" target="blank">
                <i className="fab fa-twitter" />
              </a>
              <a href="instagram.com" target="blank">
                <i className="fab fa-instagram" />
              </a>
              <a href="youtube.com" target="blank">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
            {/* location */}
            <div className="kf-h-group">
              <i className="fas fa-map-marker-alt" /> <em>Location :</em> Coming soon to dtla
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className="kf-navbar">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            {/* logo */}
            <div className="kf-logo">
              <Link href="/">
                <img src="images/logo.png" alt="image" />
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
            {/* main menu */}
            <div className="kf-main-menu">
              <ul>
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="about">About</Link>
                </li>
                <li>
                  <Link href="menu-coffee">
                    Menu
                    <i className="las la-angle-down" />
                  </Link>
                  <ul>
                    <li>
                      <Link href="menu-coffee">Cocktail Menu</Link>
                    </li>
                    <li>
                      <Link href="menu-restaurant">Restaurant Menu</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    More
                    <i className="las la-angle-down" />
                  </a>
                  <ul>
                    <li>
                      <Link href="reservation">Reservations</Link>
                    </li>
                    <li>
                      <Link href="blog-grid">Blog</Link>
                    </li>
                    <li>
                      <Link href="team">Our Sommeliers</Link>
                    </li>
                    <li>
                      <Link href="gallery">Gallery</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="contacts">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
            {/* menu btn */}
            <a
              className={`kf-menu-btn ${toggle ? "active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              <span />
            </a>
            {/* btn */}
            <Link href="reservation" className="kf-btn h-btn">
              <span>Book a table</span>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="kf-navbar-mobile">
        {/* mobile menu */}
        <div className="kf-main-menu">
          <ul>
            <li className="has-children">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="about">About</Link>
            </li>
            <li className="has-children">
              <Link href="menu-coffee">Menu</Link>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Menu")}
              />
              <ul style={activeLi("Menu")}>
                <li>
                  <Link href="menu-coffee">Cocktail Menu</Link>
                </li>
                <li>
                  <Link href="menu-restaurant">Restaurant Menu</Link>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">More</a>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Pages")}
              />
              <ul style={activeLi("Pages")}>
                <li>
                  <Link href="reservation">Reservation</Link>
                </li>
                <li>
                  <Link href="blog-grid">Blog</Link>
                </li>
                <li>
                  <Link href="team">Our Sommeliers</Link>
                </li>
                <li>
                  <Link href="gallery">Gallery</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        {/* mobile topline */}
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* mobile btn */}
              <Link href="reservation" className="kf-btn h-btn">
                <span>Book a table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* social */}
              <div className="kf-h-social">
                <a href="facebook.com" target="blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="twitter.com" target="blank">
                  <i className="fab fa-twitter" />
                </a>
                <a href="instagram.com" target="blank">
                  <i className="fab fa-instagram" />
                </a>
                <a href="youtube.com" target="blank">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* hours */}
              <div className="kf-h-group">
                <i className="far fa-clock" /> <em>opening hours :</em> 05:00pm
                - 2:00am
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* location */}
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" /> <em>Location :</em> 55
                main street, downtown los angeles
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
