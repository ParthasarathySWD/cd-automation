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
        {/* <InputLabel>{label}</InputLabel> */}
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
        {/* <span>To Upload</span> */}
        <PreviewList>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            let isPdfFile = file.type.split("/")[0] === "pdf";
            return (
              <PreviewContainer key={fileName}>
                <div>
                  {/* {isPdfFile && (
                    <ImagePreview
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )} */}
                  <FileMetaData isPdfFile={isPdfFile}>
                    {/* <span>{file.name}</span>
                    <aside>
                      <span>{convertBytesToKB(file.size)} kb</span>
                      <RemoveFileIcon
                        className="fa fa-trash-o"
                        onClick={() => removeFile(fileName)}
                      />
                    </aside> */}

                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="../../../../images/pdf.png" className="img-thumbnail rounded float-left" alt="..."/>
                                    <div className="file_name">
                                        {file.name}
                                        <h6 className="file_status">

                                        </h6>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="file_doc_type">
                                        <div className="form-group">
                                            <select className="form-control show-tick" name="DocumentTypeUID[]" id={file.name} onChange={DocTypeChange}>
                                                <option value=""></option>
                                                <option value="1">Prelim</option>
                                                <option value="2">Closing</option>
                                                <option value="3">Mortgage</option>
                                            </select>
                                            <label>Doc Type <span className="text-danger"></span></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <i className="fa fa-trash-o file_action" onClick={() => removeFile(fileName)}></i>
                                </div>


                            </div>
                        </div>
                    </div>
                  </FileMetaData>
                </div>
              </PreviewContainer>
            );
          })}
        </PreviewList>
      </FilePreviewContainer>
    </>
  );
};

export default FileUpload;
