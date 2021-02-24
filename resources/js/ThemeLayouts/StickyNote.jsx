import React from 'react';
import axios from "../repository/api";
class ThemeSetting extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			'NotesList': []
		}	
	}

	componentDidMount(){
		this.getNotesList();
	}

	getNotesList() {
		axios.get('users', {headers:{"Content-Type" : "application/json"}}).then((response) => {
			console.log(response);
		})
	}
	render(){
		return (
			<div>
				<a href="#!" className="right_note"><i className="fa fa-close"></i></a>
	            <div className="form-group c_form_group">
	                <label>Write your note here</label>
	                <div className="input-group">
	                    <input type="text" className="form-control" placeholder="Enter here..."/>
	                    <div className="input-group-append"><button className="btn btn-dark btn-sm" type="button">Add</button></div>
	                </div>
	            </div>
	            <div className="note-body">
	                <div className="card note-item">
	                    <div className="d-flex justify-content-between align-items-center">
	                        <div>
	                            <span className="font-10 text-muted">12 Apr 2020</span>
	                        </div>
	                        <div>
	                            <a href="#!" className="star"><i className="fa fa-star-o"></i></a>
	                            <a href="#!" className="delete"><i className="fa fa-trash"></i></a>
	                        </div>
	                    </div>
	                    <div className="note-detail">
	                        <span>Commit code on github branch development</span>
	                    </div>
	                </div>
	                <div className="card note-item">
	                    <div className="d-flex justify-content-between align-items-center">
	                        <div>
	                            <span className="font-10 text-muted">12 Apr 2020</span>
	                        </div>
	                        <div>
	                            <a href="#!" className="star active"><i className="fa fa-star-o"></i></a>
	                            <a href="#!" className="delete"><i className="fa fa-trash"></i></a>
	                        </div>
	                    </div>
	                    <div className="note-detail">
	                        <span>Meeting with client for new project.</span>
	                    </div>
	                </div>
	                <div className="card note-item">
	                    <div className="d-flex justify-content-between align-items-center">
	                        <div>
	                            <span className="font-10 text-muted">12 Apr 2020</span>
	                        </div>
	                        <div>
	                            <a href="#!" className="star"><i className="fa fa-star-o"></i></a>
	                            <a href="#!" className="delete"><i className="fa fa-trash"></i></a>
	                        </div>
	                    </div>
	                    <div className="note-detail">
	                        <span>making this the first true generator on the Internet</span>
	                    </div>
	                </div>
	                <div className="card note-item">
	                    <div className="d-flex justify-content-between align-items-center">
	                        <div>
	                            <span className="font-10 text-muted">12 Apr 2020</span>
	                        </div>
	                        <div>
	                            <a href="#!" className="star"><i className="fa fa-star-o"></i></a>
	                            <a href="#!" className="delete"><i className="fa fa-trash"></i></a>
	                        </div>
	                    </div>
	                    <div className="note-detail">
	                        <span>it look like readable English. Many desktop publishing</span>
	                    </div>
	                </div>
	            </div>

			</div>
		);
	}
}

export default ThemeSetting;