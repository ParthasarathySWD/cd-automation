import React, { useState } from "react";
import FileUpload from "./file-upload.component";

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
            <FileUpload
              accept=".pdf"
              label=""
              multiple
              updateFilesCb={updateUploadedFiles}
              DocumentTypes ={OrderDocumentTypes}
            />
        </div>
      );
}

export default FileDrop;
