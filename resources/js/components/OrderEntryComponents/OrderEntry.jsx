import React, {
    useRef,
    useMemo,
    useEffect,
    useState,
    useCallback
  } from 'react';
import {useDropzone} from 'react-dropzone';
import SelectBox from '../../CommonComponents/MultiSelect';




const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5rem',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    margin:'1',
    height: 10
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

  
  
  function StyledDropzone(props) {
    const {
      getRootProps,
      getInputProps,
      isDragActive,
      isDragAccept,
      isDragReject,
      acceptedFiles
    } = useDropzone({
        accept: '.pdf'
    });

    const removeFile = (file, row) => () => {       
        console.log('removeFile...')        
        acceptedFiles.splice(acceptedFiles.indexOf(file), 1)
        console.log(acceptedFiles)
        $('#'+row).remove();
    }

    const files = acceptedFiles.map((file, i) => (
       
        <tr key={file.path} id={"Row_"+i}>
            <td>{file.path}</td>
            <td>
                <div className="form-group">
                    {/* <label>Document Type <span className="text-danger">*</span></label> */}
                    <select className="form-control show-tick"  >
                        <option defaultValue="">Document Type</option>
                        <option value="Prelim CD">Prelim CD</option>
                        <option value="Tax Certificate">Tax Certificate</option>
                        <option value="Pay Off">Pay Off</option>
                        <option value="Title Commitment">Title Commitment</option>
                        <option value="Closing Instruction">Closing Instruction</option>
                    </select>
                </div>
            </td>
            <td className="text-center"><i className="fa fa-trash-o text-danger" aria-hidden="true" onClick={removeFile(file, "Row_"+i)}></i></td>
        </tr>
    ));
  
    const style = useMemo(() => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }), [
      isDragActive,
      isDragReject,
      isDragAccept
    ]);
  
    return (
      <div className="container mt-2">
        <div className="row clearfix">
            <div className="col-sm-6">
                <div {...getRootProps({style})}>
                    <input name="OrderFile[]" {...getInputProps()} />
                    <p>Drag 'n' drop Prelim CD files</p>
                </div>
            </div>
            <div className="col-sm-6">
                <aside>
                    {files.length > 0 ? <h5 className="pt-2">Selected Files</h5> : <h5></h5>}
                    {files.length > 0 ?
                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table">
                                <thead>
                                    <tr>
                                            <th>File Name</th>
                                            <th>Document Types</th>
                                            <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {files}
                                </tbody>
                            </table> 
                        </div>
                            : ''}
                        
                            
                </aside>
            </div>
        </div>
        
      </div>
    );
  }

class OrderEntry extends React.Component{
	componentDidMount(){
    }
    constructor(props){
        super(props);
        this.state = { id: 1, PrelimFile: '', LoanNumber: '', DocumentTypeUID: [], SupportingFile: []};
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        
        this.onDrop = this.onDrop.bind(this);
    }
    

    onDrop(files,type)
    {
        if(type == "Prelim")
        {
            this.setState({
                PrelimFile: files
              });
        }
        else
        {
            this.setState({
                SupportingFile: files
            });
        }
    }
    // handleChange(e){
    //     // this.setState({ loanNumber: e.target.value , documentType: e.target.value });
    // }
    // handleSubmit(e){

    // }

	render() {
		return (
			<div>
				<div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h5>Order Entry</h5>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-sm-6 mb-4">
                                        <div className="row clearfix scroll-div">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Loan Number <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""  />
                                                </div>
                                            </div>
                                            <div>
                                                {/* <div className="col-md-12">
                                                <SelectBox />
                                            </div>
                                            <div className="col-sm-12">
                                                <StyledDropzone />
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="pull-right">
                                                    <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                                                    <button type="submit" className="btn  btn-sm btn-danger">Cancel</button>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Client <span className="text-danger">*</span></label>
                                                    <select className="form-control show-tick">
                                                        <option defaultValue=""></option>
                                                        <option defaultValue="10">Test</option>
                                                        <option defaultValue="20">Tech</option>
                                                    </select>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Lender <span className="text-danger">*</span></label>
                                                    <select className="form-control show-tick">
                                                        <option defaultValue=""></option>
                                                        <option defaultValue="10">Test Lender</option>
                                                        <option defaultValue="20">Title</option>
                                                    </select>
                                                </div>
                                            </div> */}
                                            {/* <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Loan Type <span className="text-danger">*</span></label>
                                                    <select className="form-control show-tick">
                                                        <option defaultValue=""></option>
                                                        <option defaultValue="10">Closing</option>
                                                        <option defaultValue="20">Title</option>
                                                    </select>
                                                </div>
                                            </div> */}

                                            {/* <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Closing Date <span className="text-danger">*</span></label>
                                                    {/* <input className="form-control" type="text" defaultValue="" /> */}
                                                    {/* <DatePicker selected={startdate} onChange={date => setStartDate(date)} /> */}
                                                    
                                                {/* </div>
                                            </div> */}
                                            </div>

                                        </div>
                                    </div>                                            
                                    <div className="col-sm-12">
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <StyledDropzone  />
                                                {this.props.StyledDropzone}
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <StyledDropzone  />
                                                
                                            </div>
                                        </div>   
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="pull-right">
                                                    <button type="submit" className="btn btn-sm btn-primary" >Submit</button>
                                                    <button type="submit" className="btn  btn-sm btn-danger">Cancel</button>
                                                </div>
                                            </div>
                                        </div>                                       
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
    
}

export default OrderEntry;