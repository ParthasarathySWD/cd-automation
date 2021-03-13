import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

// import AllUsers from "./components/UsersComponents/AllUsers";
// import AddUser from "./components/UsersComponents/AddUsers";
// import EditUser from "./components/UsersComponents/EditUsers";
// import OrderEntry from "./components/OrderEntryComponents/OrderEntry";
// import Login from "./Login";
// import ForgotPassword from './components/LoginComponents/ForgotPassword';
// import MyOrder from './components/MyOrderPageComponents/MyOrder';
// import Dashboard from './components/DashboardComponents/Dashboard';
// import Members from './components/UsersComponents/Members';
// import AddClient from './components/ClientComponents/AddClient';
// import ClientsList from './components/ClientComponents/ClientList';
// import ViewClient from './components/ClientComponents/ViewClient';
// import EditClient from './components/ClientComponents/EditClient';
// import CDDetails from './Views/CDDetails';
// import CDsecondpage from './Views/CDsecondpage';
// import CDthirdpage from './Views/CDthirdpage';
// import CDfifthpage from './Views/CDfifthpage';
// import CDfourthpage from './Views/CDfourthpage';
// import OrderDocument from './components/OrderSummary/OrderDocuments';
// import OrderNote from './components/OrderSummary/OrderNotes';
// import OrderSummary from './components/OrderSummary/OrderSummary';
// import UserView from './components/UsersComponents/UserView';


// import Admins from './components/UsersComponents/Admins';


import Login from '../ThemeReact/views/Login/Login';
import Dashboard from '../ThemeReact/views/Dashboard/Dashboard';
// import ClientList from '../ThemeReact/ClientComponents/ClientList';
// import AddClient from '../ThemeReact/ClientComponents/AddClient';
import UsersList from '../ThemeReact/views/User/UsersList';
import AddUser from '../ThemeReact/views/User/AddUser';
import OrderEntry from '../ThemeReact/views/OrderEntry/OrderEntry';
// import MyOrders from '../ThemeReact/views/MyOrders/MyOrders';
import MyOrder from '../ThemeReact/views/MyOrders/MyOrder';
import CDDetails from '../ThemeReact/views/CD-Details/CDDetails';
import Form from '../ThemeReact/views/Form/Form';
import EditUser from '../ThemeReact/views/User/EditUsers';
import UserView from '../ThemeReact/views/User/UserView';
import ClientList from '../ThemeReact/views/Clients/ClientsList';
import AddClient from '../ThemeReact/views/Clients/AddClient';
import EditClient from '../ThemeReact/views/Clients/EditClient';
import Profile from '../ThemeReact/views/Profile/Profile';
import Summary from '../ThemeReact/views/OrderSummary/OrderSummary';

class Routes extends React.Component
{
    render()
    {
        return (
            <Switch>

                <Route exact path='/login' component={Login} />
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/allclients' component={ClientList} />
                <Route exact path='/addclient' component={AddClient} />
                <Route exact path='/editclient/:id' component={EditClient} />
                <Route exact path='/allusers' component={UsersList} /> 
                <Route exact path='/adduser' component={AddUser} />
                <Route exact path='/orderentry' component={OrderEntry} />
                <Route exact path='/' component={OrderEntry} />
                <Route exact path='/myorders' component={MyOrder} />
                <Route exact path='/summary/:id' component={Summary} />
                <Route exact path='/form' component={Form} />
                <Route exact path='/edituser/:id' component={EditUser} />
                <Route exact path='/userview/:id' component={UserView} />
                <Route exact path='/profile' component={Profile} />

                {/*<Route exact path='/' component={Dashboard} />
                 <Route exact path='/alluser' component={AllUsers} /> 
                <Route exact path='/alluser' component={Members} />
                {/* <Route exact path='/admins' component={Admins} /> 

                <Route exact path='/adduser' component={AddUser} />
                <Route exact path='/edituser/:id' component={EditUser} />
                <Route exact path='/userview/:id' component={UserView} />
                <Route exact path='/orderentry' component={OrderEntry} />
                <Route exact path='/forgotpassword' component={ForgotPassword} />
                <Route exact path='/myorders' component={MyOrder}/>
                <Route exact path='/dashboard' component={Dashboard} />
                <Route exact path='/allclients' component={ClientList} />
                <Route exact path='/viewclient/:id' component={ViewClient} />
                <Route exact path='/addclient' component={AddClient} />
                <Route exact path='/editclient/:id' component={EditClient} />
                <Route exact path='/cddetails' component={CDDetails} />
                <Route exact path='/cdsecondpage' component={CDsecondpage} />
                <Route exact path='/cdthirdpage' component={CDthirdpage} />
                <Route exact path='/cdfourthpage' component={CDfourthpage} />
                <Route exact path='/cdfifthpage' component={CDfifthpage} />
                <Route exact path='/orderdoc' component={OrderDocument} />
                <Route exact path='/ordernote' component={OrderNote} />
                <Route exact path='/summary/:id' component={OrderSummary} />*/}
            </Switch>
        )
    }
}
export default Routes;
