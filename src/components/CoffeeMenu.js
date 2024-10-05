import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const CoffeeMenu = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".all-menu-items", {
        itemSelector: ".kf-menu-item-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".kf-menu-item-col",
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
    const filterLinks = document.querySelectorAll(".kf-filter-menu a");
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
    <section className="section kf-menu kf-menu-tabs">
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            Drink Menu
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            Hand-crafted Cocktails
          </h3>
        </div>
        <div
          className="kf-filter kf-filter-menu element-anim-1 scroll-animate"
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
            Bourbon
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("rye")}
            data-href="rye"
          >
            Rye
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("other")}
            data-href="other"
          >
            Other
          </a>
        </div>
        <div
          className="kf-menu-items"
          style={{ backgroundImage: "url(images/menu_logo.png)" }}
        >
          <div className="row all-menu-items">
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all bourbon">
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
                  <div className="subname">Bourbon whiskey, sweet vermouth, and bitters</div>
                  <div className="price">$16</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all bourbon">
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
                  <div className="subname">Bourbon whiskey, bitters, sugar, and an orange slice</div>
                  <div className="price">$16.5</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all bourbon">
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
                  <div className="subname">Lemon, simple syrup, topped with egg white foam</div>
                  <div className="price">$17</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all bourbon">
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
                  <div className="subname">Whiskey sour with club soda</div>
                  <div className="price">$15</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all other">
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
                  <div className="subname">Coffee, Irish whiskey, brown sugar, and whipped cream</div>
                  <div className="price">$16.5</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all rye">
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
                  <div className="subname">Spicy rye with sugar, bitters, and absinthe</div>
                  <div className="price">$18</div>
                </div>
              </div>
            </div>
            {/*}
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all fast-food">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/ins_gal1.jpg" className="has-popup-image">
                    <img src="images/ins_gal1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Italian Burger</h5>
                  <div className="subname">
                    Tomatoes, italian sausage, ground, onions, cheese
                  </div>
                  <div className="price">$12.8</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all fast-food">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/ins_gal3.jpg" className="has-popup-image">
                    <img src="images/ins_gal3.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Chicken Burger</h5>
                  <div className="subname">
                    Ground chicken breast, mustard, paprika, onion
                  </div>
                  <div className="price">$17.5</div>
                </div>
              </div>
            </div>{*/}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoffeeMenu;
