import React from "react";
import Aux from "./hoc/Aux_";
import { Link } from "react-router-dom";
import Switcher from "./components/Switcher";

class Login extends React.Component {
  render() {
    return (
      <Aux>
        <div className="account-home-btn d-none d-sm-block">
          <Link to="home-one" className="text-white">
            <i className="mdi mdi-home h1"></i>
          </Link>
        </div>

        <section className="bg-account-pages height-100vh">
          <div className="display-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card account-card">
                      <div className="card-body">
                        <div className="text-center mt-3">
                          <h3 className="font-weight-bold">
                            <Link
                              to="home-one"
                              className="text-dark text-uppercase account-pages-logo"
                            >
                              Dorsin
                            </Link>
                          </h3>
                          <p className="text-muted">
                            Sign in to continue to Dorsin.
                          </p>
                        </div>
                        <div className="p-3">
                          <form>
                            <div className="form-group">
                              <label for="username">Username</label>
                              <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter username"
                              />
                            </div>

                            <div className="form-group">
                              <label for="userpassword">Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="userpassword"
                                placeholder="Enter password"
                              />
                            </div>

                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customControlInline"
                              />
                              <label
                                className="custom-control-label"
                                for="customControlInline"
                              >
                                Remember me
                              </label>
                            </div>

                            <div className="mt-3">
                              <button
                                type="submit"
                                className="btn btn-custom btn-block"
                              >
                                Log In
                              </button>
                            </div>

                            <div className="mt-4 mb-0 text-center">
                              <Link to="forgot-password" className="text-dark">
                                <i className="mdi mdi-lock"></i> Forgot your
                                password?
                              </Link>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Switcher />
      </Aux>
    );
  }
}

export default Login;
