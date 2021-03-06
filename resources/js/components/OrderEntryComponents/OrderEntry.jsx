import React, { Component, useState } from "react";
import axios from 'axios';
import '../../CommonComponents/FIleUploader/style.css';
import FileDrop from '../../CommonComponents/FIleUploader/FileDrop';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useToasts } from 'react-toast-notifications';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import './style.css';

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';


const SwalAlert = withReactContent(Swal)

function OrderEntry() {

    const [prelimFile, setPrelimFile] = useState([]);
    const [prelimDocType, setprelimDocType] = useState(1);

    const [supportFile, setSupportFile] = useState([]);
    const [supportDocType, setsupportDocType] = useState([]);

    const { addToast } = useToasts();
    let history = useHistory();
    const [loannumber, setLoanNumber] = useState("");
    
    const loanChange = (event) => {  
        setLoanNumber(event.target.value); 
    }

    // if (Object.keys(files).length != 0) {
    //     IsStepTowDisable()
    // } else {
    //     IsStepTowEnable()
    // }

    function handleSubmit(event){
        event.preventDefault();
        var formData = new FormData(event.target);
        console.log(formData);

        Object.keys(prelimFile).map((fileName, index) => {
            let file = prelimFile[fileName];
            formData.append('PrelimFile', file);
            // formData.append('DocumentTypeUID', prelimDocType);
        });

        Object.keys(supportFile).map((fileName, index) => {
            let file = supportFile[fileName];
            formData.append('SupportingFile[]', file);
        });

        axios.post('orderentry', formData).then(response =>{
            console.log(response);
            if (response.data.status != true) {
                if (response.data.type == 'Form Validation') {
                    let form_errors = response.data.errors;
                    console.log(form_errors.LoanNumber);
                    if (form_errors.LoanNumber) {
                        addToast(form_errors.LoanNumber, { appearance: 'error', autoDismiss: true, });
                    }
                    if (form_errors.PrelimFile) {
                        addToast(form_errors.PrelimFile, { appearance: 'error', autoDismiss: true, });
                    }
                } else {
                    let CustomeContent = response.data.errors+' : '+response.data.message;
                    addToast(CustomeContent, { appearance: 'error', autoDismiss: true, });
                }
            } else {
                addToast(response.data.message, { appearance: 'success', autoDismiss: true, });
                //Modal Customization
                const options = {
                    title: response.data.message,
                    message: '',
                    buttons: [
                        {
                          label: 'Goto The Orders',
                          onClick: () => {                            
                            history.push('/summary/'+response.data.orderuid);
                          },
                          className: 'btn btn-xs btn-outline-primary'
                        },
                        {
                          label: 'Stay Back',
                          onClick: () => {                     
                                history.push('/orderentry');
                                setPrelimFile([]);
                                setprelimDocType(1);
                                setSupportFile([]);
                                setsupportDocType([]);
                                setLoanNumber('');
                          },
                          className: 'btn btn-xs btn-outline-success'
                        }
                    ],
                    childrenElement: () => <div />,
                    // customUI: ({ onClose }) => {
                    //     return (
                    //         <div className="card">
                    //             <div className="card-body">
                    //                 <h5 className="card-title">{response.data.message}</h5>
                    //                 <button onClick={onClose} className="btn btn-md btn-outline-info">
                    //                     Go To My Orders
                    //                 </button>
                    //                 <button
                    //                     onClick={() => {
                    //                         alert('Stay Back')
                    //                     }}
                    //                     className="btn btn-md btn-outline-success"
                    //                     >
                    //                         Stay Back
                    //                 </button>
                    //             </div>
                    //         </div>
                    //     );
                    // },
                    closeOnEscape: false,
                    closeOnClickOutside: false,
                    willUnmount: () => {},
                    afterClose: () => {},
                    onClickOutside: () => {},
                    onKeypressEscape: () => {},
                    overlayClassName: "overlay-custom-class-name"
                };
                confirmAlert(options);
            }

        })

    }
    return(
        <div>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">                        
                        <div className="body card-order-entry">
                            <form id="frm-order-entry" encType="multipart/form-data" onSubmit={handleSubmit}>
                                <div className="row clearfix">

                                    <div className="col-md-6">
                                        <div className="step-1">
                                            <h6>Step 1 :</h6>
                                            <div className="form-group">
                                                <label>Loan Number <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" value={loannumber} name="LoanNumber" onChange={loanChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row clearfix">
                                    <div className="col-md-6">
                                        <div className="steps"></div>
                                        <div className="step-2">
                                            <h6>Step 2 : Uploading Your Prelim Document</h6>
                                            <FileDrop setFiles={setPrelimFile} setTypes={setprelimDocType} doctype={'PrelimFile'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-md-6">
                                        <div className="steps"></div>
                                        <div className="step-3">
                                            <h6>Step 3 : Uploading Your Supporting Documents</h6>
                                            <FileDrop setFiles={setSupportFile} setTypes={setsupportDocType} doctype={'SupportingFile[]'}/>
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="pull-right">
                                            <button type="submit" className="btn btn-xs btn-primary mr-2" >Save</button>
                                            <button type="button" className="btn  btn-xs btn-danger">Cancel</button>
                                        </div>
                                    </div>
                                </div>                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

OrderEntry.propTypes = {
}

OrderEntry.defaultProps = {
}

export default OrderEntry;
