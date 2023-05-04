import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section>
        <div className="slider_img layout_two">
          <div id="carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#carousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  className="d-block"
                  src="images/slider.jpg"
                  alt="First slide"
                />
                <div className="carousel-caption d-md-block">
                  <div className="slider_title">
                    <h1>Creative Thinking &amp; Innovation</h1>
                    <h4>
                      Proactively utilize open-source users for process-centric
                      total linkage.
                      <br />
                      Energistically reinvent web-enabled initiatives with
                      premium <br />
                      processes. Proactively drive.
                    </h4>
                    <div className="slider-btn">
                      <a href="#" className="btn btn-default">
                        SEE Programs
                      </a>
                      <a href="#" className="btn btn-default">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src="images/slider-2.jpg"
                  alt="Second slide"
                />
                <div className="carousel-caption d-md-block">
                  <div className="slider_title">
                    <h1>We foster wisdom</h1>
                    <h4>
                      Proactively utilize open-source users for process-centric
                      total linkage.
                      <br />
                      Energistically reinvent web-enabled initiatives with
                      premium <br />
                      processes. Proactively drive.
                    </h4>
                    <div className="slider-btn">
                      <a href="#" className="btn btn-default">
                        SEE Programs
                      </a>
                      <a href="#" className="btn btn-default">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src="images/slider-3.jpg"
                  alt="Third slide"
                />
                <div className="carousel-caption d-md-block">
                  <div className="slider_title">
                    <h1>Campus life @ Unisco</h1>
                    <h4>
                      Proactively utilize open-source users for process-centric
                      total linkage.
                      <br />
                      Energistically reinvent web-enabled initiatives with
                      premium <br />
                      processes. Proactively drive.
                    </h4>
                    <div className="slider-btn">
                      <a href="campus-life.html" className="btn btn-default">
                        Campus Life
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carousel"
              role="button"
              data-slide="prev"
            >
              <i className="icon-arrow-left fa-slider" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel"
              role="button"
              data-slide="next"
            >
              <i className="icon-arrow-right fa-slider" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      <section className="clearfix about about-style2">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Welcome</h2>
              <p>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries`}
              </p>
              <img
                src="images/welcom_sign.png"
                className="img-fluid"
                alt="welcom-img"
              />
            </div>
            <div className="col-md-4">
              <img
                src="images/campus/campus-img_05.jpg"
                className="img-fluid about-img"
                alt="#"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our_courses">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Our Courses</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="courses_box mb-4">
                <div className="course-img-wrap">
                  <img
                    src="images/courses_1.jpg"
                    className="img-fluid"
                    alt="courses-img"
                  />
                  <div className="courses_box-img">
                    <div className="courses-link-wrap">
                      <a href="course-detail.html" className="course-link">
                        <span>course Details </span>
                      </a>
                      <a href="admission-form.html" className="course-link">
                        <span>Join today </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="courses_icon">
                  <img
                    src="images/plus-icon.png"
                    className="img-fluid close-icon"
                    alt="plus-icon"
                  />
                </div>
                <a href="course-detail.html" className="course-box-content">
                  <h3>Biochemistry</h3>
                  <p>When an unknown printer took a galley...</p>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="courses_box mb-4">
                <div className="course-img-wrap">
                  <img
                    src="images/courses_2.jpg"
                    className="img-fluid"
                    alt="courses-img"
                  />
                  <div className="courses_box-img">
                    <div className="courses-link-wrap">
                      <a href="course-detail.html" className="course-link">
                        <span>course Details </span>
                      </a>
                      <a href="admission-form.html" className="course-link">
                        <span>Join today </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="courses_icon">
                  <img
                    src="images/plus-icon.png"
                    className="img-fluid close-icon"
                    alt="plus-icon"
                  />
                </div>
                <a href="course-detail.html" className="course-box-content">
                  <h3>History</h3>
                  <p>When an unknown printer took a galley...</p>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="courses_box mb-4">
                <div className="course-img-wrap">
                  <img
                    src="images/courses_3.jpg"
                    className="img-fluid"
                    alt="courses-img"
                  />
                  <div className="courses_box-img">
                    <div className="courses-link-wrap">
                      <a href="course-detail.html" className="course-link">
                        <span>course Details </span>
                      </a>
                      <a href="admission-form.html" className="course-link">
                        <span>Join today </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="courses_icon">
                  <img
                    src="images/plus-icon.png"
                    className="img-fluid close-icon"
                    alt="plus-icon"
                  />
                </div>
                <a href="course-detail.html" className="course-box-content">
                  <h3>Human Sciences</h3>
                  <p>When an unknown printer took a galley...</p>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="courses_box mb-4">
                <div className="course-img-wrap">
                  <img
                    src="images/courses_4.jpg"
                    className="img-fluid"
                    alt="courses-img"
                  />
                  <div className="courses_box-img">
                    <div className="courses-link-wrap">
                      <a href="course-detail.html" className="course-link">
                        <span>course Details </span>
                      </a>
                      <a href="admission-form.html" className="course-link">
                        <span>Join today </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="courses_icon">
                  <img
                    src="images/plus-icon.png"
                    className="img-fluid close-icon"
                    alt="plus-icon"
                  />
                </div>
                <a href="course-detail.html" className="course-box-content">
                  <h3>Earth Sciences</h3>
                  <p>When an unknown printer took a galley...</p>
                </a>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <a href="#" className="btn btn-default btn-courses">
                View all courses
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="event">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="event-img2">
                <div className="row">
                  <div className="col-sm-3">
                    {" "}
                    <img
                      src="images/upcoming-event-img.jpg"
                      className="img-fluid"
                      alt="event-img"
                    />
                  </div>
                  <div className="col-sm-9">
                    <h3>Grace and Academic Life </h3>
                    <span>06-Nov-17</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-3">
                    {" "}
                    <img
                      src="images/upcoming-event-img.jpg"
                      className="img-fluid"
                      alt="event-img"
                    />
                  </div>
                  <div className="col-sm-9">
                    <h3>Are Drugs Really Dangerous? </h3>
                    <span>14-Nov-17</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem has been...
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-sm-3">
                    {" "}
                    <img
                      src="images/upcoming-event-img.jpg"
                      className="img-fluid"
                      alt="event-img"
                    />
                  </div>
                  <div className="col-sm-9">
                    <h3>Annual Day Celebrations</h3>
                    <span>25-Dec-17</span>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum...
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="event_date">
                    <div className="event-date-wrap">
                      <p>06</p>
                      <span>Nov.17</span>
                    </div>
                  </div>
                  <div className="date-description">
                    <h3>Eestibulum sodales metus.</h3>
                    <p>
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book ...
                    </p>
                    <hr className="event_line" />
                  </div>
                  <div className="event_date">
                    <div className="event-date-wrap">
                      <p>06</p>
                      <span>Nov.17</span>
                    </div>
                  </div>
                  <div className="date-description">
                    <h3>There are many variations</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <hr className="event_line" />
                  </div>
                  <div className="event_date">
                    <div className="event-date-wrap">
                      <p>10</p>
                      <span>Nov.17</span>
                    </div>
                  </div>
                  <div className="date-description">
                    <h3>Integer faucibus nulla a ligula.</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="detailed_chart">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 chart_bottom">
              <div className="chart-img">
                <img
                  src="images/chart-icon_1.png"
                  className="img-fluid"
                  alt="chart_icon"
                />
              </div>
              <div className="chart-text">
                <p>
                  <span className="counter">39</span> Teachers
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 chart_bottom chart_top">
              <div className="chart-img">
                <img
                  src="images/chart-icon_2.png"
                  className="img-fluid"
                  alt="chart_icon"
                />
              </div>
              <div className="chart-text">
                <p>
                  <span className="counter">2600</span> Students
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 chart_top">
              <div className="chart-img">
                <img
                  src="images/chart-icon_3.png"
                  className="img-fluid"
                  alt="chart_icon"
                />
              </div>
              <div className="chart-text">
                <p>
                  <span className="counter">56</span> Courses
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="chart-img">
                <img
                  src="images/chart-icon_4.png"
                  className="img-fluid"
                  alt="chart_icon"
                />
              </div>
              <div className="chart-text">
                <p>
                  <span className="counter">13</span> Years Exp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Our Blog</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link to="/blog-post" className="home_blog_link">
                <div className="blog-img_box">
                  <img
                    src="images/blog-img_1.jpg"
                    className="img-fluid blog_display"
                    alt="blog-img"
                  />
                  <div className="blogtitle blogtitle-rtl">
                    <h3>Eestibulum sodales metus</h3>
                    <i className="icon-user fa-common" aria-hidden="true"></i>
                    <p>by: admin</p>
                    <i
                      className="icon-speedometer fa-common"
                      aria-hidden="true"
                    ></i>
                    <p>9- Nov-2016</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Link to="/blog-post" className="home_blog_link">
                <div className="blog-img_box">
                  <img
                    src="images/blog-img_3.jpg"
                    className="img-fluid blog_display"
                    alt="blog-img"
                  />
                  <div className="blogtitle blogtitle-rtl">
                    <h3>Contrary to popular belief</h3>
                    <i className="icon-user fa-common" aria-hidden="true"></i>
                    <p>by: admin</p>
                    <i
                      className="icon-speedometer fa-common"
                      aria-hidden="true"
                    ></i>
                    <p>9- Nov-2016</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/blog-post" className="home_blog_link">
                <div className="blog-img_box">
                  <img
                    src="images/blog-img_2.jpg"
                    className="img-fluid blog_display"
                    alt="blog-img"
                  />
                  <div className="blogtitle blogtitle-rtl">
                    <h3>pains to avoidworse pains</h3>
                    <i className="icon-user fa-common" aria-hidden="true"></i>
                    <p>by: admin</p>
                    <i
                      className="icon-speedometer fa-common"
                      aria-hidden="true"
                    ></i>
                    <p>9- Nov-2016</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/blog-post" className="home_blog_link">
                <div className="blog-img_box">
                  <div className="blog-video">
                    <div className="blog-play_btn">
                      {" "}
                      <img src="images/play-btn.png" alt="play-btn" />{" "}
                    </div>
                    <img
                      src="images/blog-img_4.jpg"
                      className="img-fluid blog_display"
                      alt="blog-img"
                    />
                  </div>

                  <div className="blogtitle blogtitle-rtl">
                    <h3>principle selection rejects</h3>
                    <i className="icon-user fa-common" aria-hidden="true"></i>
                    <p>by: admin</p>
                    <i
                      className="icon-speedometer fa-common"
                      aria-hidden="true"
                    ></i>
                    <p>9- Nov-2016</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
