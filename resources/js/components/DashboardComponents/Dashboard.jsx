import React, { Component } from 'react';
import Charts from './Charts';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <section>
                            <div className="row clearfix loanOrder">
                                
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="card todayOrder">
                                        <div className="body">
                                            {/* <div className="row clearfix"> */}
                                                <div className="col-12 card-content">
                                                    <h5 className="card-head">Today’s Order</h5>
                                                    <p className="card-info pt-20">0</p>
                                                </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="card openOrder">
                                        <div className="body">
                                            <div className="row clearfix">
                                                <div className="col-12 card-content">
                                                    <h5 className="card-head">Open</h5>
                                                    <p className="card-info pt-20">12</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="card pendingOrder">
                                        <div className="body">
                                            <div className="row clearfix">
                                                <div className="col-12 card-content">
                                                    <h5 className="card-head">In-Progress</h5>
                                                    <p className="card-info pt-20">23</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="card closedOrder">
                                        <div className="body">
                                            <div className="row clearfix">
                                                <div className="col-12 card-content">
                                                    <h5 className="card-head">Closed</h5>
                                                    <p className="card-info pt-20">5</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                </section>
                
                <section>

                    

                    {/*  */}

                    <div className="row clearfix row-deck">
                        {/* List */}
                        {/* <div className="col-lg-12 col-md-12">
                            

                            <div className="section_title">
                                <div className="mr-3 pl-2">
                                    <h3>User Activity</h3>
                                    <p>Statistics, Predictive Analytics Data Visualization, Big Data Analytics, etc.</p>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-lg-6 col-md-12">
                            <div className="card">
                                <div className="body">
                                    <ul className="userlist">
                                        <li>
                                            <div className="col-sm">
                                                        <div className="list list-row block">
                                                            <div className="list-item" data-id="19">
                                                                <div>
                                                                    <a href="#" data-abc="true"><span className="w-48 avatar gd-warning">S</span></a>
                                                                    <a href="#" className="item-author text-color pl-3" data-abc="true">Sam Kuran</a>
                                                                </div>
                                                                <div className="item-except text-muted text-sm h-1x pl-5">For what reason would it be advisable for me to think about business content?</div>
                                                                <div className="no-wrap">
                                                                    <div className="item-date text-muted text-sm d-none d-md-block text-right">19/02/2021</div>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                        </li>
                                        <li>
                                            <div className="col-sm">
                                                        <div className="list list-row block">
                                                            <div className="list-item" data-id="19">
                                                                <div>
                                                                    <a href="#" data-abc="true"><span className="w-48 avatar gd-warning">S</span></a>
                                                                    <a href="#" className="item-author text-color pl-3" data-abc="true">Sam Kuran</a>
                                                                </div>
                                                                <div className="item-except text-muted text-sm h-1x pl-5">For what reason would it be advisable for me to think about business content?</div>
                                                                <div className="no-wrap">
                                                                    <div className="item-date text-muted text-sm d-none d-md-block text-right">19/02/2021</div>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                        </li>
                                        <li>
                                            <div className="col-sm">
                                                        <div className="list list-row block">
                                                            <div className="list-item" data-id="19">
                                                                <div>
                                                                    <a href="#" data-abc="true"><span className="w-48 avatar gd-warning">S</span></a>
                                                                    <a href="#" className="item-author text-color pl-3" data-abc="true">Sam Kuran</a>
                                                                </div>
                                                                <div className="item-except text-muted text-sm h-1x pl-5">For what reason would it be advisable for me to think about business content?</div>
                                                                <div className="no-wrap">
                                                                    <div className="item-date text-muted text-sm d-none d-md-block text-right">19/02/2021</div>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                        </li>
                                        <li>
                                            <div className="col-sm">
                                                        <div className="list list-row block">
                                                            <div className="list-item" data-id="19">
                                                                <div>
                                                                    <a href="#" data-abc="true"><span className="w-48 avatar gd-warning">S</span></a>
                                                                    <a href="#" className="item-author text-color pl-3" data-abc="true">Sam Kuran</a>
                                                                </div>
                                                                <div className="item-except text-muted text-sm h-1x pl-5">For what reason would it be advisable for me to think about business content?</div>
                                                                <div className="no-wrap">
                                                                    <div className="item-date text-muted text-sm d-none d-md-block text-right">19/02/2021</div>
                                                                </div>
                                                            </div> 
                                                        </div>
                                                    </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-12 col-md-12">
                            {/* Chart */}
                            <div className="card">
                                <div className="body">
                                    <Charts/>
                                </div>
                            </div>

                        </div>
                    </div>



                </section>
                  
            </div>
        );
    }
}

export default Dashboard;