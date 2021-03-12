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
            <div className="grid grid-cols-12 gap-3">

                <div className="col-span-12 border-b border-gray-200">                         
                <div className="nav nav-tabs flex-col sm:flex-row justify-center lg:justify-start" role="tablist"> 
                    <a data-toggle="tab" data-target="#PageOne" className="py-4 sm:mr-8 active" role="tab" aria-selected="true">Page 1</a> 
                    <a data-toggle="tab" data-target="#PageTow" className="py-4 sm:mr-8" role="tab" aria-selected="false">Page 2</a> 
                    <a data-toggle="tab" data-target="#PageThree" className="py-4 sm:mr-8" role="tab" aria-selected="false">Page 3</a> 
                    <a data-toggle="tab" data-target="#PageFour" className="py-4 sm:mr-8" role="tab" aria-selected="false">Page 4</a> 
                    <a data-toggle="tab" data-target="#PageFive" className="py-4 sm:mr-8" role="tab" aria-selected="false">Page 5</a> 
                </div>
                </div>
                <div className="col-span-12"> 
                <div className="intro-y tab-content mt-2">
                    <div id="PageOne" className="tab-pane active" role="tabpanel">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12">
                                <PageOne />
                            </div>
                        </div>
                    </div> 

                    <div id="PageTow" className="tab-pane" role="tabpanel">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12">
                                <PageTwo />
                            </div>
                        </div>
                    </div>  

                    <div id="PageThree" className="tab-pane" role="tabpanel">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12">
                                <PageThree />
                            </div>
                        </div>
                    </div> 

                    <div id="PageFour" className="tab-pane" role="tabpanel">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12">
                                <PageFour />
                            </div>
                        </div>
                    </div>                        
                    <div id="PageFive" className="tab-pane" role="tabpanel">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12">
                                <PageFive />
                            </div>
                        </div>
                    </div>                        
                </div>                        
                </div>
            </div>
        </>
    );
}
export default CDPages;
