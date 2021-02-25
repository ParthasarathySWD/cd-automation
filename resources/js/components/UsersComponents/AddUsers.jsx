import React from 'react';

class AddUser extends React.Component{
	componentDidMount(){
    }
    constructor(props) {
        super(props);
        this.state = {
            
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            Email: '',
            UserName: '',
            Password: '',
            ConfirmPassword: '',
            Role: '',
            errors: {}

        }
        this.reset= this.reset.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }


    handleValidation(){
        let errors = {};
        let formIsValid = true;

        // FirstName
        if(!this.state.FirstName){
            formIsValid = false;
            errors["FirstName"] = "Field is Required";
         }
         else{
            if(typeof this.state.FirstName !== "undefined"){
                if(!this.state.FirstName.match(/^[a-zA-Z]+$/)){
                   formIsValid = false;
                   errors["FirstName"] = "Only letters";
                }        
             }
         }
         

        //  LastName
         if(!this.state.LastName){
            formIsValid = false;
            errors["LastName"] = "Field is Required";
         }
         else{
            if(typeof this.state.LastName !== "undefined"){
                if(!this.state.LastName.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors["LastName"] = "Only letters";
                }        
            }
         }

        //  PhoneNumber
         if(!this.state.PhoneNumber){
            formIsValid = false;
            errors["PhoneNumber"] = "Field is Required";
         }
         else{
            if(typeof this.state.PhoneNumber !== "undefined"){
                if(!this.state.PhoneNumber.match(/^[0-9]{1,10}$/)){
                   formIsValid = false;
                   errors["PhoneNumber"] = "Invalid PhoneNumber";
                }        
             }
         }

         //Email
         if(!this.state.Email){
            formIsValid = false;
            errors["Email"] = "Field is Required";
         }
         else{
            if(typeof this.state.Email !== "undefined"){
                let lastAtPos = this.state.Email.lastIndexOf('@');
                let lastDotPos = this.state.Email.lastIndexOf('.');
    
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.Email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.Email.length - lastDotPos) > 2)) {
                   formIsValid = false;
                   errors["Email"] = "Email is not valid";
                 }
            }
         }

        //  UserName
        if(!this.state.UserName){
            formIsValid = false;
            errors["UserName"] = "Field is Required";
         }
        //  else{
        //     if(typeof this.state.UserName !== "undefined"){
        //         if(!this.state.UserName.match(/^[a-zA-Z]+$/)){
        //            formIsValid = false;
        //            errors["UserName"] = "Only letters";
        //         }        
        //      }
        //  }

         //  Password
        if(!this.state.Password){
            formIsValid = false;
            errors["Password"] = "Field is Required";
         }
         else{
            if(typeof this.state.Password !== "undefined"){
                if(!this.state.Password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$_!%*?&])[A-Za-z\d@#$!_%*?&]{8,}$/)){
                   formIsValid = false;
                   errors["Password"] = "Required minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
                }        
             }
         }

        //  ConfirmPassword
        if(!this.state.ConfirmPassword){
            formIsValid = false;
            errors["ConfirmPassword"] = "Field is Required";
         }
         else{
            if(this.state.ConfirmPassword !== this.state.Password){
                
                   formIsValid = false;
                   errors["ConfirmPassword"] = "Password does not match";
                        
             }
         }
         
        //  Role
         if(!this.state.Role){
            formIsValid = false;
            errors["Role"] = "Field is Required";
         }


        this.setState({errors: errors});
        return formIsValid;

    }

    onChangeHandler(e){
        
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onClickHandler(){

        if(this.handleValidation()){
            
            const data = new FormData();

            data.append('FirstName', this.state.FirstName);
            data.append('LastName', this.state.LastName);
            data.append('PhoneNumber', this.state.PhoneNumber);
            data.append('Email', this.state.Email);
            data.append('UserName',this.state.UserName);
            data.append('Password',this.state.Password);
            data.append('ConfirmPassword',this.state.ConfirmPassword);
            data.append('Role',this.state.Role);

            axios.post("users", data, {
            })
                .then(res => {
                    alert(res.data.message);
                    this.setState({
                        FirstName: '',
                        LastName: '',
                        PhoneNumber: '',
                        Email: '',
                        UserName: '',
                        Password: '',
                        ConfirmPassword: '',
                        Role: '',
                        errors: {}
                    });
                })

         }else{
            alert("Form has errors.")
         }

        
    };

    reset(){
        this.setState({
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            Email: '',
            UserName: '',
            Password: '',
            ConfirmPassword: '',
            Role: '',
            errors: {}
        });
    };
    
	render() {
		return (
			<div>
				<div className="block-header">
					<div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h1>Add User</h1>
                            <span></span>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 text-lg-right">
                            <div className="d-flex align-items-center justify-content-lg-end mt-4 mt-lg-0 flex-wrap vivify pullUp delay-550">
                                <div className="mb-3 mb-xl-0">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
				<div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>First Name <span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" name="FirstName"  onChange={this.onChangeHandler} value={this.state.FirstName}/>
                                            {this.state.errors["FirstName"] ? <span style={{color: "#ff3547"}}>{this.state.errors["FirstName"]}</span> : ""}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Last Name <span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" name="LastName" onChange={this.onChangeHandler} value={this.state.LastName}/>
                                            <span style={{color: "red"}}>{this.state.errors["LastName"]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    {/* <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Date of Birth <span className="text-danger">*</span></label>
                                            <input type="text" data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder=""/>
                                        </div>
                                    </div> */}
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Phone <span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" name="PhoneNumber" onChange={this.onChangeHandler} value={this.state.PhoneNumber}/>
                                            <span style={{color: "red"}}>{this.state.errors["PhoneNumber"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Enter Your Email <span className="text-danger">*</span></label>
                                            <input className="form-control" type="email" name="Email" onChange={this.onChangeHandler} value={this.state.Email}/>
                                            <span style={{color: "red"}}>{this.state.errors["Email"]}</span>
                                        </div>
                                    </div>
                                    
                                    {/* <div className="col-lg-12">
                                        <input type="file" className="dropify"/>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group mt-3">
                                            <textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
                                        </div>
                                    </div> */}
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>User Name <span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" name="UserName" onChange={this.onChangeHandler} value={this.state.UserName}/>
                                            <span style={{color: "red"}}>{this.state.errors["UserName"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Password <span className="text-danger">*</span></label>
                                            <input className="form-control" type="password" name="Password" onChange={this.onChangeHandler} value={this.state.Password}/>
                                            <span style={{color: "red"}}>{this.state.errors["Password"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Confirm Password <span className="text-danger">*</span></label>
                                            <input className="form-control" type="password" name="ConfirmPassword" onChange={this.onChangeHandler} value={this.state.ConfirmPassword} />
                                            <span style={{color: "red"}}>{this.state.errors["ConfirmPassword"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Role <span className="text-danger">*</span></label>
                                            <select name="Role" id="" className="form-control show-tick" onChange={this.onChangeHandler} >
                                                <option value="">-Select-</option>
                                                <option value="Admin">Admin</option>
                                                <option value="Customer">Customer</option>
                                                <option value="Lender">Lender</option>
                                            </select>
                                            <span style={{color: "red"}}>{this.state.errors["Role"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <button type="submit" className="btn btn-sm btn-primary" onClick={this.onClickHandler} >Submit</button>
                                        <button type="submit" className="btn  btn-sm btn-danger" onClick={this.reset} >Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h3>Account Information</h3>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    
                                    
                                    
                                    <div className="col-sm-12">
                                        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                                        <button type="submit" className="btn  btn-sm btn-danger">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h3>Doctor Social Media Info</h3>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-md-6">
                                        <div className="form-group c_form_group">
                                            <label>Facebook</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-facebook"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group c_form_group">
                                            <label>Twitter</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-twitter"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group c_form_group">
                                            <label>Linkedin</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-linkedin"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group c_form_group">
                                            <label>Instagram</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-instagram"></i></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                                        <button type="submit" className="btn  btn-sm btn-danger">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
			</div>
		);
	}
}

export default AddUser;