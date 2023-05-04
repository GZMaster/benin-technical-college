import React from "react";

export default function ContactPage() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-title">
              <h2>Contact Details</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="contact-form">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 contact-option">
                  <div className="contact-option_rsp">
                    <h3>Leave a message</h3>
                    <form
                      action="https://demo.web3canvas.com/themeforest/unisco/php/contact.php"
                      method="post"
                      id="phpcontactform"
                    >
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                          name="phone"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <textarea
                          placeholder="Message"
                          className="form-control"
                          name="message"
                          required
                          rows={5}
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-default btn-submit"
                        id="js-contact-btn"
                      >
                        SUBMIT
                      </button>
                      <div
                        id="js-contact-result"
                        data-success-msg="Success, Your message has been sent"
                        data-error-msg="Oops! Something went wrong"
                      ></div>
                    </form>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6">
                  <div className="contact-address">
                    <h3>Location</h3>
                    <div className="contact-details">
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <h6>Address</h6>
                      <p>
                        Unisco university <br />
                        Albany, NY <br />
                        USA. 11001
                      </p>
                    </div>
                    <br />
                    <div className="contact-details">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      <h6>Email</h6>
                      <p>
                        <a
                          href="https://demo.web3canvas.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="f69f989099b683989f859599d8939283"
                        >
                          [email&#160;protected]
                        </a>
                        <br />
                        <a
                          href="https://demo.web3canvas.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="6001040d090e20150e0913030f4e050415"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                    <br />
                    <div className="contact-details">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      <h6>phone</h6>
                      <p>+91 555 668 986</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="contact-center">OR</p>
          </div>
        </div>
      </div>

      <div id="map" data-lat="40.674" data-lon="-73.945" data-zoom="12"></div>
    </section>
  );
}
