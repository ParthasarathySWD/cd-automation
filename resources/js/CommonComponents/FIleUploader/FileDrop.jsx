import React, { useState } from "react";
import FileUpload from "./file-upload.component";
import PrelimUpload from "./PrelimFile";
import SupportUpload from "./SupportFile";

function FileDrop(props){
  
	const [OrderDocuments, setOrderDocments] = useState({
        OrderDocuments: []
      });

    const [OrderDocumentType, setOrderDocumentType] = useState({
        OrderDocumentType:[]
    });

    const OrderDocumentTypes = (types) => {
        setOrderDocumentType({ ...OrderDocumentType, OrderDocumentType: types });
        props.setTypes({...types, types});
    }

    const updateUploadedFiles = (files) => {
        setOrderDocments({ ...OrderDocuments, OrderDocuments: files });
        props.setFiles({...files, files});
    }
      return (
        <div>
            {
              (props.doctype == "PrelimFile") ? 
                <PrelimUpload
                 
                  label=""
                  updateFilesCb={updateUploadedFiles}
                  DocumentTypes ={OrderDocumentTypes}
                  uploadType={props.doctype}
                />
              :
                <SupportUpload
                 
                  label=""
                  multiple
                  updateFilesCb={updateUploadedFiles}
                  DocumentTypes ={OrderDocumentTypes}
                  uploadType={props.doctype}
                />
            }
        </div>
      );
}

export default FileDrop;
