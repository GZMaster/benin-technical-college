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
                {`The Benin Technical College is a prestigious institution established in 1973 through a collaboration between the mid-western state government of Nigeria and the Canadian government; opening it’s doors to it’s first set of students in September 1974. The institution has its focus on vocational education and offers a comprehensive three-year program across a diverse range of departments.`}
                <br />
                <br />
                Our primary objectives revolve around preparing individuals for
                successful careers in the dynamic industries of today. We equip
                our students with practical skills, knowledge, and expertise
                that are in high demand in the workforce. With a focus on
                hands-on training and experiential learning, we ensure that our
                graduates are well-prepared to meet the challenges of their
                chosen professions.
              </p>
              <a href="/campus-life" className="btn btn-default btn-about">
                VIEW OUR COURSE
              </a>
            </div>
            <div className="col-md-5">
              <img
                src="images\btc_img_shoot\_DSC0216-min.jpg"
                className="img-fluid"
                alt="#"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="testimonial">
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
      </section> */}

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

      <section className="our-teachers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Our Head Master & Assistants</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="our-teachers-block">
                <img
                  src="images\btc_img_shoot\DSC0634-min.jpg"
                  className="img-fluid teachers-img"
                  alt="#"
                />
                <div className="teachers-description">
                  <p>
                    <strong>Mr elder Izedonmwen Friday</strong> <br />
                  </p>
                  <hr />
                  <p>
                    Role : <span>Head master</span>
                  </p>
                  {/* <div className="social-icons">
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
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="our-teachers-block">
                <img
                  src="images\btc_img_shoot\DSC0643(1)-min.jpg"
                  className="img-fluid teachers-img"
                  alt="#"
                />
                <div className="teachers-description">
                  <p>
                    <strong>Mrs Enabulale JO</strong> <br />
                  </p>
                  <hr />
                  <p>
                    Role :<span>Vise Academics</span>
                  </p>
                  {/* <div className="social-icons">
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
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="our-teachers-block">
                <img
                  src="images\btc_img_shoot\DSC0667-min.jpg"
                  className="img-fluid teachers-img"
                  alt="#"
                />
                <div className="teachers-description">
                  <p>
                    <strong>Mrs Odiase JI</strong> <br />
                  </p>
                  <hr />
                  <p>
                    Role : <span>VP Partnership</span>
                  </p>
                  {/* <div className="social-icons">
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
                  </div> */}
                </div>
              </div>
            </div>
            {/* <div className="col-xs-12 col-sm-6 col-md-6">
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
