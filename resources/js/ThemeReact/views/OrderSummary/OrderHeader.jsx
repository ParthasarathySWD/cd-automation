import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

function OrderHeader(props) {
    return(
        <>
            <div className="col-span-12 lg:col-span-12 mt-1">
                <div className="ads-box box relative overflow-hidden bg-theme-17 intro-y">
                    <div className="ads-box__title text-white text-md p-1">
                        <h6>Order Number : CD10001</h6> <h6>Order Date : 12-03-2021</h6>
                    </div>
                </div>
            </div>
            {/* <div className="col-span-12 lg:col-span-6 mt-1">
                <div className="ads-box box relative overflow-hidden intro-y">
                    <div className="ads-box__title text-success text-md">
                        Order Number : CD10001
                    </div>
                    <div className="ads-box__title text-success text-md">
                        Order Date : 12-03-2021
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default OrderHeader;
