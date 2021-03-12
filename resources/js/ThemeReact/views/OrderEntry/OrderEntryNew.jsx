import React, { useState, Component, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import * as Icon from 'react-feather';
import Select from 'react-select';
import './style.css';

import axios from '../../../ThemeLayouts/repository/api';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useToasts } from 'react-toast-notifications';

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

function OrderEntry() {

    /** Create Reference for File Drag and Drop */
    const drop = React.useRef(null);
    const FileInput = React.useRef(null);

    /** add Toast */
    const { addToast } = useToasts();
    let history = useHistory();

    /** Declare States for Order Entry */
    const [OrderFile, setOrderFile] = useState([]);
    const [DocumentTypes, setDocumnetTypes] = useState('');
    const [loannumber, setLoanNumber] = useState("");

    /** Drag and Drop Order File Store */
    function onUpload (files) {
        console.log(files);
        setOrderFile((preveState)=>{
            return [...preveState, ...files]
        });
    }
    /** end */
    
    /** inti Component Did Mount */
    React.useEffect(() => {
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);
        
        return () => {
            drop.current.removeEventListener('dragover', handleDragOver);
            drop.current.removeEventListener('drop', handleDrop);
        };
    }, []);
    /** end */
    
    /** File Drage Over Function */
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    /** end */
    
    /** File Drop Function */
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();        
        const {files} = e.dataTransfer;
        /** check file is empty or not empty */
        if (files && files.length) {   
            onUpload(Object.keys(files).map(v => files[v]));           
        }
    };
    /** end */
    
    /** Attachment Button Click Event */
    const handleUploadBtnClick = (event) => {
        FileInput.current.click();
    };
    /** end */

    /** Attachment Button File input change event */
    const handelFileInputChange = (event) => {
        const files = [...event.target.files];
        onUpload(files); 
    }
    /** end */

    /** File extension base create a icon class */
    const FileExtension = (extension) => {
        switch (extension) {
            case 'pdf':
                return ({
                    class: 'fa fa-file-pdf-o mr-1 notes-pdf'
                })
                break;
            case 'xlsx':
                return ({
                    class: 'fa fa-file-excel-o mr-1 notes-excel'
                })
                break;
            case 'docx':
                return ({
                    class: 'fa fa-file-text mr-1 notes-doc'
                })
                break;
            case 'txt':
                return ({
                    class: 'fa fa-file-text mr-1 notes-doc'
                })
                break;
            case 'png':
                return ({
                    class: 'fa fa-file-image-o mr-1 notes-image'
                })
                break;
        
            default:
                return ({
                    class: 'fa fa-files-o mr-1 notes-other'
                })
                break;
        }
    }
    /** end */

    /** FIle Remove fron State  */
    const handelRemoveFile = (event) => {
        event.preventDefault();
        let index = event.target.id;
        console.log('index', index)
        onUpload((preveState)=>{            
            return preveState.filter((v, i) => {
                 return i != index;
            })
        });
    }
    /** end */

    /** File Input Dispaly None Style */
    const DisplayNone = {
      display: 'none',
    };
    /** end */

   
    const DocTypeOption = [
        { value: '1', label: 'Prelim' }
        { value: '2', label: 'Title Commitment' },
        { value: '3', label: 'Closing' },
        { value: '4', label: 'Mortgage' }
    ]

    /** Supporting file Documnet Type onchange event */
    const DocumentTypeChange = event => {
        setDocumnetTypes(event.value);
    }
    /** end */

    /** Loan Number Change Event */
    const loanChange = (event) => {  
        setLoanNumber(event.target.value); 
    }
    /** end */

    /** Order entry Submit */

    function handleSubmit(event){
        event.preventDefault();
        var formData = new FormData(event.target);
        console.log(formData);

        Object.keys(PrelimFile).map((fileName, index) => {
            let file = PrelimFile[fileName];
            formData.append('PrelimFile', file);
            // formData.append('DocumentTypeUID', prelimDocType);
        });

        Object.keys(SupportFile).map((fileName, index) => {
            let file = SupportFile[fileName];
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
                // addToast(response.data.message, { appearance: 'success', autoDismiss: true, });
                //Modal Customization
                const options = {
                    title: response.data.message,
                    message: '',
                    buttons: [
                        {
                          label: 'Goto the Order',
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

    /** end */

    return (
        <>
            {/* Order Entry Form Begin */}
            <form id="frm-order-entry" encType="multipart/form-data" onSubmit={handleSubmit}>
                {/* Loan Number */}
                <div className="grid grid-cols-12 gap-3 mt-5">
                    <div className="intro-y col-span-12 lg:col-span-12">
                        <div className="intro-y box  p-5">
                            <div className="grid grid-cols-12 gap-3">
                                <div className="intro-y col-span-12 lg:col-span-12">
                                    <h2 className="font-medium text-base mr-auto">
                                        Step 1
                                    </h2>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-3">
                                <div className="mt-3 col-span-3"> 
                                    <label htmlFor="regular-form-2" className="form-label">Loan Number</label>
                                    <div className="input-group"> 
                                        <div id="input-group-email" className="input-group-text">
                                            <Icon.Hash className="w-4 h-4" />
                                        </div> 
                                        <input type="text" className="form-control form-control-sm" placeholder="Ex. 9876543224" value={loannumber} name="LoanNumber" onChange={loanChange}/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end */}



                {/* File Upload */}
                <div className="grid grid-cols-12 gap-3 mt-5">
                    <div className="intro-y col-span-12 lg:col-span-12">
                        <div className="intro-y box p-5">
                            <div className="grid grid-cols-12 gap-3">
                                <div className="intro-y col-span-12 lg:col-span-12 pb-0">
                                    <h2 className="font-medium text-base mr-auto">
                                        Step 2 : <span className="font-normal">Upload your documents</span>
                                    </h2>
                                </div>
                                <div className="intro-y col-span-12 lg:col-span-6">
                                    <div className="preview text-center">
                                        <div className="dropzone" id="SupportDocumentSection" ref={drop}>
                                            <button type="button" className="btn btn-dark w-32 mr-2 mb-2" id="SupportDocumentButton" onClick={handleUploadBtnClick}> 
                                                <input multiple type="file" style={DisplayNone} id="SupportDocument" className="form-control" ref={FileInput} onChange={handelFileInputChange}/>
                                                <Icon.File className="w-4 h-4 mr-2" /> Upload 
                                            </button>
                                            <div className="text-lg font-medium">Drop files here or click to upload.</div>
                                            <div className="text-gray-600"> Upload any Mortgage Documents </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="intro-y col-span-12 lg:col-span-6">
                                    <table className="table table--sm">
                                        <tbody>
                                            {
                                                OrderFile.map((file, index) => {
                                                    let extension = file.name.split('.').pop();
                                                    console.log(extension);
                                                    let iconClass = FileExtension(extension);
                                                    console.log(iconClass);
                                                    return (
                                                        <tr>
                                                            <td className="border-b dark:border-dark-5">
                                                                <Select 
                                                                    className="custom_select" 
                                                                    options={DocTypeOption} 
                                                                    name="DocumentTypeUID[]" 
                                                                    onChange={DocumentTypeChange}
                                                                />
                                                            </td>
                                                            <td className="border-b dark:border-dark-5">{file.name}</td>
                                                            <td className="border-b dark:border-dark-5">
                                                                <Icon.Trash className="w-4 h-4 text-theme-24" data-section="SupportRemove" id={index} onClick={handelRemoveFile} />
                                                            </td>
                                                        </tr>
                                                    )                                        
                                                })
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end */}

                {/* Button Section */}
                <div className="intro-y text-right mt-3">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="intro-y col-span-12 lg:col-span-12 flex">
                            <button className="btn btn-sm btn-dark-soft w-24 mr-1 ml-auto mb-2"> <Icon.X className="w-4 h-4 mr-2" /> Cancel </button>
                            <button type="submit" className="btn btn-sm btn-primary w-24 mr-1 mb-2"> <Icon.Save className="w-4 h-4 mr-2" /> Save </button>
                        </div>
                    </div>
                </div>
                {/* end */}
            </form>
            {/* end */}

        </>
    )
}

export default OrderEntry;
