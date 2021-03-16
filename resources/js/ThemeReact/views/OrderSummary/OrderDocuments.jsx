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
    const [addNewDocs, setaddNewDocs] = useState(false);
    const [IsDocumentListView, setDocumentListView] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [DocumentTypes, setDocumnetTypes] = useState('');

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
        setaddNewDocs(true);
        setDocumentListView(false);
    }
    /** end */
    /** Cancel Documents Button On Click Event */
    const cancelnewdoc = (event) => {
        event.preventDefault();
        setaddNewDocs(false);
        setDocumentListView(true);
    }
    /** end */

    /** Use Effect Function Begin */
    useEffect(() => {
        fetchOrderDocs(); 
        
        /** init file upload drag and drop  */
        if (addNewDocs) {
            drop.current.addEventListener('dragover', handleDragOver);
            drop.current.addEventListener('drop', handleDrop);
            
            return () => {
                if(drop.current){
                    drop.current.removeEventListener('dragover', handleDragOver);
                    drop.current.removeEventListener('drop', handleDrop);
                }
            };
        }        
        /** end */
    },[]);
    /** end */
    
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

   
    const DocTypeOption = [
        { value: '1', label: 'Prelim' },
        { value: '2', label: 'Title Commitment' },
        { value: '3', label: 'Closing' },
        { value: '4', label: 'Mortgage' }
    ]

    return (
       <>
        <div className="grid grid-cols-12 gap-3 mt-5">
            {
                (IsDocumentListView) &&
            
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
            } 
            {
                (addNewDocs) &&
               
                <div className="col-span-12 lg:col-span-12">
                    <form
                        id="frm-order-documents"
                        encType="multipart/form-data"
                    >
                        <input type="hidden" name="OrderUID" value={props.orderid}/>
                        <div class="intro-y col-span-12 lg:col-span-12">
                            <h2 class="font-medium text-base mr-auto">Add New Documents</h2>
                        </div>
                        <div className="grid grid-cols-12 gap-1">                    
                            <div className="intro-y col-span-6 lg:col-span-6 mt-5">
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

                            <div className="intro-y col-span-6 lg:col-span-6">
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
                                                                    DocTypeOption
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
                        <div className="grid grid-cols-12 gap-1">
                            <div className="col-span-12 lg:col-span-12">
                                <div className="intro-y text-right mt-3">
                                    <div className="grid grid-cols-12 gap-3">
                                        <div className="intro-y col-span-12 lg:col-span-12 flex">
                                            <button className="btn btn-sm btn-dark-soft w-24 mr-1 ml-auto mb-2"
                                                onClick={cancelnewdoc}
                                            > 
                                                <Icon.X className="w-4 h-4 mr-2" /> Cancel 
                                            </button>
                                            <button type="submit" className="btn btn-sm btn-primary w-30 mr-1 mb-2"> 
                                                <Icon.Save className="w-4 h-4 mr-2" /> {(isLoading)? 'Loading...' : 'Save Documnets'} 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>                
            }        
        </div>
       </>
    );
}

export default OrderDocuments;
