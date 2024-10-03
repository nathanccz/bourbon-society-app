import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const BlogSingle = () => {
  return (
    <Layouts>
      {/* Section Archive Started */}
      <section className="section kf-archive-started">
        <div className="container">
          <div className="kf-titles">
            <div
              className="kf-date element-anim-1 scroll-animate"
              data-animate="active"
            >
              25 Sep 2024 - <Link href="blog">Process</Link>
            </div>
            <h1
              className="kf-p-title text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >

              Top Whiskey Distilleries in the U.S.: A Journey Through American Craftsmanship
            </h1>
          </div>
        </div>
        <div
          className="kf-archive-image element-anim-1 scroll-animate"
          data-animate="active"
          style={{ backgroundImage: "url(images/latest_blog3_3.jpg)" }}
        />
      </section>
      {/* Section Archive */}
      <section className="section kf-archive">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div
                className="post-content element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                The U.S. whiskey scene has exploded in recent years, gaining global recognition for producing some of the finest whiskeys available. While Kentucky is often the first place that comes to mind when discussing American whiskey, distilleries across the country have embraced the craft, offering diverse styles from traditional bourbons to innovative single malts. Whether you're a seasoned whiskey enthusiast or just beginning your exploration, here are some of the best whiskey distilleries in the U.S. that should be on your radar.
                </p>
                <blockquote>
                  <p>
                  American whiskey embodies the spirit of innovation and craftsmanship, where tradition meets bold experimentation to create a drink that’s as diverse as the land it comes from.
                  </p>
                  <cite>Ryan Miller</cite>
                </blockquote>
                
                <p>
                  <img src="images/latest_blog1_3.jpg" alt="image" />
                </p>
                <p>
                <h3>Buffalo Trace Distillery (Frankfort, Kentucky)</h3>
                No list of great American distilleries would be complete without mentioning Buffalo Trace. One of the oldest continually operating distilleries in the U.S., it survived Prohibition by producing medicinal whiskey. Today, it's known for iconic brands like Eagle Rare, Pappy Van Winkle, and the coveted Buffalo Trace Bourbon. The distillery offers tours that dive deep into its history, and the lush grounds, complete with ancient warehouses, make for a captivating visit.
                </p>
                <h3>Maker's Mark Distillery (Loretto, Kentucky)</h3>
                <p>
                With its distinctive red wax seal, Maker's Mark has become one of the most recognizable bourbon brands worldwide. The distillery itself is set in the idyllic Kentucky countryside, offering a more hands-on experience with tours that showcase their traditional, small-batch production methods. Maker's Mark is also known for its approachable, wheated bourbon, which provides a sweeter, smoother sip compared to other rye-heavy bourbons.
                </p>
                <h3>Heaven Hill Distillery (Bardstown, Kentucky)</h3>
                <p>
                Home to brands like Evan Williams, Elijah Craig, and Larceny, Heaven Hill is one of the most celebrated distilleries in Kentucky. It’s a family-owned operation that has grown into one of the largest suppliers of bourbon in the U.S. Their tour highlights both the heritage and innovation behind their whiskey-making, and their portfolio includes a broad range of styles to suit every palate.
                </p>
                <h3>Woodford Reserve Distillery (Versailles, Kentucky)</h3>
                <p>
                Woodford Reserve is known for its refined bourbons and its role as the official bourbon of the Kentucky Derby. The distillery itself, located on the site of one of the oldest distilling operations in the U.S., is as elegant as the spirit it produces. The copper pot stills, limestone-filtered water, and triple-distillation process set this distillery apart. Woodford Reserve's unique attention to detail results in a complex, well-balanced bourbon.
                </p>
                <h3>WhistlePig Distillery (Shoreham, Vermont)</h3>
                <p>
                Although Vermont may not be the first state that comes to mind for whiskey, WhistlePig is changing perceptions. Specializing in rye whiskey, WhistlePig sources some of its rye from Canada but ages and bottles the whiskey on its 500-acre farm in Shoreham. They are known for their high-quality, high-rye content whiskeys that boast rich, spicy profiles.
                </p>
                <h3>Final Thoughts</h3>
                <p>
                The U.S. is home to some of the most exciting whiskey distilleries in the world, with each region offering its own unique take on the art of distillation. From the rolling hills of Kentucky to the rugged mountains of Utah and the vibrant spirit of California, American whiskey has evolved into a diverse landscape of craftsmanship and innovation. Whether you prefer a smooth bourbon, a spicy rye, or a bold single malt, these distilleries offer something special for every whiskey lover.
                </p>
              </div>
              <div
                className="post-details element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span className="tags-links">
                  <span>Tags:</span>
                  <Link href="blog">photo</Link>
                  <Link href="blog">fashion</Link>
                  <Link href="blog">creative</Link>
                </span>
              </div>
              {/* Comments */}
              <div
                className="comments-post element-anim-1 scroll-animate"
                data-animate="active"
              >
                {/* Comments */}
                <div className="section__comments">
                  <h4
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    3 Comments
                  </h4>
                  <ul className="comments">
                    <li className="comment comment-item">
                      <div className="comment comment-box">
                        <img
                          src="https://secure.gravatar.com/avatar/aa9d265f1a064dcd6973df722b49c392?s=64&d=mm&r=g"
                          className="avatar"
                          alt
                        />
                        <div className="comment-box__body">
                          <div className="content-caption post-content description">
                            <h5 className="comment-box__details">
                              Alex Morrison <span>March 9, 2021</span>
                            </h5>
                            <p>
                              Gallery blocks have two settings: the number of
                              columns, and whether or not images should be
                              cropped. The default number of columns is three,
                              and the maximum number of columns is eight. Below
                              is a three column gallery at full width, with
                              cropped images.
                            </p>
                          </div>
                        </div>
                        <div className="comment-footer">
                          <a className="comment-reply-link" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="comment comment-item">
                      <div className="comment comment-box">
                        <img
                          src="https://secure.gravatar.com/avatar/aa9d265f1a064dcd6973df722b49c392?s=64&d=mm&r=g"
                          className="avatar"
                          alt
                        />
                        <div className="comment-box__body">
                          <div className="content-caption post-content description">
                            <h5 className="comment-box__details">
                              John Doe <span>March 9, 2021</span>
                            </h5>
                            <p>
                              Gallery blocks have two settings: the number of
                              columns, and whether or not images should be
                              cropped. The default number of columns is three,
                              and the maximum number of columns is eight. Below
                              is a three column gallery at full width, with
                              cropped images.
                            </p>
                          </div>
                        </div>
                        <div className="comment-footer">
                          <a className="comment-reply-link" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="form-comment">
                    <div className="comment-respond">
                      <div className="m-titles">
                        <h4
                          className="element-anim-1 scroll-animate"
                          data-animate="active"
                        >
                          Leave a comment
                        </h4>
                      </div>
                      <form method="post" className="kf-comment-form">
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="kf-field">
                              <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="kf-field">
                              <input
                                type="text"
                                name="email"
                                placeholder="Email Address"
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="kf-field">
                              <textarea
                                className="textarea"
                                rows={3}
                                placeholder="Comment"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button type="submit" className="kf-btn">
                              <span>Submit</span>
                              <i className="fas fa-chevron-right" />
                            </button>
                          </div>
                        </div>
                      </form>
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
export default BlogSingle;
