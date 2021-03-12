import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, withRouter } from 'react-router-dom';
import * as Icon from 'react-feather';
// import { hashHistory } from 'react-router;'

function ColumnFormattar(props) {

    var history = useHistory();

    const cellData = props.cell._cell.row.data;
    const ref = React.createRef(null);
    function redirectRoute(e){
        history.push(props.route + '/' + cellData.OrderUID);
    }

    const handleRoute = (e) => {

    }

    return (
        <div className="flex lg:justify-left items-left">
            <a onClick={redirectRoute} className="partnertype_view_btn sm:w-auto flex items-center text-theme-1 dark:bg-dark-5 dark:text-gray-300 cursor-pointer mr-2" title="View">  <Icon.Edit className="w-4 h-4 text-theme-24" /> View</a>
            <a onClick={handleRoute} className=" sm:w-auto flex items-center text-theme-6 dark:bg-dark-5 dark:text-gray-300 cursor-pointer" title="Delete"> <Icon.Trash className="w-4 h-4 text-theme-24" /></a>
        </div>
    );
}

export default ColumnFormattar;