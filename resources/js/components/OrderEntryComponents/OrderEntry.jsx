import React, {
    useRef,
    useMemo,
    useEffect,
    useState,
    useCallback
  } from 'react';
import {useDropzone} from 'react-dropzone';

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
    margin:'2rem'
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
    } = useDropzone();

    const removeFile = (file) => () => {       
        console.log('removeFile...')        
        acceptedFiles.splice(acceptedFiles.indexOf(file), 1)
        console.log(acceptedFiles)
    }

    const files = acceptedFiles.map((file, i) => (
        <tr key={file.path} id="row_{i}">
            <td>{file.path}</td>
            <td>{file.size} bytes</td>
            <td className="text-center"><i className="fa fa-trash-o text-danger" aria-hidden="true" onClick={removeFile(file)}></i></td>
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
      <div className="container">
        <div {...getRootProps({style})}>
          <input name="OrderFile[]" {...getInputProps()} />
          <p>Drag 'n' drop your files here, or click to select files</p>
        </div>
        <aside>
            {files.length > 0 ? <h5>Selected Files</h5> : <h5></h5>}
            {files.length > 0 ?
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                    <table className="table table-bordered table-striped mb-0">
                        <thead>
                            <tr>
                                    <th>File Name</th>
                                    <th>File Size</th>
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
    );
  }

class OrderEntry extends React.Component{
	componentDidMount(){
    }
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
                                    <div className="col-sm-6">
                                        <div className="row clearfix scroll-div">
                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>Loan Number <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>Loan Type <span className="text-danger">*</span></label>
                                                    <select className="form-control show-tick">
                                                        <option defaultValue="">- Loan Type -</option>
                                                        <option defaultValue="10">Closing</option>
                                                        <option defaultValue="20">Title</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>Closing Date <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>Settlement Date <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>Disbursement Date <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>Property Address1 <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""/>
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>Property Address2 <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>Zip Code <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>City <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>County <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group c_form_group">
                                                    <label>State <span className="text-danger">*</span></label>
                                                    <input className="form-control" type="text" defaultValue=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <StyledDropzone />
                                            </div>
                                        </div>  
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="pull-right">
                                                    <button type="submit" className="btn btn-sm btn-primary">Submit</button>
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