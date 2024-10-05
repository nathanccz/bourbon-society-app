import { sliderProps } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const TestimonialsCarousel = () => {
  return (
    <section
      className="section kf-testimonials kf-testimonials-2 section-bg"
      style={{ background: "#090c0f" }}
    >
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Latest Reviews
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            See What Our Guests Say
          </h3>
        </div>
        <div className="kf-testimonials-carousel">
          <Swiper
            {...sliderProps.kfTestimonialsCarousel}
            className="swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev1.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="text">
                      Endless selection, knowledgeable staff, and fair prices. A whiskey lover’s paradise. Their Manhattan is outstanding.
                    </div>
                    <h5 className="name">
                      Richard M. Brooks <em>Los Angeles, CA</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev2.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="text">
                    Great happy hour deals, cozy atmosphere, and a vast whiskey menu that doesn't overwhelm you. Can’t go wrong!
                    </div>
                    <h5 className="name">
                      James M. Hardwick <em>Pasadena, CA</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev3.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                    Whiskey pairs perfectly with their small plates. Try the charcuterie board and a dram of Irish whiskey. Simply heaven.
                    </div>
                    <h5 className="name">
                      Olivia D. Sanchez <em>Boston, MA</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev4.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                    Impressive bourbon selection, from budget-friendly to rare and expensive. Bartenders happy to guide you through.
                    </div>
                    <h5 className="name">
                      Frederick S. Buckley <em>New York, NY</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev5.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                    Friendly staff helped me navigate the extensive scotch list. Found a new favorite dram and will be back!
                    </div>
                    <h5 className="name">
                      Eric R. Vincent <em>Chicago, IL</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="slide-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image">
                    <img src="images/rev6.jpg" alt="image" />
                  </div>
                  <div className="desc">
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div className="kf-text">
                      Took my husband here for our 20th anniversary. Had the experience of a lifetime. Wonderful sommeliers and wait staff.
                    </div>
                    <h5 className="name">
                      Catherine V. Hughes <em>Seattle, WA</em>
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsCarousel;
