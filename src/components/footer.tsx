import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* <div className="row">
          <div className="col-md-12">
            <div className="subscribe">
              <h3>Newsletter</h3>
              <form
                id="subscribeform"
                action="https://demo.web3canvas.com/themeforest/unisco/php/subscribe.php"
                method="post"
              >
                <input
                  className="signup_form"
                  type="text"
                  name="email"
                  placeholder="Enter Your Email Address"
                />
                <button
                  type="submit"
                  className="btn btn-warning"
                  id="js-subscribe-btn"
                >
                  SUBSCRIBE
                </button>
                <div
                  id="js-subscribe-result"
                  data-success-msg="Success, Please check your email."
                  data-error-msg="Oops! Something went wrong"
                ></div>
              </form>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-md-3">
            <div className="foot-logo">
              <Link to="/">
                <img
                  src="images/BTC.png"
                  className="img-fluid"
                  alt="footer_logo"
                />
              </Link>
              <p>
                2023 © copyright
                <br /> All rights reserved.
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="sitemap">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-4">
            <div className="tweet_box">
              <h3>Tweets</h3>
              <div className="tweet-wrap">
                <div className="tweet"></div>
              </div>
            </div>
          </div> */}
          <div className="col-md-3">
            <div className="address">
              <h3>Contact us</h3>
              <p>
                <span>Address: </span> Benin Technical College, Benin City, Edo
                P.M.B 1178
              </p>
              {/* <p>
                Email :{" "}
                <a
                  href="https://demo.web3canvas.com/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="224b4c444d62574c4b51414d0c414d4f"
                >
                  [email&#160;protected]
                </a>
                <br /> Phone : +91 555 668 986
              </p>
              <ul className="footer-social-icons">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook fa-fb" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin fa-in" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter fa-tw" aria-hidden="true"></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
