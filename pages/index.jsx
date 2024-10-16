import MainSlider from "@/src/components/sliders/MainSlider";
import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import { isMobile } from 'react-device-detect';
import { Button, Col, Container, Row } from "react-bootstrap";

const Index = () => {

  return (
    <Layouts>
      {/* Section Started Slider */}
      {isMobile ? (
      <section
			className="ezy__header33 light kf-parallax section"
			style={{
				backgroundImage:
					"url(images/started_img_n5.jpg)",
			}}
		>
			<div className="ezy__header33-overlay" />
			<Container>
				<Row>
					<Col xs={12} md={9} lg={7}>
						<h1 className="ezy__header33-heading mb-4">Welcome to <br/> Bourbon Society</h1>
						<Row>
							<Col xs={12} md={7} lg={8}>
								<p className="ezy__header33-sub-heading mb-5">
                A sophisticated haven where connoisseurs can savor over 200 premium bourbons and rare whiskeys, paired with Southern-inspired cuisine 
								</p>
                <div className="kf-bts">
                  <Link href="about" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={10} lg={6}>
								<Button
									variant=""
									className="ezy__header33-btn rounded-pill w-100"
								>
									
								</Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
      ) : <MainSlider />}
      
      {/* Section About */}
      <section className="section kf-about section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Pouring Up America's <br />
                  Finest Whiskey
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                Immerse yourself in the rich spirit of America’s finest bourbon offerings at our cozy bar and lounge. With over 300 unique spirits to choose from, our expertly curated selection includes rare and hard-to-find bourbons, whiskeys, and other fine spirits. Join us to taste our innovative cocktails, paired with delicious small plates crafted by our chef.
                </p>
              </div>
              <div
                className="kf-about-quote element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/quote_img.jpg" alt="image" />
                <div>
                If when you say ‘whiskey’ you mean the oil of conversation, the philosophic wine… the drink that enables a man to magnify his joy, then I am certainly for it.
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div
                className="kf-about-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/about_img.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Services */}
      <section className="section kf-services section-bg">
        <div className="container">
          <div className="kf-services-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="menu-restaurant">
                    <img src="images/service1.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-utensils" />
                  </div>
                  <h5 className="name">Restaurant Menu</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="menu-coffee">
                    <img src="images/service2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-cocktail" />
                  </div>
                  <h5 className="name">Cocktail Menu</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="services">
                    <img src="images/service3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-glass-whiskey" />
                  </div>
                  <h5 className="name">Whiskey Tasting</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Menu */}
      <section
        className="section kf-menu kf-parallax"
        style={{ backgroundImage: "" }}
      >
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Choose Your Drink
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Hand-crafted Cocktail Menu
            </h3>
          </div>
          <div
            className="kf-menu-items"
            style={{ backgroundImage: "url(images/menu_logo.png)" }}
          >
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu1.jpg" className="has-popup-image">
                      <img src="images/menu1.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Manhattan Cocktail</h5>
                    <div className="subname">
                      Bourbon whiskey, sweet vermouth, and bitters
                    </div>
                    <div className="price">$16</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu2.jpg" className="has-popup-image">
                      <img src="images/menu2.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Old-Fashioned</h5>
                    <div className="subname">
                     Bourbon whiskey, bitters, sugar, and an orange slice
                    </div>
                    <div className="price">$16.5</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu3.jpg" className="has-popup-image">
                      <img src="images/menu3.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Whiskey Sour</h5>
                    <div className="subname">
                      Lemon, simple syrup, topped with egg white foam 
                    </div>
                    <div className="price">$17</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu4.jpg" className="has-popup-image">
                      <img src="images/menu4.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">John Collins</h5>
                    <div className="subname">
                      Whiskey sour with club soda
                    </div>
                    <div className="price">$15</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu5.jpg" className="has-popup-image">
                      <img src="images/menu5.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Irish Coffee</h5>
                    <div className="subname">
                      Coffee, Irish whiskey, brown sugar, and whipped cream
                    </div>
                    <div className="price">$16.5</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu6.jpg" className="has-popup-image">
                      <img src="images/menu6.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Sazerac</h5>
                    <div className="subname">
                      Spicy rye with sugar, bitters, and absinthe
                    </div>
                    <div className="price">$18</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Choose */}
      <section className="section kf-choose section-bg">
        <div className="container">
          {/** 
          <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon1.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-2" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon2.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-3" data-jarallax-element={-40}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon3.png)" }}
            />
          </div>*/}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/choose_img.jpg" alt="image" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Why Choose Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  We Don't Settle for Ordinary
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                At Bourbon Society, we’re redefining the art of whisky appreciation. Our expert sommeliers will guide you through an unparalleled selection of rare and exceptional whiskies — all sourced from the finest distilleries.
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon1.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">World Class Sommeliers</h5>
                      <div className="subname">
                      You'll receive whisky flights tailored to your tastes, showcasing the nuances of each selection. 
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/choose_icon2.png" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">The Finest Whiskey Selection</h5>
                      <div className="subname">
                        We only choose the best whiskey for every situation, whether you're sipping it on its own or pairing it with dinner.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="about"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>explore more</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section Grid Carousel */}
      <section className="section kf-grid-carousel">
        <div className="container">
          <Swiper modules={[Autoplay]} autoplay={{
        delay: 2000, 
        disableOnInteraction: false, 
      }} {...sliderProps.kfGridCarousel} className="swiper-container">
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal2.jpg" className="has-popup-image">
                    <img src="images/grid_gal2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Uncle Nearest</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal3.jpg" className="has-popup-image">
                    <img src="images/grid_gal3.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">High Wire Distilling</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal4.jpg" className="has-popup-image">
                    <img src="images/grid_gal4.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Frey Ranch</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal5.jpg" className="has-popup-image">
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Wilderness Trail</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal6.jpg" className="has-popup-image">
                    <img src="images/grid_gal6.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Knob Creek</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal7.jpg" className="has-popup-image">
                    <img src="images/grid_gal7.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Eagle Rare</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal8.jpg" className="has-popup-image">
                    <img src="images/grid_gal8.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Westland Distillery</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal9.jpg" className="has-popup-image">
                    <img src="images/grid_gal9.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Rabbit Hole</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal10.jpg" className="has-popup-image">
                    <img src="images/grid_gal10.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Michter’s</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal1.jpg" className="has-popup-image">
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Traverse City Whiskey Co.</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Section Testimonials Carousel */}
      <TestimonialsCarousel />
      {/* Section Numbers */}
      <section className="section kf-numbers">
        <div className="container">
          <div className="kf-numbers-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">30+</div>
                <div className="desc">
                  <h5 className="name">Premium Brands</h5>
                  <div className="subname">The finest distilleries in the U.S.</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">10+</div>
                <div className="desc">
                  <h5 className="name">Winning Awards</h5>
                  <div className="subname">Our selections are festival favorites</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">100+</div>
                <div className="desc">
                  <h5 className="name">Five-Star Reviews</h5>
                  <div className="subname">From guests all over the country</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Latest Blog */}
      <section className="section kf-latest-blog section-bg">
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
                    Comments (2)
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
                    Comments (2)
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
                    11 Sep 2024
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (0)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-center">
            <Link
              href="blog-grid"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>view all</span>
              <i className="fas fa-chevron-right" />
            </Link>
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
    </Layouts>
  );
};
export default Index;
