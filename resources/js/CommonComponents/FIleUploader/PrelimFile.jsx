import React, { useRef, useState } from "react";
import {
    FileUploadContainer,
    FormField,
    DragDropText,
    UploadFileBtn,
    FilePreviewContainer,
    ImagePreview,
    PreviewContainer,
    PreviewList,
    FileMetaData,
    RemoveFileIcon,
    InputLabel
  } from "./file-upload.styles";

  const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const FileUpload = ({
  label,
  updateFilesCb,
  DocumentTypes,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const callDocumentType = (types) => {
    DocumentTypes(types);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  const DocTypeChange = (event) => {
    let name = event.target.id;
    let value = event.target.value;
    const data = {
        'FileName': name,
        'DocumentTypeUID':value
    };
    callDocumentType(data)
  };

  const btntext = files.length >= 1 ? 'Supporting' : 'Prelim';

  return (
    <>
      <FileUploadContainer>        
        <DragDropText>Drag and drop your files anywhere or</DragDropText>
        <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
          <i className="fa fa-file-pdf-o" />
          <span> Upload {btntext} {otherProps.multiple ? "files" : "a file"}</span>
        </UploadFileBtn>
        <FormField
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </FileUploadContainer>
        <FilePreviewContainer>           
                    {/* <PreviewList> */}
                        {Object.keys(files).map((fileName, index) => {
                            let file = files[fileName];
                            let isPdfFile = file.type.split("/")[0] === "pdf";
                            return (
                            <PreviewContainer key={fileName}>
                                <div>
                                                           
                                <FileMetaData isPdfFile={isPdfFile}>
                                <table className="table table-borderless table-sm text-sm upload-table">
                                  <tbody>
                                    <tr>
                                        <td className="w-25"><i className="fa fa-file-pdf-o text-danger"></i></td>
                                        <td className="w-25">{file.name}</td>
                                        <td className="w-25">
                                            <select className="border form-control form-control-sm" name="DocumentTypeUID[]" id={file.name} onChange={DocTypeChange}>
                                                <option>Select</option>
                                                <option value="1">Prelim</option>
                                                <option value="2">Closing</option>
                                                <option value="3">Mortgage</option>
                                            </select>
                                        </td>
                                        <td className="text-center w-25">
                                            {/* <i title="View" className="fa fa-eye text-primary mr-3"></i> */}
                                            <i title="Remove" className="fa fa-trash-o text-danger" onClick={() => removeFile(fileName)}></i>
                                        </td>
                                    </tr>
                                    
                                    </tbody>
                                </table>
                                </FileMetaData>                                
                                </div>
                            </PreviewContainer>
                            );
                        })}
                    {/* </PreviewList> */}                
        </FilePreviewContainer>
    </>
  );
};

export default FileUpload;