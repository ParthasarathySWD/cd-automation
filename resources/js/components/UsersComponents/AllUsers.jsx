import React from 'react';

class AllUsers extends React.Component{
	render() {
		return (
			<div>
				<div className="block-header">
					<div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h1>All Users</h1>
                            <span></span>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 text-lg-right">
                            <div className="d-flex align-items-center justify-content-lg-end mt-4 mt-lg-0 flex-wrap vivify pullUp delay-550">
                                <div className="mb-3 mb-xl-0">
                                    <div className="btn-group">
	                                    <button type="button" className="btn btn-primary btn-sm" >
	                                    	Action
	                                    </button>	                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
				<div className="row clearfix">
					<div>
						<h5>Tables</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default AllUsers;