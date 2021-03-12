import React, {useState} from 'react';

import PageOne from './CDDetails';
import PageTwo from './CDsecondpage';
import PageThree from './CDthirdpage';
import PageFour from './CDfourthpage';
import PageFive from './CDfifthpage';
// import './style.css';

function CDPages(props) {

    return(
        <>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                   
                    <div className="card"> 
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <ul className="nav nav-tabs3">
                                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#PageOne">Page 1</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#PageTwo">Page 2</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#PageThree">Page 3</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#PageFour">Page 4</a></li>                                   
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#PageFive">Page 5</a></li>                                   
                                </ul>
                            </div>
                        </div>

                        <div className="tab-content padding-0">
                            {/* Page One Tab */}
                            <div className="tab-pane active" id="PageOne">
                                <div className="row">
                                    <div className="col-md-12">
                                        <PageOne />
                                    </div>
                                </div>
                            </div>
                            {/* end */}

                            {/* Page Two Tab */}
                            <div className="tab-pane fade" id="PageTwo">
                                <div className="row">
                                    <div className="col-md-12">                               
                                        <PageTwo />
                                    </div>
                                </div>
                            </div>
                            {/* end */}

                            {/* Page Three Tab */}
                            <div className="tab-pane fade" id="PageThree">
                                <div className="row">
                                    <div className="col-md-12">
                                        <PageThree />
                                    </div>
                                </div>
                            </div>
                            {/* end */}
                            
                            {/* Page Four Tab */}
                            <div className="tab-pane fade" id="PageFour">
                               <div className="row">
                                   <div className="col-md-12">
                                        <PageFour />
                                   </div>
                               </div>
                            </div>
                            {/* end */}

                            {/* Page Five Tab */}
                            <div className="tab-pane fade" id="PageFive">
                               <div className="row">
                                   <div className="col-md-12">
                                        <PageFive />
                                   </div>
                               </div>
                            </div>
                            {/* end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CDPages;
