import React from 'react'
import AllUsersTab from './AllUsersTab';
class Admins extends React.Component {
    render() {
        return (
            <div>
                    

                    <div className="row clearfix mt-2">
                        <AllUsersTab/>
                    </div>

                    <div className="row clearfix pl-4">
                        <h4>Admins</h4>
                    </div>

                    <div className="card">
                        
                    </div>
            </div>
        );
    }
}
export default Admins