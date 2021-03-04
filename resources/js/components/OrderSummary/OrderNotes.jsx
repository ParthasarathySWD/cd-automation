import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

function OrderNotes(props) {
    let history = useHistory();

    const [ordernotes, setOrderNotes] = useState([]);

    /** Get Order Notes */
    const fetchOrderNotes = () => {
        axios.get('ordernots/fetchOrderNotes', {
            params: {
                OrderUID: props.orderid
            }
        }).then( response =>{
            console.log(response);
            setOrderNotes(response.data.NotesData);
        })
    }
    /** end */
    useEffect(() => {
        fetchOrderNotes();
    },[]);

    return (
        <>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card">      
                    <div className="chatapp_body">
                        <div className="chat-header">
                        <a href="javascript:void(0);" className="open_detail">
                            <div className="media mb-0">
                            <img className="rounded-circle w35" src="../../../images/user.png" alt="" />
                            <div className="media-body mr-3 ml-3 text-muted">
                                <h6 className="m-0">Dr. Deborah Cox</h6>
                                <small>Dental</small>
                            </div>
                            </div>
                        </a>                        
                        </div>
                        <div className="chat-history">
                        <ul className="message_data">
                            <li className="right clearfix">
                                <img className="user_pix" src="../../../images/xs/avatar7.jpg" alt="avatar"/>
                                <div className="message">
                                    <a href="#!" className="smily"><i className="fa fa-smile-o"></i></a>
                                    <span>Hi Aiden, how are you?<br />> How is the project coming along?</span>
                                </div>
                                <span className="data_time">10:12 AM</span>
                            </li>
                            <li className="left clearfix">
                                <img className="user_pix" src="../../../images/user.png" alt="avatar"/>
                                <div className="message">
                                    <a href="#!" className="smily"><i className="fa fa-smile-o"></i></a>
                                    <span>Are we meeting today?</span>
                                    <div className="alert alert-primary mb-0 mt-2">
                                    <i className="fa fa-file-word-o mr-2"></i> <span>finame12.doc</span>
                                    </div>
                                </div>
                                <span className="data_time">10:12 AM</span>
                            </li>
                            
                            {/* <li className="right clearfix">
                            <img className="user_pix" src="../../../images/xs/avatar5.jpg" alt="avatar"/>
                            <div className="message">
                                <a href="#!" className="smily"><i className="fa fa-smile-o"></i></a>
                                <span>How is the project coming along?</span>
                            </div>
                            <span className="data_time">10:12 AM, Today</span>
                            </li>
                            <li className="divider clearfix">
                            <span>yesterday</span>
                            </li>
                            <li className="left clearfix">
                            <img className="user_pix" src="../../../images/user.png" alt="avatar"/>
                            <div className="message">
                                <a href="#!" className="smily"><i className="fa fa-smile-o"></i></a>
                                <span>Project has been already finished and I have<br />> results to show you.</span>
                            </div>
                            <span className="data_time">10:16 AM, Today</span>
                            </li>
                            <li className="right clearfix">
                            <img className="user_pix" src="../../../images/xs/avatar5.jpg" alt="avatar"/>
                            <div className="message">
                                <a href="#!" className="smily"><i className="fa fa-smile-o"></i></a>
                                <span>How is the project coming along?</span>
                                <div className="mt-2">
                                <img className="w100" src="../../../images/image-gallery/1.jpg" alt="" />
                                <img className="w100" src="../../../images/image-gallery/2.jpg" alt="" />
                                <img className="w100" src="../../../images/image-gallery/3.jpg" alt="" />
                                </div>
                            </div>
                            <span className="data_time">10:12 AM, Today</span>
                            </li> */}
                        </ul>
                        </div>
                        <div className="chat-message">
                            <div className="form-group c_form_group mb-0">
                                <textarea type="text" row="" className="form-control" placeholder="Enter text here..."></textarea>
                            </div>
                            <div className="m-1">
                                <a href="#!" className="btn btn-xs hidden-xs"><i className="fa fa-paperclip text-danger"></i></a>
                                <a href="#!" className="btn btn-xs pull-right"><i className="fa fa-paper-plane-o text-primary"></i></a>
                                {/* <a href="javascript:void(0);" className="btn btn-sm btn-default"><i className="fa fa-video-camera"></i></a>
                                <a href="javascript:void(0);" className="btn btn-sm btn-default"><i className="fa fa-plus"></i></a> */}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OrderNotes;