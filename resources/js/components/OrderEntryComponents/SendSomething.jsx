import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import axios from 'axios';

class SendSomething extends Component {

    constructor(props) {
        super(props);

        this.onDropSupportingFile = (SupportingFile) => {
            this.setState({SupportingFile})
        };
        this.onDropPrelimFile = (PrelimFile) => {
            this.setState({PrelimFile})
        };

        this.state = {
            PrelimFile: '',
            LoanNumber: '',
            SupportingFile: [],
            DocumentTypeUID: []
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onChangeHandler(e)  {
        this.setState(
            { LoanNumber: e.target.value }
        )
    };

    onClickHandler() {
        const data = new FormData();

        data.append('LoanNumber', this.state.LoanNumber);
        this.state.SupportingFile.forEach(file => {
            data.append('SupportingFile', file, file.name);
        });
        this.state.PrelimFile(file => {
            data.append('PrelimFile', file, file.name);
        });

        axios.post("/api/endpoint", data, {
        })
            .then(res => {
                alert(res.data.message);

                this.setState({
                    LoanNumber: '',
                    SupportingFile: [],
                    PrelimFile:''
                });
            })
    };

    render() {

        const files = this.state.SupportingFile.map(file => (
            <li key={file.name}>
                {file.name} - {file.size} bytes
            </li>
        ));
        const PrelimFile = this.state.PrelimFile;

        return (

            <div>

                <form>

                    <div className="form-group">
                        <label htmlFor="LoanNumber">LoanNumber</label>
                        <input type="text" name="LoanNumber" value={this.state.LoanNumber} onChange={this.onChangeHandler} className="form-control" id="LoanNumber"  />
                    </div>

                    <div>
                        <Dropzone
                            onDrop={this.onDropSupportingFile}
                            accept=".pdf"
                            minSize={0}
                            maxSize={5242880}
                            multiple
                        >
                            {({getRootProps, getInputProps}) => (
                                <section className="container">
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} />
                                        <p>Drag n Drop SupportingFile</p>
                                    </div>
                                    <aside>
                                        <ul>{files}</ul>
                                    </aside>
                                </section>
                            )}
                        </Dropzone>
                    </div>

                    <div>
                        <Dropzone
                            onDrop={this.onDropPrelimFile}
                            accept=".pdf"
                            minSize={0}
                            maxSize={5242880}
                        >
                            {({getRootProps, getInputProps}) => (
                                <section className="container">
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()}/>
                                        <p>Drag n Drop PrelimFile</p>
                                    </div>
                                    <aside>
                                        <ul>{PrelimFile}</ul>
                                    </aside>
                                </section>
                            )}
                        </Dropzone>
                    </div>

                    <button type="button" onClick={this.onClickHandler} className="btn btn-primary">Submit</button>
                </form>

            </div>

        );
    }
}

export default SendSomething;