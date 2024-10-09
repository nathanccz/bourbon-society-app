import InstaCarousel from "@/src/components/sliders/InstaCarousel";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import { isMobile } from 'react-device-detect';

const MenuRestaurant = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/menu_rest_inner_bg.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Restaurant Menu
          </h1>
        </div>
      </section>
      {/* Section Menu-2 */}
      <section className="section kf-menu">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Starters
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Small Plates
            </h3>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="kf-menu-items-2">
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_s1.jpg" className="has-popup-image">
                      <img src="images/menu_s1.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Marinated Olives</h5>
                    <div className="subname">Citrus, bay and rosemary in olive oil vinaigrette.</div>
                    <div className="price">
                      <span>$7</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_s2.jpg" className="has-popup-image">
                      <img src="images/menu_s2.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">House Bread Rolls</h5>
                    <div className="subname">Whipped cultured butter, sea salt.</div>
                    <div className="price">
                      <span>$8</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_s3.jpg" className="has-popup-image">
                      <img src="images/menu_s3.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Deviled Eggs</h5>
                    <div className="subname">Dijon, dill, and crispy capers.</div>
                    <div className="price">
                      <span>$10</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_s4.jpg" className="has-popup-image">
                      <img src="images/menu_s4.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Orange Chicken Wings</h5>
                    <div className="subname">Sweet and sour glaze with scallion.</div>
                    <div className="price">
                      <span>$10</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="kf-menu-image-2 left element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/menu_r_l1.jpg)" }}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-menu-image-2 right element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/menu_r_l2.jpg)" }}
              />
              <div className="kf-menu-items-2">
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_s5.jpg" className="has-popup-image">
                      <img src="images/menu_s5.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Shrimp Canapés</h5>
                    <div className="subname">Grilled shrimp with mango chutney on rye bread.</div>
                    <div className="price">
                      <span>$12</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_s6.jpg" className="has-popup-image">
                      <img src="images/menu_s6.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Chicken Paté</h5>
                    <div className="subname">Blackberry agrodolce & thyme with grilled sourdough.</div>
                    <div className="price">
                      <span>$12</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_s7.jpg" className="has-popup-image">
                      <img src="images/menu_s7.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Charcuterie</h5>
                    <div className="subname">Assorted gourmet cured meats service with olives.</div>
                    <div className="price">
                      <span>$25</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_s8.jpg" className="has-popup-image">
                      <img src="images/menu_s8.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Oysters Rockefeller</h5>
                    <div className="subname">Bared oysters rockefeller with lemon and chives.</div>
                    <div className="price">
                      <span>$21</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section CTA */}
      <section
        className={`section kf-cta ${isMobile ? 'mobile-bg' : 'kf-parallax'}`}
        style={{ backgroundImage: "url(images/cta_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  We Take Reservations
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Book a Table for Dinner or Whiskey Tasting
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>Book a Table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Menu-2 */}
      <section className="section kf-menu">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Entrées & Sides
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Dinner Menu
            </h3>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="kf-menu-items-2">
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r1.jpg" className="has-popup-image">
                      <img src="images/menu_r1.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Ribeye Steak</h5>
                    <div className="subname">Cooked medium-rare, served with puréed potatoes and asparagus.</div>
                    <div className="price">
                      <span>$40</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r2.jpg" className="has-popup-image">
                      <img src="images/menu_r2.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Society Burger</h5>
                    <div className="subname">Wagyu beef patty, seared onions, hickory sauce. Served with fries. </div>
                    <div className="price">
                      <span>$25</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r3.jpg" className="has-popup-image">
                      <img src="images/menu_r3.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Roasted Chicken</h5>
                    <div className="subname">Heirloom roasted chicken served on a bed of potatoes and herbs.</div>
                    <div className="price">
                      <span>$35</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r4.jpg" className="has-popup-image">
                      <img src="images/menu_r4.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Roasted Branzino</h5>
                    <div className="subname">Red chimichurri and charred lemon. Served with herb salad.</div>
                    <div className="price">
                      <span>$37.5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="kf-menu-image-2 left element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/menu_r_l3.jpg)" }}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-menu-image-2 right element-anim-1 scroll-animate"
                data-animate="active"
                style={{ backgroundImage: "url(images/menu_r_l4.jpg)" }}
              />
              <div className="kf-menu-items-2">
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r5.jpg" className="has-popup-image">
                      <img src="images/menu_r5.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">French Fries</h5>
                    <div className="subname">Fried in duck fat, served with house aoili.</div>
                    <div className="price">
                      <span>$10</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r6.jpg" className="has-popup-image">
                      <img src="images/menu_r6.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Broccolini</h5>
                    <div className="subname">Brown butter emulsion, fried garlic, aleppo pepper</div>
                    <div className="price">
                      <span>$12</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r7.jpg" className="has-popup-image">
                      <img src="images/menu_r7.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Baked Potato</h5>
                    <div className="subname">Twice baked with chives, shallots, sour cream, cheddar</div>
                    <div className="price">
                      <span>$15</span>
                    </div>
                  </div>
                </div>
                <div
                  className="kf-menu-item-2 element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu_r8.jpg" className="has-popup-image">
                      <img src="images/menu_r8.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Ruby Salad</h5>
                    <div className="subname">Little gem, soft herbs, radish, champagne dijon vinaigrette</div>
                    <div className="price">
                      <span>$16</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Insta Carousel */}
      <InstaCarousel />
    </Layouts>
  );
};
export default MenuRestaurant;
