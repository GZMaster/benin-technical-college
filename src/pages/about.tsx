import React from "react";

export default function About() {
  return (
    <>
      <section className="welcome_about">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2>What we are</h2>
              <p>
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.`}
                <br />
                <br />
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages.
              </p>
              <a href="#" className="btn btn-default btn-about">
                VIEW OUR COURSE
              </a>
            </div>
            <div className="col-md-5">
              <img src="images/welcome-img.jpg" className="img-fluid" alt="#" />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Our Students Says</h2>
            </div>
            <div className="col-md-12">
              <div className="single-item">
                <div className="quote">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                  <p className="quote_text">
                    {`Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. Printing
                    and typesetting industry. It has survived not only five
                    centuries.`}
                  </p>
                  <div className="testi-img_block">
                    <img
                      src="images/testi-img.jpg"
                      className="img-fluid"
                      alt="#"
                    />
                    <p>
                      <span>Student Name</span> Top rank holder
                    </p>
                  </div>
                </div>
                <div className="quote">
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                  <p className="quote_text">
                    {`Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. Printing
                    and typesetting industry.`}
                  </p>
                  <div className="testi-img_block">
                    <img
                      src="images/testi-img.jpg"
                      className="img-fluid"
                      alt="#"
                    />
                    <p>
                      <span>Student Name</span> Top rank holder
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

      <section className="our-teachers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Our Teachers</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="our-teachers-block">
                <img
                  src="images/our-teachers_01.jpg"
                  className="img-fluid teachers-img"
                  alt="#"
                />
                <div className="teachers-description">
                  <p>
                    <strong>Melissa Baker</strong> <br />
                    MBA, PhD
                  </p>
                  <hr />
                  <p>
                    Syllabus : <span>Economics, Marketing &amp; Finance</span>
                  </p>
                  <div className="social-icons">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="our-teachers-block">
                <img
                  src="images/our-teachers_02.jpg"
                  className="img-fluid teachers-img"
                  alt="#"
                />
                <div className="teachers-description">
                  <p>
                    <strong>Raymond Salazar</strong> <br />
                    MCA, PhD
                  </p>
                  <hr />
                  <p>
                    Syllabus :
                    <span>Computer Science, Astronomy &amp; Robotics</span>
                  </p>
                  <div className="social-icons">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="our-teachers-block">
                <img
                  src="images/our-teachers_03.jpg"
                  className="img-fluid teachers-img"
                  alt="#"
                />
                <div className="teachers-description">
                  <p>
                    <strong>Alexander Bennett</strong> <br />
                    PhD, Medical Sciences
                  </p>
                  <hr />
                  <p>
                    Syllabus : <span>Physics, Chemistry &amp; Biology</span>
                  </p>
                  <div className="social-icons">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="our-teachers-block">
                <img
                  src="images/our-teachers_04.jpg"
                  className="img-fluid teachers-img"
                  alt="#"
                />
                <div className="teachers-description">
                  <p>
                    <strong>Charles Murphy</strong> <br />
                    MFA, PhD
                  </p>
                  <hr />
                  <p>
                    Syllabus : <span> English, Language &amp; Arts</span>
                  </p>
                  <div className="social-icons">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
