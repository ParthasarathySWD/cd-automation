import React, { Component, useState } from "react";
import axios from 'axios';
import '../../CommonComponents/FIleUploader/style.css';
import FileDrop from '../../CommonComponents/FIleUploader/FileDrop';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useToasts } from 'react-toast-notifications';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';


const SwalAlert = withReactContent(Swal)

function OrderEntryForm() {

    const [files, setFiles] = useState([]);
    const [types, setTypes] = useState([]);
    const { addToast } = useToasts();

    function handleSubmit(event){
        event.preventDefault();
        var formData = new FormData(event.target);
        console.log(files);
        console.log(types);
        console.log(formData);

        Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            if (index == 0) {
                formData.append('PrelimFile', file);
            } else {
                formData.append('SupportingFile[]', file);
            }
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
                          label: 'Goto My Orders',
                          onClick: () => alert('Click Yes'),
                          className: 'btn btn-md btn-outline-primary'
                        },
                        {
                          label: 'Stay Back',
                          onClick: () => alert('Click No'),
                          className: 'btn btn-md btn-outline-success'
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
                        <div className="header">
                            <h5>Order Entry</h5>
                        </div>
                        <div className="body">
                            <form id="frm-order-entry" onSubmit={handleSubmit}>
                                <div className="row clearfix">
                                    <div className="col-sm-6 mb-4">
                                        <div className="row clearfix scroll-div">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Loan Number <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue="" name="LoanNumber" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                    <div className="row clearfix">
                                        <div className="col-sm-8 uploader">
                                            <h6>
                                                Upload Documnents
                                            </h6>
                                            <FileDrop setFiles={setFiles} setTypes={setTypes}/>
                                        </div>
                                    </div>


                                    <div className="row clearfix">
                                        <div className="col-sm-8">
                                             <table className="table table-borderless table-sm text-sm upload-table">
                                                <tbody>
                                                    <tr>
                                                        <td className="w-40px"><i className="fa fa-file-pdf-o text-danger"></i></td>
                                                        <td className="w-25">Name</td>
                                                        <td className="w-25">
                                                            <select className="border form-control form-control-sm">
                                                                <option>Select</option>
                                                                <option>Document Type-2</option>
                                                                <option>Document Type-3</option>
                                                                <option>Document Type-4</option>
                                                            </select>
                                                        </td>
                                                        <td className="text-center"><i title="View" className="fa fa-eye text-primary mr-3"></i><i title="Remove" className="fa fa-trash-o text-danger"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-40px"><i className="fa fa-file-pdf-o text-danger"></i></td>
                                                        <td className="w-25">Name</td>
                                                        <td className="w-25">
                                                            <select className="border form-control form-control-sm">
                                                                <option>Select</option>
                                                                <option>Document Type-2</option>
                                                                <option>Document Type-3</option>
                                                                <option>Document Type-4</option>
                                                            </select>
                                                        </td>
                                                        <td className="text-center"><i title="View" className="fa fa-eye text-primary mr-3"></i><i title="Remove" className="fa fa-trash-o text-danger"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-40px"><i className="fa fa-file-pdf-o text-danger"></i></td>
                                                        <td className="w-25">Name</td>
                                                        <td className="w-25">
                                                            <select className="border form-control form-control-sm">
                                                                <option>Select</option>
                                                                <option>Document Type-2</option>
                                                                <option>Document Type-3</option>
                                                                <option>Document Type-4</option>
                                                            </select>
                                                        </td>
                                                        <td className="text-center"><i title="View" className="fa fa-eye text-primary mr-3"></i><i title="Remove" className="fa fa-trash-o text-danger"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-40px"><i className="fa fa-file-pdf-o text-danger"></i></td>
                                                        <td className="w-25">Name</td>
                                                        <td className="w-25">
                                                            <select className="border form-control form-control-sm">
                                                                <option>Select</option>
                                                                <option>Document Type-2</option>
                                                                <option>Document Type-3</option>
                                                                <option>Document Type-4</option>
                                                            </select>
                                                        </td>
                                                        <td className="text-center"><i title="View" className="fa fa-eye text-primary mr-3"></i><i title="Remove" className="fa fa-trash-o text-danger"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <div className="pull-right">
                                                <button type="submit" className="btn btn-sm btn-primary" >Submit</button>
                                                <button type="submit" className="btn  btn-sm btn-danger">Cancel</button>
                                            </div>
                                        </div>
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

export default OrderEntryForm;
