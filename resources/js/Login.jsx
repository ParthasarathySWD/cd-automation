import React from 'react';

// import Header from './layouts/Header'; import Sidebar from
// './layouts/Sidebar'; import Content from './layouts/Content'; import Footer
// from './layouts/Footer';

class Login extends React.Component {
  render() {
    return (
      <div className="auth-main">
        <div className="auth_div vivify fadeIn">
          <div className="auth_brand">
            <a className="navbar-brand" href="#"><img
              src="assets/images/icon.svg"
              width="50"
              className="d-inline-block align-top mr-2"
              alt=""/>Mooli</a>
          </div>
          <div className="card">
            <div className="header">
              <p className="lead">Login to your account</p>
            </div>
            <div className="body">
              <form className="form-auth-small" action="index.html">
                <div className="form-group c_form_group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"/>
                </div>
                <div className="form-group c_form_group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"/>
                </div>
                <div className="form-group clearfix">
                  <label className="fancy-checkbox element-left">
                    <input type="checkbox"/>
                    <span>Remember me</span>
                  </label>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">LOGIN</button>
                <div className="bottom">
                  <span className="helper-text m-b-10">
                    <i className="fa fa-lock"></i>
                    <a href="page-forgot-password.html">Forgot password?</a>
                  </span>
                  <span>Don't have an account?
                    <a href="page-register.html">Register</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="animate_lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

    );
  }
}
export default Login;