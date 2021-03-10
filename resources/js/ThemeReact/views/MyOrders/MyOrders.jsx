import React from 'react';
import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator'
import * as Icon from 'react-feather';
function MyOrders()
{

    const Tabulator_Data = [
   {id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"", cheese:1},
    {id:2, name:"Mary May", age:"1", gender:"female", height:2, col:"blue", dob:"14/05/1982", cheese:true}
]
    const Tabulator_Column = [
        {title:"Order Number", minWidth: "200", field:"name"},
        {title:"Loan Number", minWidth: "200", field:"age"},
        {title:"Client", minWidth: "250", field:"gender"},
        {title:"Status", minWidth: "200", field:"height"},
        {title:"Actions", minWidth: "80",
                    headerSort:false,
                    formatter(cell, formatterParams) {
                        return `<div class="flex lg:justify-left items-left">
                        <a href="javascript:void(0);" class="partnertype_view_btn sm:w-auto flex items-center text-theme-1 dark:bg-dark-5 dark:text-gray-300 cursor-pointer mr-2" title="View"> View</a>
                        <a href="javascript:void(0);" class=" sm:w-auto flex items-center text-theme-6 dark:bg-dark-5 dark:text-gray-300 cursor-pointer" title="Delete"> Delete</a>
                        </div>`
                    }
                }
    ]


    return(
        <div>

                    <div className="intro-y box p-5 mt-5">
                        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start">
                            <form id="tabulator-html-filter-form" className="xl:flex sm:mr-auto" >
                                <div className="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
                                    <input id="tabulator-html-filter-value" type="text" className="form-control form-control-sm sm:w-40 xxl:w-full mt-2 sm:mt-0" placeholder="Search..."/>
                                </div>
                                <div className="mt-2 xl:mt-0">
                                    <button id="tabulator-html-filter-go" type="button" className="btn btn-primary btn-sm w-10 mr-1" >Go</button>
                                    <button id="tabulator-html-filter-reset" type="button" className="btn btn-secondary btn-sm w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1" >Reset</button>
                                </div>
                            </form>
                            <div className="flex mt-5 sm:mt-0">
                            <button className="btn btn-sm btn-primary shadow-md mr-2"><Icon.Plus className="w-4 h-4 mr-2" />New Order</button>
                                <button id="tabulator-print" className="btn btn-outline-secondary btn-sm w-1/2 sm:w-auto mr-2"> <Icon.Printer className="w-4 h-4 mr-2" /> Print </button>
                                <div className="dropdown w-1/2 sm:w-auto">
                                    <button className="dropdown-toggle btn btn-outline-secondary btn-sm w-full sm:w-auto" aria-expanded="false"> <Icon.Download className="w-4 h-4 mr-2" /> Export </button>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a id="tabulator-export-csv" href="javascript:;" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file-text" className="w-4 h-4 mr-2"></i> Export CSV </a>
                                            <a id="tabulator-export-json" href="javascript:;" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file-text" className="w-4 h-4 mr-2"></i> Export JSON </a>
                                            <a id="tabulator-export-xlsx" href="javascript:;" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file-text" className="w-4 h-4 mr-2"></i> Export XLSX </a>
                                            <a id="tabulator-export-html" href="javascript:;" className="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"> <i data-feather="file-text" className="w-4 h-4 mr-2"></i> Export HTML </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto scrollbar-hidden mt-3">
                                          <ReactTabulator
                data={Tabulator_Data}
                tooltips={true}
                columns={Tabulator_Column}
                layout={"fitDataStretch"}
                />
                        </div>
                    </div>
 

        </div>
    )
}

export default MyOrders;