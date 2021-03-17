import React, { Component, useState, useEffect } from "react";
import axios from '../../../ThemeLayouts/repository/api';
import { useToasts } from 'react-toast-notifications';
import { confirmAlert } from 'react-confirm-alert'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import "react-data-table-component-extensions/dist/index.css";
import './style.css';
import * as Icon from 'react-feather';
// import Table from '../../CommonComponents/DataTable/DataTable';
import { ReactTabulator, reactFormatter } from "react-tabulator"; 
import DataTable, { createTheme } from 'react-data-table-component';
import TableLink from  '../../../components/DataTableComponents/TableLink';

// tooltip
import Tippy from '@tippyjs/react';
import Select from 'react-select';


function OrderDocuments(props) {
    const { addToast } = useToasts();
    let history = useHistory();
    
    /** Init States */
    const [orderdocs, setOrderDocs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [DocumentTypes, setDocumnetTypes] = useState('');
    const [DocTypeOption, setDocTypeOption] = useState({});
   
    
    /** init file upload state and ref */
    const drop = React.useRef(null);
    const FileInput = React.useRef(null);
    const [OrderNewFile, setOrderNewFile] = useState([]);

    /** Order Documnets Data Table Custom Style */
    const customStyles = {
        headCells:{
          style:{
            backgroundColor:'#a3bfd054'
          }
        }
    }
    /** end */

    /** Table Columns */
    const columns = [        
        {
            name: 'Document',
            selector: 'document',
            sortable: true,
        },
        {
            name: 'Type',
            selector: 'type',
            sortable: true,            
        },
        {
            name: 'OCR Status',
            selector: 'ocrstatus',
            cell: row =>             
            <span key={row.documentid} className={row.ocrstatuscolor}>{row.ocrstatus}</span> 
        },
        {
            name: 'Uploaded On',
            selector: 'uploadedon',
            sortable: true,
        },
        {
            name: 'Uploaded By',
            selector: 'uploadedby',
            sortable: true,
        },        
        {
            name:'Action',
            cell: row => 
            <div style={{marginTop:'10px'}}>
                <p key={row.documentid}>
                  <TableLink to={'//'+row.documentid}><Icon.Eye className=" mr-2" size="20" color="purple"/></TableLink>
                </p>
            </div>
        }
    ];
    /** end */


    /** Get Order Documents By OrderUID */
    const fetchOrderDocs = () => {
        axios.get('orderdocs/fetchOrderDocs', {
            params: {
                OrderUID: props.orderid
            }
        }).then( response =>{
            console.log(response);
            setOrderDocs(response.data.TableData);
        })
    }
    /** end */

    /** Order Document Table Data  */
    const data = orderdocs;
    /** end */

    /** Add New Documents Button On Click Event */
    const addnewdoc = (event) => {
        event.preventDefault();
        cash('#add-new-document').modal('show');
    }
    /** end */

    /** Cancel Documents Button On Click Event */
    const cancelnewdoc = (event) => {
        event.preventDefault();        
        setOrderNewFile([]);
        setIsLoading(false)
        cash('#add-new-document').modal('hide');
    }
    /** end */


    /** Use Effect Function Begin */
    useEffect(() => {
        fetchOrderDocs(); 
        
        /** init file upload drag and drop  */        
        drop.current.addEventListener('dragover', handleDragOver);
        drop.current.addEventListener('drop', handleDrop);
        
        return () => {            
            drop.current.removeEventListener('dragover', handleDragOver);
            drop.current.removeEventListener('drop', handleDrop);            
        };               
        /** end */       
    },[]);

    useEffect(() => {
        console.log('Effect Ran');
        async function fetchOrderEntryData() {       

            let docTyperesponse = await fetchDocumentTypes();
            
            if(docTyperesponse.data){
                setDocTypeOption(docTyperesponse.data);
            }
        }
        fetchOrderEntryData();
    }, ['Fetch Doc Types']);
    /** end */
    
    /** fetch document type */
    function fetchDocumentTypes() {
        return new Promise((resolve, reject) => {
            axios.get('order/fetchDocumentTypes', {})
            .then(function (response) {
                resolve(response);     
            })
            .catch(function (error) {
                resolve(error);
            })
        });
    }
    /** end */
    if (DocTypeOption && DocTypeOption.length > 0) {
       var TypeOptions = DocTypeOption.map((val)=>{
            return {value:val.DocumentTypeUID, label:val.DocumentTypeName}
        }); 
    }
    
    /** Drag and Drop Order File Store */
    function onUpload (files) {
        console.log(files);
        setOrderNewFile((preveState)=>{
            return [...preveState, ...files]
        });
    }
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

    /** Supporting file Documnet Type onchange event */
    const DocumentTypeChange = event => {
        setDocumnetTypes(event.value);
    }
    /** end */

    /** FIle Remove fron State  */
    const handelRemoveFile = (event) => {
        event.preventDefault();
        let index = event.target.id;
        console.log('index', index)
        setOrderNewFile((preveState)=>{            
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

   
    // const DocTypeOption = [
    //     { value: '1', label: 'Prelim' },
    //     { value: '2', label: 'Title Commitment' },
    //     { value: '3', label: 'Closing' },
    //     { value: '4', label: 'Mortgage' }
    // ]

    /** handel Submit event */
    function handleSubmit(event){
        event.preventDefault();        
        setIsLoading(true);
        console.log('File: ', OrderNewFile);
        console.log('Length: ', Object.keys(OrderNewFile).length);

        if (OrderNewFile) {        
        
            var formData = new FormData(event.target);
            console.log(formData);

            console.log(OrderNewFile);
            Object.keys(OrderNewFile).map((fileName, index) => {
                let file = OrderNewFile[fileName];
                formData.append('OrderDocuments[]', file);
            });


            axios.post('orderdocs/addNewDocs', formData).then(response =>{
                console.log(response);
                if (response.data.status != true) {
                    if (response.data.type == 'Form Validation') {
                        let form_errors = response.data.errors;
                        console.log(form_errors.DocumentTypeUID);
                        if (form_errors.DocumentTypeUID) {
                            addToast(form_errors.DocumentTypeUID, { appearance: 'error', autoDismiss: true, });
                        }
                        if (form_errors.OrderDocuments) {
                            addToast(form_errors.OrderDocuments, { appearance: 'error', autoDismiss: true, });
                        }
                    } else {
                        let CustomeContent = response.data.errors+' : '+response.data.message;
                        addToast(CustomeContent, { appearance: 'error', autoDismiss: true, });
                    }
                    setIsLoading(false);
                } else {
                    setIsLoading(false);
                    console.log(response);
                    addToast(response.data.message, { appearance: 'success', autoDismiss: true, });
                    fetchOrderDocs();
                    cash('#add-new-document').modal('hide');
                    setOrderNewFile([]);
                }

            })
        } else {
            addToast('Please Upload any Documents', { appearance: 'error', autoDismiss: true, });
            setIsLoading(false);
            return false;
        }

    }
    /** end */
    return (
       <>
        <div className="grid grid-cols-12 gap-3 mt-5">           
            
            {/* Document List Section Begin */}
            <div className="col-span-12 lg:col-span-12">
                <div className="intro-y col-span-12 lg:col-span-8 xxl:col-span-9">
                    <div className="intro-y col-span-12 lg:col-span-12">
                        <button 
                            type="button" 
                            className="btn btn-sm bg-theme-10 text-white w-30 mr-1 ml-auto mb-2 float-right"
                            onClick={addnewdoc}
                        >
                            <Icon.PlusCircle className="w-5 h-5 mr-1"/> Add New Document
                        </button>
                        <button type="button" className="btn btn-sm bg-theme-17 text-white w-30 mr-2 ml-auto mb-2 float-right">
                            <Icon.Mail className="w-5 h-5 mr-1"/> Compose Mail
                        </button>
                    </div>
                    <div className="intro-y col-span-12 lg:col-span-12">
                        <DataTable
                            columns={columns}
                            data={data}
                            customStyles={customStyles}
                            selectableRows
                        />
                    </div>
                </div>
            </div>  
            {/* end */}
             

            {/* Add New Document Modal Section Begin */}
            <div className="col-span-12">
                <div id="add-new-document" className='modal' aria-hidden="true" data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <form
                                id="frm-order-documents"
                                encType="multipart/form-data"
                                onSubmit={handleSubmit}
                            >
                                <div className="modal-header">
                                    <h2 className="font-medium text-base mr-auto">Add New Documents</h2>
                                    <a data-dismiss="modal" href="#!" onClick={cancelnewdoc}> 
                                        <Icon.X className="w-5 h-5 text-gray-500" /> 
                                    </a>
                                </div> 

                                <div className="modal-body pt-0">
                                    <div className=" grid grid-cols-12 gap-4 gap-y-3">
                                        <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3">
                                            
                                            <input type="hidden" name="OrderUID" value={props.orderid}/>
                                            <div className="grid grid-cols-12 gap-1">                    
                                                <div className="intro-y col-span-12 lg:col-span-12 mt-3">
                                                    <div className="preview text-center">
                                                        <div
                                                            className="dropzone"
                                                            id="SupportDocumentSection"  
                                                            ref={drop}                          
                                                        >
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-dark-soft w-24 mr-1 ml-auto mb-2"
                                                                id="SupportDocumentButton"  
                                                                onClick={
                                                                    handleUploadBtnClick
                                                                }                              
                                                            >
                                                                <input
                                                                    multiple
                                                                    accept="application/pdf"
                                                                    type="file"
                                                                    id="SupportDocument"
                                                                    className="form-control"
                                                                    style={DisplayNone}
                                                                    ref={FileInput}
                                                                    onChange={
                                                                        handelFileInputChange
                                                                    }
                                                                
                                                                />
                                                                <Icon.File className="w-4 h-4 mr-2" />{" "}
                                                                Upload
                                                            </button>
                                                            <div className="text-lg font-medium">
                                                                Drop files here or click
                                                                to upload.
                                                            </div>
                                                            <div className="text-gray-600">
                                                                Upload any Mortgage
                                                                Documents
                                                            </div>
                                                        </div>
                                                    </div>                
                                                </div>

                                                <div className="intro-y col-span-12 lg:col-span-12 mt-3">
                                                    <table className="table table--sm">
                                                        <tbody>
                                                            {OrderNewFile.map(
                                                                (file, index) => {
                                                                    let extension = file.name
                                                                        .split(".")
                                                                        .pop();
                                                                    console.log(extension);
                                                                    let iconClass = FileExtension(
                                                                        extension
                                                                    );
                                                                    console.log(iconClass);
                                                                    return (
                                                                        <tr key={index}>
                                                                            <td className="border-b dark:border-dark-5">
                                                                                <Select
                                                                                    className="custom_select"
                                                                                    options={
                                                                                        TypeOptions
                                                                                    }
                                                                                    name="DocumentTypeUID[]"
                                                                                    onChange={
                                                                                        DocumentTypeChange
                                                                                    }
                                                                                />
                                                                            </td>
                                                                            <td className="border-b dark:border-dark-5">
                                                                                {file.name}
                                                                            </td>
                                                                            <td className="border-b dark:border-dark-5">
                                                                                <Icon.Trash
                                                                                    className="w-4 h-4 text-theme-24"
                                                                                    data-section="SupportRemove"
                                                                                    id={
                                                                                        index
                                                                                    }
                                                                                    onClick={
                                                                                        handelRemoveFile
                                                                                    }
                                                                                />
                                                                            </td>
                                                                        </tr>
                                                                    );
                                                                }
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                                                                    
                                        </div>
                                    </div>
                                </div> 

                                <div className="modal-footer text-right"> 
                                    <button 
                                        className="btn btn-sm btn-dark-soft w-24 mr-1 ml-auto mb-2"
                                        onClick={cancelnewdoc}
                                    > 
                                        <Icon.X className="w-4 h-4 mr-2" /> Cancel 
                                    </button>
                                    <button type="submit" className="btn btn-sm btn-primary w-30 mr-1 mb-2"> 
                                        <Icon.Save className="w-4 h-4 mr-2" /> {(isLoading)? 'Loading...' : 'Save Documnets'} 
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* end */}
        </div>
       </>
    );
}

export default OrderDocuments;
