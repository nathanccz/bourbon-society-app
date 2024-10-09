import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const PhotoGalleryIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".kf-gallery-items", {
        itemSelector: ".kf-gallery-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".kf-gallery-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".kf-filter a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-href");
      if (filterValue == key) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    });
  };
  return (
    <section className="section kf-gallery">
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Image Feed
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            Menu Aesthetics
          </h3>
        </div>
        <div
          className="kf-filter kf-filter-gal element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className="c-pointer active"
            onClick={handleFilterKeyChange("*")}
            data-href="*"
          >
            All
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("bourbon")}
            data-href="bourbon"
          >
            bourbon
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("scotch")}
            data-href="scotch"
          >
            scotch
          </a>
          <a
            className="c-pointer"
            data-href="rye"
            onClick={handleFilterKeyChange("rye")}
          >
            rye
          </a>
          <a
            className="c-pointer"
            data-href="dinner-entree"
            onClick={handleFilterKeyChange("dinner-entree")}
          >
            Dinner entrée
          </a>
        </div>
        <div className="kf-gallery-items row">
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-entree">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/ins_gal1.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal1.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">ribeye steak</div>
                </div>
                <div className="subname">
                  <div className="value">Dinner entrée</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all scotch">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/ins_gal2.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal2.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">scotch neat</div>
                </div>
                <div className="subname">
                  <div className="value">Drink menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-entree">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/ins_gal3.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal3.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">beef tataki</div>
                </div>
                <div className="subname">
                  <div className="value">Dinner entrée</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all bourbon">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/ins_gal4.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal4.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">bourbon on the rock</div>
                </div>
                <div className="subname">
                  <div className="value">Drink menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all rye">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/ins_gal5.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal5.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">bottle of rye</div>
                </div>
                <div className="subname">
                  <div className="value">Drink menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all dinner-entree">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/ins_gal6.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal6.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">foie gras</div>
                </div>
                <div className="subname">
                  <div className="value">Dinner entrée</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all bourbon">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/ins_gal7.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal7.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Bourbon neat</div>
                </div>
                <div className="subname">
                  <div className="value">Drink menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all rye">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/ins_gal8.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal8.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">Rye on the rocks</div>
                </div>
                <div className="subname">
                  <div className="value">Drink menu</div>
                </div>
              </div>
            </div>
          </div>
          <div className="kf-gallery-col col-xs-12 col-sm-12 col-md-6 col-lg-4 all scotch">
            <div
              className="kf-gallery-item element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image kf-image-hover">
                <a href="images/ins_gal9.jpg" className="has-popup-gallery">
                  <img src="images/ins_gal9.jpg" alt="image" />
                </a>
              </div>
              <div className="desc">
                <div className="name">
                  <div className="value">scotch on the rocks</div>
                </div>
                <div className="subname">
                  <div className="value">Drink menu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhotoGalleryIsotope;
