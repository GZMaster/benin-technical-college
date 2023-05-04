import React from "react";

export default function SignIn() {
  return (
    <div className="login sign-up">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-12 col-md-5 well well-sm">
            <form action="#" className="form sign-up-form">
              <div className="row">
                <div className="col-xs-6 col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="firstname"
                      placeholder="First Name"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="col-xs-6 col-md-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="lastname"
                      placeholder="Last Name"
                      type="text"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="youremail"
                  placeholder="Your Email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="reenteremail"
                  placeholder="Re-enter Email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="password"
                  placeholder="New Password"
                  type="password"
                />
              </div>
              <label> Birth Date</label>
              <div className="row">
                <div className="col-xs-4 col-md-4">
                  <select className="form-control custom-select">
                    <option selected value="">
                      Month
                    </option>
                    <option value="select">One</option>
                    <option value="select">Two</option>
                    <option value="select">Three</option>
                    <option value="select">Four</option>
                  </select>
                </div>
                <div className="col-xs-4 col-md-4">
                  <select className="form-control custom-select">
                    <option selected value="">
                      Day
                    </option>
                    <option value="select">One</option>
                    <option value="select">Two</option>
                    <option value="select">Three</option>
                    <option value="select">Four</option>
                  </select>
                </div>
                <div className="col-xs-4 col-md-4">
                  <select className="form-control custom-select">
                    <option selected value="">
                      Year
                    </option>
                    <option value="select">One</option>
                    <option value="select">Two</option>
                    <option value="select">Three</option>
                    <option value="select">Four</option>
                  </select>
                </div>
              </div>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="sex"
                  id="inlineCheckbox1"
                  value="male"
                />
                Male
              </label>
              <label className="radio-inline">
                <input
                  type="radio"
                  name="sex"
                  id="inlineCheckbox2"
                  value="female"
                />
                Female
              </label>
              <br />
              <br />
              <button
                type="submit"
                className="btn btn-warning"
                id="js-subscribe-btn"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
