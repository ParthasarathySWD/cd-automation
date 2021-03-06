import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

import NotesFile from '../../CommonComponents/FIleUploader/NotesUpload';
import {useSelector} from 'react-redux';

function OrderNotes(props) {
    let history = useHistory();

    /** declear a states */
    const [ordernotes, setOrderNotes] = useState([]);
    const ProfileDetails = useSelector(state=>state.Profile);

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
    
    const LoginUserID = ProfileDetails.UserUID; 
    
    /** File extension base create a icon class & div class */
    const FileExtension = (extension) => {
        switch (extension) {
            case 'pdf':
                return ({
                    divClass: 'alert alert-danger mb-0 mt-2',
                    iconClass: 'fa fa-file-pdf-o'
                })
                break;
            case 'xlsx':
                return ({
                    divClass: 'alert alert-success mb-0 mt-2',
                    iconClass: 'fa fa-file-excel-o'
                })
                break;
            case 'docx':
                return ({
                    divClass: 'alert alert-primary mb-0 mt-2',
                    iconClass: 'fa fa-file-text'
                })
                break;
            case 'txt':
                return ({
                    divClass: 'alert alert-primary mb-0 mt-2',
                    iconClass: 'fa fa-file-text'
                })
                break;
            case 'png':
                return ({
                    divClass: 'alert alert-info mb-0 mt-2',
                    iconClass: 'fa fa-file-image-o'
                })
                break;
        
            default:
                return ({
                    divClass: 'alert alert-default mb-0 mt-2',
                    iconClass: 'fa fa-files-o'
                })
                break;
        }
    }
    /** end */

    /** Create a Notes Item */
    const Items = ordernotes.map((note, index) => {

        let IconClassName = FileExtension(note.AttachedFilesExtension);
        return (
            /** Check Login User by Dispaly the Notes */
            (note.UserUID == LoginUserID) ?
               <li className="right clearfix" key={index}>
                    <img className="user_pix" src="../../../images/xs/avatar7.jpg" alt="avatar"/>
                    <div className="message">
                        {}
                        <span>{note.Notes}</span>
                        {
                            /** Check attached file is empty or not empty */
                            (note.AttachedFiles == '') ?
                            <div className={IconClassName.divClass+ "col-md-4 pull-right mt-4"}>
                                <i className={IconClassName.iconClass}></i> <span>{note.AttachedFilesName}
                                    <i className="fa fa-cloud-download ml-2" aria-hidden="true"></i>
                                </span>
                            </div> : ""
                        }
                        
                    </div>
                    <span className="data_time">{note.Date +' '+ note.Time}</span>
                </li> 
            : 
                <li className="left clearfix" key={index}>
                    <img className="user_pix" src="../../../images/user.png" alt="avatar"/>
                    <div className="message">
                        
                        <span>{note.Notes}</span>
                        {
                            /** Check attached file is empty or not empty */
                            (note.AttachedFiles == '') ?
                            <div className={IconClassName.divClass+ "col-md-4"}>
                                <i className={IconClassName.iconClass}></i> <span>{note.AttachedFilesName}
                                    <i className="fa fa-cloud-download ml-2" aria-hidden="true"></i>
                                </span>
                            </div> : ""
                        }
                    </div>
                    <span className="data_time">{note.Date +' '+ note.Time}</span>
                </li> 
        )

    }); 
    /** end */
    
    return (
        <>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card">      
                    <div className="chatapp_body">
                        <div className="chat-header">
                        <a href="javascript:void(0);" className="open_detail">
                            <div className="media mb-0">
                            <img className="rounded-circle w35" src="../../../images/xs/avatar7.jpg" alt="" />
                            <div className="media-body mr-3 ml-3 text-muted">
                                <h6 className="m-0">{ProfileDetails.FirstName +' '+ ProfileDetails.LastName}</h6>
                                <small>Notes Follow Up</small>
                            </div>
                            </div>
                        </a>                        
                        </div>
                        <div className="chat-history">
                        <ul className="message_data">
                            {Items}
                        </ul>
                        </div>
                        <NotesFile></NotesFile>                        
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderNotes;