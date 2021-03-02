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

const PrelimUpload = ({
    label,
    updateFilesCb,
    DocumentTypes,
    uploadType,
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

    return (
    <>
        <FileUploadContainer>   
            <DragDropText>Drag and drop your files here</DragDropText>     
            <div className="row">
                <div className="col-md-6">
                    <ul>
                        <li>Upload a single prelim document. </li>
                        <li>Files should be PDF format. </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
                        <i className="fa fa-file-pdf-o" />
                        <span> Upload your file</span>
                    </UploadFileBtn>
                    <FormField
                        type="file"
                        ref={fileInputField}
                        onChange={handleNewFileUpload}
                        title=""
                        name={uploadType}
                        {...otherProps}
                    />
                </div>
            </div>
        </FileUploadContainer>
        <FilePreviewContainer>
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
                                <td className="w-40px">1</td>                            
                                <td className="w-25">
                                    <b className="table-bold form-control form-control-sm">Prelim</b>
                                    <input type="hidden" className="" name="DocumentTypeUID[]" value="1"/>
                                </td>
                                <td className="w-25">
                                    <i className="fa fa-file-pdf-o text-success mr-1"></i>
                                    {file.name}
                                </td>
                                <td className="w-25 text-center">                                
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
        </FilePreviewContainer>
    </>
    );
};

export default PrelimUpload;