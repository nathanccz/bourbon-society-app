import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const BlogGrid = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/blog_inner_bg.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Notes from the <br/> Whiskey Underground
          </h1>
        </div>
      </section>
      {/* Section Latest Blog */}
      <section className="section kf-latest-blog">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Latest Blog Entries
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Go Deeper Into the Industry
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single-1">
                    <img src="images/latest_blog1.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                  The Art of Whiskey Aging: Why Time is the True Alchemist
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2024
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single-2">
                    <img src="images/latest_blog1_2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    The Whiskey Renaissance: Exploring Craft Distilling
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    20 Sep 2024
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single-3">
                    <img src="images/latest_blog1_3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                  Top Whiskey Distilleries: A Journey Through American Craftsmanship
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    10 Sep 2024
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="align-center">
            <a
              href="#"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>load more</span>
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </section>
      {/* Section CTA */}
      <section
        className="section kf-cta kf-parallax"
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
                  Need a Table On Coffee House
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Booking Table For Your &amp; Family Members
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>booking table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Brands */}
      <div className="section kf-brands">
        <div className="container">
          <div className="kf-brands-items row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand1.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand2.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand4.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand5.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-2">
              <div
                className="kf-brands-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/brand6.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default BlogGrid;
