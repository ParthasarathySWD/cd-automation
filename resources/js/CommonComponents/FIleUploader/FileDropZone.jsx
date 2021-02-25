import React from "react";

import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
import './style.css'


const SimpleDropZone = (props) => {

  const handleChangeStatus = ({ meta, file }, status) => { console.log("test", status, meta, file) }

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

  const removeFile = file => () => {
    const newFiles = [...myFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(newFiles)
  }

  const Preview = ({ meta }) => {
    const { name, percent, status, file } = meta
    return (
      <tr>
        <td>{name}</td>
        <td>
          <select>
            <option></option>
            <option>Prelim</option>
            <option>Closing</option>
            <option>Mortgage</option>
            <option>Title</option>
          </select>
        </td>

        <td>
          <i className="fa fa-trash-o text-danger" aria-hidden="true" onClick={removeFile(file)}></i>            
        </td>
      </tr>
             
    );
  }

  const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }) => {
    return (
      <div>
      <div {...dropzoneProps}>
      {files.length < maxFiles && input}
      </div>
      {
        (previews != '') ? 
      
        <div className="row">
          <div className="col-md-12">
            <div className="table">
              <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Document Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {previews}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        : '' }

      {files.length > 0 && submitButton}
      </div>
      )
  }

  return (
      <Dropzone
        onChangeStatus={handleChangeStatus}
        InputComponent={InputChooseFile}
        getFilesFromEvent={getFilesFromEvent}
        classNames
        multiple={props.multiple}
        maxFiles={props.maxfiles}
        accept=".pdf"
        LayoutComponent={Layout}
        PreviewComponent={Preview}
        canRemove={true}
      />
    );
  };

  export default SimpleDropZone;