import React, { Component } from "react";
import axios from 'axios';
import '../../CommonComponents/FIleUploader/style.css';

import FileDroper from '../../CommonComponents/FIleUploader/FileDropZone';

class SendSomething extends Component {

    constructor(props) {
        super(props);

        this.state = {
            PrelimFile: '',
            LoanNumber: '',
            SupportingFile: [],
            DocumentTypeUID: []
        };
    }

    render() {

        return(
            <div className="row clearfix">
                <div className="col-sm-6 uploader">
                    <h6>
                        Upload Documnents
                    </h6>
                    <FileDroper text="Choose Prelim files to upload" multiple={false} maxfiles={20}/>

                    <div id="Preview">
                    </div>

                </div>
            </div> 
        );
    }
}

export default SendSomething;