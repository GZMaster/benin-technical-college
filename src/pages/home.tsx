import React from "react";
// import { Link } from "react-router-dom";

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
                  src="images\btc_img_shoot\_DSC0188-min.jpg"
                  alt="First slide"
                />
                <div className="carousel-caption d-md-block">
                  <div className="slider_title">
                    <h1>Building futures, Nurturing skills</h1>
                    <h4>
                      Our mission is to train and develop proficient and capable
                      individuals to <br /> become skilled craftsmen ready to
                      meet the demands of the industry.
                    </h4>
                    {/* <div className="slider-btn">
                      <a href="#" className="btn btn-default">
                        SEE Programs
                      </a>
                      <a href="#" className="btn btn-default">
                        Learn more
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src="images\btc_img_shoot\_DSC0192-min.jpg"
                  alt="Second slide"
                />
                <div className="carousel-caption d-md-block">
                  <div className="slider_title">
                    <h1>Knowledge and Empowerment</h1>
                    <h4>
                      Our goal is to empower students with the knowledge and
                      technical know-how for <br /> higher academic and
                      technical pursuits in tertiary institutions.
                    </h4>
                    {/* <div className="slider-btn">
                      <a href="#" className="btn btn-default">
                        SEE Programs
                      </a>
                      <a href="#" className="btn btn-default">
                        Learn more
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block"
                  src="images\btc_img_shoot\_DSC0211-min.jpg"
                  alt="Third slide"
                />
                <div className="carousel-caption d-md-block">
                  <div className="slider_title">
                    <h1>Skill Advancement</h1>
                    <h4>
                      Creating opportunities for employed individuals to enhance
                      their technical skills and advance in their careers.
                    </h4>
                    {/* <div className="slider-btn">
                      <a href="campus-life.html" className="btn btn-default">
                        Campus Life
                      </a>
                    </div> */}
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
                {`At Benin Technical College, we believe in nurturing a passion for learning, empowering our students to reach their full potential, and preparing them for success in an ever-changing world. Our devoted and knowledgeable faculty create an environment that is dynamic and captivating, enabling students to flourish intellectually, socially, and personally. `}
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="images\btc_img_shoot\_DSC0218-min.jpg"
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
                    src="\images\btc_img_shoot\DSC0745-min.jpg"
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
                  <h3>Electrical installation</h3>
                  <p>Our Electrical Installation Department offers ...</p>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="courses_box mb-4">
                <div className="course-img-wrap">
                  <img
                    src="\images\btc_img_shoot\DSC0753-min.jpg"
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
                  <h3>Radio and television</h3>
                  <p>n our Radio and Television Department, students...</p>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="courses_box mb-4">
                <div className="course-img-wrap">
                  <img
                    src="\images\btc_img_shoot\DSC0695-min.jpg"
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
                  <h3>Mechanical engineering craft practice department</h3>
                  <p>The Mechanical Engineering Craft Practice...</p>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="courses_box mb-4">
                <div className="course-img-wrap">
                  <img
                    src="images\btc_img_shoot\DSC0651-min.jpg"
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
                  <h3>Fabrication and welding department</h3>
                  <p>In the Fabrication and Welding Department...</p>
                </a>
              </div>
            </div>
          </div>{" "}
          <br />
          <div className="row">
            <div className="col-md-12 text-center">
              <a href="/campus-life" className="btn btn-default btn-courses">
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
                    <h3>Inter House sports day</h3>
                    <span>06-Nov-17</span>
                    <p>
                      Our highly anticipated event, the Inter-house Sports day,
                      is an exhilarating occasion filled with camaraderie and
                      intense competition as our six houses vie for glory.
                    </p>
                    {/* <a href="#">Read More</a> */}
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
                    <h3>
                      End of year photo/ preparation of end of year yearbook
                    </h3>
                    <span>14-Nov-17</span>
                    <p>
                      The end-of-year photo and yearbook serve as cherished
                      mementos that capture the essence of our school community.
                    </p>
                    {/* <a href="#">Read More</a> */}
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
                    <h3>Cultural Day</h3>
                    <span>25-Dec-17</span>
                    <p>
                      Cultural Day at Benin Technical College is a vibrant and
                      cherished celebration that showcases the diverse cultural
                      heritage of Nigeria.
                    </p>
                    {/* <a href="#">Read More</a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="event_date">
                    <div className="event-date-wrap">
                      <p>13</p>
                      <span>Jun.23</span>
                    </div>
                  </div>
                  <div className="date-description">
                    <h3>Social Impact Day</h3>
                    <p>
                      Social Impact Day is an annual event that brings together
                      students, staff, and the wider community to make a
                      positive difference.
                    </p>
                    <hr className="event_line" />
                  </div>
                  <div className="event_date">
                    <div className="event-date-wrap">
                      <p>28</p>
                      <span>Jun.23</span>
                    </div>
                  </div>
                  <div className="date-description">
                    <h3>Teacher’s Appreciation Day</h3>
                    <p>
                      Teacher’s Application Day is a special occasion dedicated
                      to recognizing and appreciating the valuable contributions
                      of teachers to the educational system in the state.
                    </p>
                    <hr className="event_line" />
                  </div>
                  <div className="event_date">
                    <div className="event-date-wrap">
                      <p>23</p>
                      <span>Jun.23</span>
                    </div>
                  </div>
                  <div className="date-description">
                    <h3>Professional Development Day</h3>
                    <p>
                      Professional Development Day is a designated day within a
                      term where students do not attend school, allowing
                      teachers to focus on their own growth and development as
                      educators.
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
                  <span className="counter">80</span> staff
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
                  <span className="counter">1381</span> Students
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
                  <span className="counter">8</span> Departments
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
                  <span className="counter">49</span> Years Exp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="blog">
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
      </section> */}
    </>
  );
}
