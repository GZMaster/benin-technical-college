import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="header-topbar">
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-sm-8 col-md-9">
              <div className="header-top_address">
                {/* <div className="header-top_list">
                  <span className="icon-phone"></span>00 55 22 66
                </div>
                <div className="header-top_list">
                  <span className="icon-envelope-open"></span>
                  <a href="#" className="__cf_email__">
                    [email&#160;protected]
                  </a>
                </div> */}
                <div className="header-top_list">
                  <span className="icon-location-pin"></span>Benin Technical
                  College, Benin City, Edo P.M.B 1178
                </div>
              </div>
              {/* <div className="header-top_login2">
                <Link to="/login">Login </Link>/
                <Link to="/sign-in"> Sign Up </Link>
              </div> */}
            </div>
            {/* <div className="col-xs-6 col-sm-4 col-md-3">
              <div className="header-top_login mr-sm-3">
                <Link to="/login">Login </Link>/
                <Link to="/sign-up"> Sign Up </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div data-toggle="affix">
        <div className="container nav-menu2">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar2 navbar-toggleable-md navbar-light bg-faded">
                <button
                  className="navbar-toggler navbar-toggler2 navbar-toggler-right"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                >
                  <span className="icon-menu"></span>
                </button>
                <Link to="/" className="navbar-brand nav-brand2">
                  <h2>
                    <b>BENIN TECHNICAL COLLEGE</b>
                  </h2>
                </Link>
                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About<span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="js-navbar-collapse">
                      <ul className="nav navbar-nav">
                        <li className="dropdown mega-dropdown">
                          <ul className="dropdown-menu mega-dropdown-menu row">
                            <li className="col-lg-3">
                              <img
                                src="images/courses_4.jpg"
                                className="img-fluid dropdown-header"
                                alt="#"
                              />
                            </li>
                            <li className="col-lg-3">
                              <ul>
                                <li className="dropdown-header">
                                  Science &amp; Technology
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Mechanical Engineering
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Computer Science
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Electrical Engineering
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Civil Engineering
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">Finance</a>
                                </li>
                                <li className="divider"></li>
                              </ul>
                            </li>
                            <li className="col-lg-3">
                              <ul>
                                <li className="dropdown-header">
                                  Management Studies
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Human Resource Management
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Communication Engineering
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Sales and Marketing
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Operations Management
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Information Technology
                                  </a>
                                </li>
                                <li className="divider"></li>
                              </ul>
                            </li>
                            <li className="col-lg-3">
                              <ul>
                                <li className="dropdown-header">Engineering</li>
                                <li>
                                  <a href="course-detail.html">
                                    Automobile Engineering
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Banking and Finance
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">Anatomy</a>
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Architecture Engineering
                                  </a>
                                </li>
                                <li>
                                  <a href="course-detail.html">
                                    Mechatronics Engineering
                                  </a>
                                </li>
                                <li className="divider"></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                        href="#"
                      >
                        Pages
                        <span className="glyphicon glyphicon-chevron-down pull-right"></span>
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="/blog">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/events">
                            Events
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/campus-life">
                            Campus Life
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/gallery">
                            Gallery
                          </Link>
                        </li>

                        <li>
                          <Link className="dropdown-item" to="/notice-board">
                            Notice Board
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/faq">
                            Faq
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/contact-us">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
