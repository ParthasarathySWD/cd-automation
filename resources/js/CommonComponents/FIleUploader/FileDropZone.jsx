import React from "react";

// import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
import './style.css'


const DropZone = (props) => {

    const getUploadParams = ({ file, meta }) => {
        console.log(file);
        return { url: 'https://httpbin.org/post' }
    }

    const handleChangeStatus = ({ meta, file }, status) => {
        console.log(status, meta, file);
    }

    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

      const remove = file => {
    // const newFiles = [...files];     // make a var for the new array
    // files.splice(file, 1);        // remove the file from the array
  };

    const getFilesFromEvent = e => {
        return new Promise(resolve => {
            getDroppedOrSelectedFiles(e).then(chosenFiles => {
                resolve(chosenFiles.map(f => f.fileObject))
            })
        })
    }
    const InputChooseFile = ({ accept, onFiles, files, getFilesFromEvent }) => {
    const text = files.length >= 1 ? 'Upload Supporting Documents' : props.text;
    const btnClass = files.length >= 1 ? "btn btn-sm btn-outline-success" : "btn btn-sm btn-outline-primary";

    const buttonStyle = {
      margin: '40px'
    }

    return (
      <label style={buttonStyle} className={btnClass}>
      {text}
      <input
      style={{ display: 'none' }}
      type="file"
      accept={accept}
      multiple
      onChange={e => {
        getFilesFromEvent(e).then(chosenFiles => {
            onFiles(chosenFiles)
        })
        }}
      />
      </label>
      )
  }

  const Preview = ({ meta }) => {
      console.log('file', meta);
    const { name, percent, status, file } = meta
    return (

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="../../../../images/pdf.png" className="img-thumbnail rounded float-left" alt="..."/>
                            <div className="file_name">
                                {name}
                                <h6 className="file_status">

                                </h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="file_doc_type">
                                <div className="form-group">
                                    <label>Document Type <span className="text-danger"></span></label>
                                    <select className="form-control show-tick">
                                        <option value=""></option>
                                        <option value="10">Prelim</option>
                                        <option value="20">Closing</option>
                                        <option value="4">Mortgage</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <i className="fa fa-trash-o text-danger file_action" aria-hidden="true" onClick={remove(1)}></i>
                        </div>


                    </div>
                </div>
            </div>


    );
  }

  const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
    return (
      <div>
      <div {...dropzoneProps}>
      {files.length < maxFiles && input}
      </div>
      {(previews != '') ? previews : '' }

      {files.length > 0 && submitButton}
      </div>
      )
  }

  return (
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        InputComponent={InputChooseFile}
        getFilesFromEvent={getFilesFromEvent}
        classNames
        multiple={props.multiple}
        maxFiles={props.maxfiles}
        accept=".pdf"
        LayoutComponent={Layout}
        PreviewComponent={Preview}
        onSubmit={handleSubmit}
        canRemove={true}
      />
    );
  };

  export default DropZone;
