import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

// import AllUsers from "./components/UsersComponents/AllUsers";
import AddUser from "./components/UsersComponents/AddUsers";
import EditUser from "./components/UsersComponents/EditUsers";
import OrderEntry from "./components/OrderEntryComponents/OrderEntry";
import Login from "./Login";
import ForgotPassword from './components/LoginComponents/ForgotPassword';
import MyOrder from './components/MyOrderPageComponents/MyOrder';
import Dashboard from './components/DashboardComponents/Dashboard';
import Members from './components/UsersComponents/Members';
import AddClient from './components/ClientComponents/AddClient';
import ClientList from './components/ClientComponents/ClientList';
import ViewClient from './components/ClientComponents/ViewClient';
import EditClient from './components/ClientComponents/EditClient';
import CDDetails from './Views/CDDetails';
import OrderDocument from './components/OrderSummary/OrderDocuments';

// import Admins from './components/UsersComponents/Admins';


class Routes extends React.Component
{
    render()
    {
        return (
            <Switch>
                <Route exact path='/' component={Dashboard} />
                {/* <Route exact path='/alluser' component={AllUsers} /> */}
                <Route exact path='/alluser' component={Members} />
                {/* <Route exact path='/admins' component={Admins} /> */}

                <Route exact path='/adduser' component={AddUser} />
                <Route exact path='/edituser/:id' component={EditUser} />
                <Route exact path='/orderentry' component={OrderEntry} />
                <Route exact path='/forgotpassword' component={ForgotPassword} />
                <Route exact path='/myorders' component={MyOrder}/>
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/allclients' component={ClientList} />
                <Route exact path='/viewclient/:id' component={ViewClient} />
                <Route exact path='/addclient' component={AddClient} />
                <Route exact path='/editclient/:id' component={EditClient} />
                <Route exact path='/cddetails' component={CDDetails} />
                <Route exact path='/orderdoc' component={OrderDocument} />
            </Switch>
        )
    }
}
export default Routes;
