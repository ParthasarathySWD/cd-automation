import React, {useEffect, useState} from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';

function NotesUpload(params) {
    /** Create Reference for File Drag and Drop */
    const drop = React.useRef(null);
    const fileInput = React.useRef(null);

    /** Declare States for Notes Files and New Notes Text */
    const [notesFiles, setNotesFiles] = useState([]);
    const [orderNotes, setEnterNotes] = useState("");

    /** Drag and Drop File Store */
    function onUpload (files) {
        console.log(files);
        setNotesFiles((preveState)=>{
            return [...preveState, ...files]
        });
    }
    /** end */
    
    /** Notes Text area on change event */
    const handelNotesChange = (event) => {  
        setEnterNotes(event.target.value); 
    }
    /** end */
    
    /** Notes Form Submit */
    function handleNotesSubmit(event) {
        event.preventDefault();
        var formData = new FormData(event.target);
        console.log(formData);
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
    const handleUploadBtnClick = () => {
        fileInput.current.click();
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

        setNotesFiles((preveState)=>{            
            return preveState.filter((v, i) => {
                return i != index;
            })
        });
    }
    /** end */

    return (
        <>
            <div className="drag-area" ref={drop}>
                <div className="chat-message">                                                   
                    <form id="frm-order-notes" encType="multipart/form-data" onSubmit={handleNotesSubmit}>
                        <div className="form-group c_form_group mb-0">
                            <textarea type="text" className="form-control" placeholder="Enter notes here..." onChange={handelNotesChange} >{orderNotes}</textarea>
                        </div>
                        <div className="row m-1">                            
                            <div className="col-md-1">
                                <button type="button" className="btn btn-xs hidden-xs" onClick={handleUploadBtnClick}>
                                    <input multiple type="file" className="form-control" ref={fileInput} onChange={handelFileInputChange}/>
                                    <i className="fa fa-paperclip text-danger"></i>
                                </button>
                            </div>
                            <div className="col-md-10 mt-07">
                                {
                                    notesFiles.map((file, index) => {
                                        let extension = file.name.split('.').pop();
                                        console.log(extension);
                                        let iconClass = FileExtension(extension);
                                        console.log(iconClass);
                                        return (
                                            <span className="badge badge-primary-notes" key={index}>
                                                <i className={iconClass.class}></i> 
                                                {file.name} 
                                                <i className="fa fa-times ml-1 text-danger-notes" id={index} onClick={handelRemoveFile}></i>
                                            </span>
                                        )                                        
                                    })
                                }                                
                            </div>
                            <div className="col-md-1">
                                <button type="submit" className="btn btn-xs pull-right">
                                    <i className="fa fa-paper-plane-o text-primary"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NotesUpload;