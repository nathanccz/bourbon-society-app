import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const MainSlider = () => {
  return (
    <section className="section kf-started-slider">
      <Swiper className="swiper-container" {...sliderProps.mainSliderSelector}>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/started_img_n5.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">We're Glad You're Here</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                Welcome to<br />
                Bourbon Society
                </h2>
                <div className="kf-bts">
                  <Link href="about" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/started_img_n3.jpg)" }}
            />
            <div className="container">
              <div className="description align-left element-anim-1">
                <div className="subtitles">Dedicated to the Craft</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                Meet Our Whiskey<br />
                Sommeliers
                </h2>
                <div className="kf-bts">
                  <Link href="team" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="kf-started-item">
            <div
              className="slide js-parallax"
              style={{ backgroundImage: "url(images/started_img_n6.jpg)" }}
            />
            <div className="container">
              <div className="description align-left">
                <div className="subtitles">Full-service Restaurant</div>
                <h2 className="name text-anim-1" data-splitting="chars">
                  Chef-driven <br />
                  Dinner Menu
                </h2>
                <div className="kf-bts">
                  <Link href="menu-restaurant" className="kf-btn">
                    <span>explore more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="mainSlider-prev swiper-button-prev" />
        <div className="mainSlider-next swiper-button-next" />
      </Swiper>
    </section>
  );
};
export default MainSlider;
