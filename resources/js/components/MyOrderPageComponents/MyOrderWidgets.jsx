import React, { useState, useEffect } from 'react';
import '../../../css/MyOrder/MyOrder.css';

function MyOrderWidgets()
{
   return( 
    <div className="row mb-2 status-row">
    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4 w-25">
        <div className="info">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-4 col-4 rone">
              <i className="fa fa-file-text fa-2x"></i>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty" style={{color:'#17a2b8'}}>
                <label className="status-text">Total</label>
                <h4>2,210</h4>
            </div>
          </div>
        </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4 w-25">
        <div className="info">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-4 col-4 rone rtwo">
              <i className="fa fa-address-card fa-2x"></i>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty" style={{color:'#ea6f6f'}}>
                <label className="status-text">In progress</label>
                <h4>107</h4>
            </div>
          </div>
        </div>
    </div>

    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4 w-25">
        <div className="info">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-4 col-4 rone rthree">
              <i className="fa fa-handshake-o fa-2x"></i>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty" style={{color:'#56b55a'}}>
                <label className="status-text">Completed</label>
                <h4>68</h4>
            </div>
          </div>
        </div>
    </div>
  </div>
)
}
export default MyOrderWidgets;