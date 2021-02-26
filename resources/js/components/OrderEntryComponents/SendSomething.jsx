import React, { Component } from "react";
import axios from 'axios';
import '../../CommonComponents/FIleUploader/style.css';

import FileDroper from '../../CommonComponents/FIleUploader/FileDropZone';

class SendSomething extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Files: [],
            LoanNumber: '',
            SupportingFile: [],
            DocumentTypeUID: []
        };

        this.test=this.test.bind(this)
    }

    test(file){
        this.setState({
            Files: [{file}],
        });
    }

    render() {

        return(
            <div className="row clearfix">
                <div className="col-sm-8 uploader">
                    <h6>
                        Upload Documnents
                    </h6>
                    <FileDroper text="Choose Prelim files to upload" multiple={false} maxfiles={20} state={this.state.PrelimFile} test={this.test}/>

                    <div id="Preview">
                    </div>

                </div>
            </div>
        );
    }
}

export default SendSomething;
