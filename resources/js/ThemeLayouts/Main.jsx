import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import MobileMenu from './views/MobileMenu';
import TopBar from './views/TopBar';
import TopMenu from './views/TopMenu';
import Routes from './Routes';
import { SignIn, setUserDetails } from "./store/action";
import Loader from "../components/Loader";
import { fetchProfileData } from "../ThemeLayouts/repository/App";
function Main(props) {

    const [user, setUser] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        if (user && typeof user == "object" && Object.keys(user).length > 0) {
            // ref.current.continuousStart();
            // ref.current.complete();
            dispatch(setUserDetails(user));
        }
    }, [user]);

    useEffect(() => {
        const promiseResource = fetchProfileData();
        promiseResource.then((res) => {
            setUser(res.user.data);
        });
    }, []);

    if (Object.keys(user).length == 0) {
        return <Loader />;
    } else {
        return (
            <Router>
                <div>
                    <MobileMenu />
                    <TopBar />
                    <TopMenu />

                    {/** BEGIN: Content **/}
                    <div class="wrapper wrapper--top-nav">
                        <div class="wrapper-box">
                            {/** BEGIN: Content **/}
                            <div class="content">
                                <Routes />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

}
export default Main;