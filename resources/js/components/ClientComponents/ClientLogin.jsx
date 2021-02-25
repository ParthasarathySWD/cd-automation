import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {Form,FormLabel, FormGroup, FormControl, ControlLabel, Col, Button} from 'react-bootstrap';
class ClientLogin extends React.Component {
    render() {
        const mystyle = {
          backgroundColor: "DodgerBlue",
          padding: "10px",
          fontFamily: "Arial",
          height: "1300px",
        };
      return (
        <>
        <div className="col-12">
       <div className="row">
           <div className="col-6">
               <h1 style={mystyle}></h1>
               </div>
               <div className="col-6">
                   <h1>vgdg</h1>
               </div>
           </div>
       </div>
    </>
      );
   }
}
export default ClientLogin;