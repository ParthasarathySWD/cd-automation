import React from 'react';

class ThemeSetting extends React.Component{
	render(){
		return (
			<div>
				<a href="#!" className="theme_btn"><i className="fa fa-gear fa-spin"></i></a>
	            <ul className="list-group">
	                  <li className="list-group-item">
	                      <ul className="choose-skin list-unstyled mb-0">
	                          <li data-theme="green" className="active"><div className="green"></div></li>
	                          <li data-theme="orange"><div className="orange"></div></li>
	                          <li data-theme="blush"><div className="blush"></div></li>
	                          <li data-theme="cyan"><div className="cyan"></div></li>
	                          <li data-theme="timber"><div className="timber"></div></li>
	                          <li data-theme="blue"><div className="blue"></div></li>
	                          <li data-theme="amethyst"><div className="amethyst"></div></li>
	                      </ul>
	                  </li>
	                  <li className="list-group-item d-flex align-items-center justify-content-between">
	                      <span>Light Sidebar</span>
	                      <label className="switch sidebar_light">
	                          <input type="checkbox" defaultChecked/>
	                          <span className="slider round"></span>
	                      </label>
	                  </li>
	                  <li className="list-group-item d-flex align-items-center justify-content-between">
	                      <span>Gradient</span>
	                      <label className="switch gradient_mode">
	                          <input type="checkbox" defaultChecked/>
	                          <span className="slider round"></span>
	                      </label>
	                  </li>
	                  <li className="list-group-item d-flex align-items-center justify-content-between">
	                      <span>Dark Mode</span>
	                      <label className="switch dark_mode">
	                          <input type="checkbox"/>
	                          <span className="slider round"></span>
	                      </label>
	                  </li>
	                  <li className="list-group-item d-flex align-items-center justify-content-between">
	                      <span>RTL version</span>
	                      <label className="switch rtl_mode">
	                          <input type="checkbox"/>
	                          <span className="slider round"></span>
	                      </label>
	                  </li>
	            </ul>
	            <hr/>
	            <div>
	                <a href="https://themeforest.net/user/puffintheme/portfolio" className="btn btn-dark btn-block" target="_blank">Buy this item</a>
	                <a href="https://themeforest.net/user/puffintheme/portfolio" target="_blank" className="btn btn-primary theme-bg gradient btn-block">View Portfolio</a>
	            </div>
	        </div>
		);
	}
}

export default ThemeSetting;