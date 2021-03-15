import React, { useState, useEffect } from 'react';


import PageOne from './CDDetails';
import PageTwo from './CDsecondpage';
import PageThree from './CDthirdpage';
import PageFour from './CDfourthpage';
import PageFive from './CDfifthpage';
// import './style.css';

function CDPages(props) {

    const [tabIndex , setTabIndex] = useState(1);

    const handleTabChange = (e) => {

    	let target = e.target.dataset.target;
    	let index = e.target.dataset.index;

    	setTabIndex(index);

    	/* document.querySelectorAll('.page-tab-panes .tab-pane').classList.remove('active');
    	document.querySelector('.page-tab-panes .tab-pane:nth-child('+index+')').classList.add('active'); */

    }

    return(
        <>
            <div className="grid grid-cols-12 gap-3 next">

                <div className="col-span-12 border-b border-gray-200">                         
                <div className="nav nav-tabs page-tabs flex-col sm:flex-row justify-center lg:justify-start" role="tablist"> 
                    <a onClick={handleTabChange} data-target="#PageOne" data-index="1" className={"py-4 sm:mr-8 " + (tabIndex == 1 ? 'active' : '')} role="tab" aria-selected="true">Page 1</a> 
                    <a onClick={handleTabChange} data-target="#PageTow" data-index="2" className={"py-4 sm:mr-8 " + (tabIndex == 2 ? 'active' : '')} role="tab" aria-selected="false">Page 2</a> 
                    <a onClick={handleTabChange} data-target="#PageThree" data-index="3" className={"py-4 sm:mr-8 " + (tabIndex == 3 ? 'active' : '')} role="tab" aria-selected="false">Page 3</a> 
                    <a onClick={handleTabChange} data-target="#PageFour" data-index="4" className={"py-4 sm:mr-8 " + (tabIndex == 4 ? 'active' : '')} role="tab" aria-selected="false">Page 4</a> 
                    <a onClick={handleTabChange} data-target="#PageFive" data-index="5" className={"py-4 sm:mr-8 " + (tabIndex == 5 ? 'active' : '')} role="tab" aria-selected="false">Page 5</a> 
                </div>
                </div>
                <div className="col-span-12"> 
                <div className="intro-y tab-content mt-2 page-tab-panes">
                    <div id="PageOne" className={"tab-pane " + (tabIndex == 1 ? 'active' : '')} role="tabpanel">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12">
                                <PageOne changeTab={setTabIndex}/>
                            </div>
                        </div>
                    </div> 

                    <div id="PageTow" className={"tab-pane " + (tabIndex == 2 ? 'active' : '')} role="tabpanel">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12">
                                <PageTwo changeTab={setTabIndex}/>
                            </div>
                        </div>
                    </div>  

                    <div id="PageThree" className={"tab-pane " + (tabIndex == 3 ? 'active' : '')} role="tabpanel">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12">
                                <PageThree changeTab={setTabIndex}/>
                            </div>
                        </div>
                    </div> 

                    <div id="PageFour" className={"tab-pane " + (tabIndex == 4 ? 'active' : '')} role="tabpanel">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12">
                                <PageFour changeTab={setTabIndex}/>
                            </div>
                        </div>
                    </div>                        
                    <div id="PageFive" className={"tab-pane " + (tabIndex == 5 ? 'active' : '')} role="tabpanel">
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12">
                                <PageFive changeTab={setTabIndex} />
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
