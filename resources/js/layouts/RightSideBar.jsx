import React from 'react'

class RightSideBar extends React.Component {
	render(){
		return(
			<div className="slim_scroll">
                <div className="chat_list">
                    <form>
                        <div className="input-group c_input_group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="icon-magnifier"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Search..."/>
                        </div>
                    </form>
                    <div className="body">
                        <ul className="nav nav-tabs3 white mt-3 d-flex text-center">
                            <li className="nav-item flex-fill"><a className="nav-link active show" data-toggle="tab" href="#chat-Users">Chat</a></li>
                            <li className="nav-item flex-fill"><a className="nav-link" data-toggle="tab" href="#chat-Groups">Groups</a></li>
                            <li className="nav-item flex-fill"><a className="nav-link mr-0" data-toggle="tab" href="#chat-Contact">Contact</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane vivify fadeIn active show" id="chat-Users">
                                <ul className="right_chat list-unstyled mb-0 animation-li-delay">
                                    <li className="online">
                                        <a href="#!" className="media">
                                            <img className="media-object"  alt=""/>
                                            <div className="media-body">
                                                <span className="name">Louis Henry <small className="text-muted font-12">10 min</small></span>
                                                <span className="message">How do you do?</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </a>
                                    </li>                                    
                                </ul>
                            </div>
                            <div className="tab-pane vivify fadeIn" id="chat-Groups">
                                <ul className="right_chat list-unstyled mb-0 animation-li-delay">
                                    <li className="online">
                                        <a href="#!" className="media">
                                            <img className="media-object"  alt=""/>
                                            <div className="media-body">
                                                <span className="name">Apolog Hospital<small className="text-muted font-12">10 min</small></span>
                                                <span className="message">How do you do?</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>                                   
                                </ul>
                            </div>
                            <div className="tab-pane vivify fadeIn" id="chat-Contact">
                                <ul className="right_chat list-unstyled mb-0 animation-li-delay">
                                    <li className="offline">
                                        <a href="#!" className="media">
                                            <img className="media-object " alt=""/>
                                            <div className="media-body">
                                                <span className="name">Dr. John Smith <small className="text-muted"><i className="fa fa-star"></i></small></span>
                                                <span className="message">johnsmith@info.com</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </a>                            
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default RightSideBar;