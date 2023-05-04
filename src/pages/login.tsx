import React from "react";

export default function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div id="login-overlay" className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="well">
                        <form
                          id="loginForm"
                          method="POST"
                          action="https://demo.web3canvas.com/login/"
                        >
                          <div className="form-group">
                            <label htmlFor="username" className="control-label">
                              Username
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              name="username"
                              value=""
                              required
                              title="Please enter you username"
                              placeholder="example@gmail.com"
                            />
                            <span className="help-block"></span>
                          </div>
                          <div className="form-group">
                            <label htmlFor="password" className="control-label">
                              Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              name="password"
                              value=""
                              required
                              title="Please enter your password"
                            />
                            <span className="help-block"></span>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input
                                type="checkbox"
                                name="remember"
                                id="remember"
                              />
                              Remember login
                            </label>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-warning"
                            id="js-subscribe-btn"
                          >
                            LOG IN
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
