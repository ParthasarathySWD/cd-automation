import React, {Component, useState, useEffect, useRef} from 'react';
import './style.css'


function useFiles() {
	const [state, setstate] = useState();
	function withBlobs(files) {
		const blobs = [...files]
		.map(file => {
			if (file.type.includes("application/pdf")) {
				console.log(".pdf");
				file.preview = URL.createObjectURL(file);
				return file;
			}
			console.log("not .pdf");
			return null;
		})
		.filter(elem => elem !== null);

		setstate(blobs);
	}
	return [state, withBlobs];
}

function FileDrop(props){

	const [over, setover] = useState(false);
	const [files, setfiles] = useFiles();
	const $input = useRef(null);

	console.log(files);

	const text = 0 >= 1 ? 'Upload Supporting Documents' : props.text;
    const btnClass = 0 >= 1 ? "btn btn-sm btn-outline-success" : "btn btn-sm btn-outline-primary";

    const buttonStyle = {
      margin: '40px'
    }

    const handleDrop= (e) => {
    	e.preventDefault();
    	e.persist();
    	const dataTransfer = [...e.dataTransfer.files];
    	console.log(dataTransfer);
    }

    const handleDropOver=(e) => {
    	e.preventDefault();
    	setover(true);
    }

    const handleDragLeave=(e) => {
    	e.preventDefault();
    	setover(false);
    }

    const handleChange=(e) => {
    	setfiles(e.target.files);
    }

	return(
		<div className="file-container"
			onDrop={handleDrop}
			onDragOver={handleDropOver}
			onDragLeave={handleDragLeave}
		>
			<label style={buttonStyle} className={btnClass}>
		      {text}
		      <input
		      style={{ display: 'none' }}
		      type="file"
		      accept='.pdf'
		      multiple
		      onChange={handleChange}
		     />
		    </label>
		</div>
	);
}

export default FileDrop;