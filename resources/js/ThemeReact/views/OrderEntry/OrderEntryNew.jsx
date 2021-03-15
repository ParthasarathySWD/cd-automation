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
    /** END */

    /** Radio Button Base Section Show Hide */
    const [Display, setDisplay] = useState({
        mock_docs: '',
        source_docs: '',
        mannual_edit: ''
    });
    console.log(Display.mock_docs);

    /** Drag and Drop Order File Store */
    function onUpload (files) {
        console.log(files);
        setOrderFile((preveState)=>{
            return [...preveState, ...files]
        });
    }
    /** end */
    
    +
    /** inti Component Did Mount */
    React.useEffect(() => {

        if (Display.source_docs == 'Yes' || Display.mock_docs == 'Yes' || Display.mannual_edit == 'Yes') {

            console.log("Effect Rendered");
            drop.current.addEventListener('dragover', handleDragOver);
            drop.current.addEventListener('drop', handleDrop);
            
            return () => {
                if(drop.current){
                    drop.current.removeEventListener('dragover', handleDragOver);
                    drop.current.removeEventListener('drop', handleDrop);

                }
            };
        }
    }, [Display.source_docs, Display.mock_docs, Display.mannual_edit]);
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
        setOrderFile((preveState)=>{            
            return preveState.filter((v, i) => {
                return i != index;
            })
        });
    }
    /** end */

    /** File Input Display None Style */
    const DisplayNone = {
      display: 'none',
    };
    /** end */

   
    const DocTypeOption = [
        { value: '1', label: 'Prelim' },
        { value: '2', label: 'Title Commitment' },
        { value: '3', label: 'Closing' },
        { value: '4', label: 'Mortgage' }
    ]

    const ClientOption = [
        { value: '1', label: 'Test' },
        { value: '2', label: 'Zion Bank' },
        { value: '3', label: 'Demo' },
        { value: '4', label: 'Admin' }
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

    /** Radio Button Change Event */
    const radioButtonChange = (event) =>{
        let RadioName = event.target.name;
        let RadioValue = event.target.value;

        let setObj = {};
        if(RadioName == "mock_docs"){
            
            setObj = {
                source_docs: "",
                mannual_edit: ""
            };
            setOrderFile([])
        }

        if(RadioName == "source_docs"){

            setObj = {
                mannual_edit: ""
            };
            setOrderFile([])
        }
        setDisplay((prevState) => {
            return {
                ...prevState,
                ...setObj,
                [RadioName]:RadioValue
            }
        });        
    }
    /** end */

    /** Order entry Submit */

    function handleSubmit(event){
        event.preventDefault();
        
        var formData = new FormData(event.target);
        console.log(formData);

        console.log(OrderFile);
        Object.keys(OrderFile).map((fileName, index) => {
            let file = OrderFile[fileName];
            formData.append('OrderFiles[]', file);
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
                    customUI: ({ onClose }) => {
                        return (
                            <div className='custom-ui'>
                                <div class="box px-5 py-3 mb-3 flex items-center zoom-in">
                                    <div class="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile block mx-auto text-theme-10">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                        </svg>
                                    </div>
                                    <div class="ml-4 mr-auto">
                                        <div class="font-medium">
                                            Your Order Created Successfully
                                        </div>
                                        <div class="text-gray-600 text-xs mt-0.5">
                                            Your Order Number <b>CD1001</b>
                                        </div>
                                        <div class="text-gray-600 text-xs mt-5 text-center"> 
                                            <button class="btn btn-sm btn-outline-dark w-24 inline-block mr-2 mb-2">My Orders</button>
                                            <button class="btn btn-sm btn-outline-primary w-24 inline-block mr-1 mb-2">Stay Back</button>
                                        </div>
                                    </div>
                                    <div class="text-theme-24 order-edit-icon">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 block mx-auto">
                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        )
                    },
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
                            <div className="col-span-3"> 
                                    <label htmlFor="regular-form-2" className="form-label">Loan Number</label>
                                    <div className="input-group"> 
                                        <div id="input-group-email" className="input-group-text">
                                            <Icon.Hash className="w-4 h-4" />
                                        </div> 
                                        <input type="text" className="form-control form-control-md" placeholder="Ex. 9876543224" value={loannumber} name="LoanNumber" onChange={loanChange}/> 
                                    </div>
                                </div>
                                <div className="col-span-3"> 
                                    <label htmlFor="regular-form-2" className="form-label">Client</label>
                                    <Select 
                                        className="" 
                                        options={ClientOption} 
                                        name="ClientUID" 
                                        onChange={DocumentTypeChange}
                                        menuPortalTarget={document.body}
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                    />
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
                                <div className="col-span-6">

                                    <div className="col-span-12" >
                                        <div class="text-gray-900 text-lg whitespace-nowrap mb-2">
                                            How would you like to get started?
                                        </div>
                                        <div class="text-gray-800 text-md whitespace-nowrap mt-2">
                                            Do you want to compare Mock CD with the releavant source documents?
                                        </div>
                                        
                                        <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-1 flex" onChange={radioButtonChange} > 
                                            <div className="form-check mb-2 mr-6">
                                                <input 
                                                    id="mock_docs1" 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="mock_docs" 
                                                    value="Yes" 
                                                                                                      
                                                />
                                                <label className="form-check-label" htmlFor="mock_docs1">Yes</label>
                                            </div>
                                            <div className="form-check mb-2 mr-6">
                                                <input 
                                                    id="mock_docs2" 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="mock_docs" 
                                                    value="No"
                                                />
                                                <label className="form-check-label" htmlFor="mock_docs2">No</label>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        (Display.mock_docs == 'No') &&

                                        <div className="col-span-12">
                                            <div class="text-gray-800 text-md whitespace-nowrap mt-2">
                                                Do you want to create CD with the source document?
                                            </div>                                    
                                            <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-1 flex" onChange={radioButtonChange}> 
                                                <div className="form-check mb-2 mr-6">
                                                    <input id="source_docs1" className="form-check-input" type="radio" name="source_docs" value="Yes"/>
                                                    <label className="form-check-label" htmlFor="source_docs1">Yes</label>
                                                </div>
                                                <div className="form-check mb-2 mr-6">
                                                    <input id="source_docs2" className="form-check-input" type="radio" name="source_docs" value="No"/>
                                                    <label className="form-check-label" htmlFor="source_docs2">No</label>
                                                </div>
                                            </div>
                                        </div> 
                                    }
                                    {
                                        (Display.source_docs == 'No' && Display.mock_docs == 'No') &&
                                        <div className="col-span-12">
                                            <div class="text-gray-800 text-md whitespace-nowrap mt-2">
                                                Do you want to upload Mock CD and use manual edit option?
                                            </div>                                    
                                            <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-1 flex" onChange={radioButtonChange}> 
                                                <div className="form-check mb-2 mr-6">
                                                    <input id="mannual_edit1" className="form-check-input" type="radio" name="mannual_edit" value="Yes"/>
                                                    <label className="form-check-label" htmlFor="mannual_edit1">Yes</label>
                                                </div>
                                                <div className="form-check mb-2 mr-6">
                                                    <input id="mannual_edit2" className="form-check-input" type="radio" name="mannual_edit" value="No"/>
                                                    <label className="form-check-label" htmlFor="mannual_edit2">No</label>
                                                </div>
                                            </div>
                                        </div>
                                    }    
                                    
                                    {
                                        (Display.source_docs == 'Yes' || Display.mock_docs == 'Yes' || Display.mannual_edit == 'Yes') &&
                                        <div className="intro-y col-span-12 lg:col-span-6 mt-5">
                                            <div className="preview text-center">
                                                <div className="dropzone" id="SupportDocumentSection" ref={drop}>
                                                    <button type="button" class="btn btn-sm btn-dark-soft w-24 mr-1 ml-auto mb-2" id="SupportDocumentButton" onClick={handleUploadBtnClick}> 
                                                        <input multiple accept="application/pdf" type="file" style={DisplayNone} id="SupportDocument" className="form-control" ref={FileInput} onChange={handelFileInputChange}/>
                                                        <Icon.File className="w-4 h-4 mr-2" /> Upload 
                                                    </button>
                                                    <div className="text-lg font-medium">Drop files here or click to upload.</div>
                                                    <div className="text-gray-600"> Upload any Mortgage Documents </div>
                                                </div>
                                            </div>
                                        </div> 
                                    }
                                    {
                                        (Display.source_docs == 'No' && Display.mock_docs == 'No' && Display.mannual_edit == 'No') &&
                                        <div className="intro-y col-span-12 lg:col-span-6 mt-5">
                                            <div className="preview text-center">
                                                <div className="alert alert-warning-soft show flex items-center mb-2" role="alert"> 
                                                    <Icon.AlertCircle className="w-6 h-6 mr-2" />
                                                    Sorry, you need to select any of the above option to generate CD.
                                                </div>
                                            </div>
                                        </div> 
                                    }
                                </div>
                                <div className="col-span-6">
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
                                                            <tr key={index}>
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
