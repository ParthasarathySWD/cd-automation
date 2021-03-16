import React, {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import axios from '../../../ThemeLayouts/repository/api';
import {useSelector} from 'react-redux';
import * as Icon from 'react-feather';
function OrderHistory(props) {
    let history = useHistory();

    
    return (
        <>
        <div class="intro-y chat grid grid-cols-12 gap-5 mt-5">
            <div class="col-span-12 lg:col-span-12 xxl:col-span-12">
                <div class="intro-x cursor-pointer relative flex items-center p-3 py-1">
                    <div class="w-10 h-10 flex-none image-fit mr-1">
                        <img alt="Rubick Tailwind HTML Admin Template" class="rounded-full" src="../images/profile-8.jpg"/>
                    </div>
                    <div class="ml-2 ">
                        <div class="flex items-center">
                            <a href="javascript:;" class="font-medium">user</a>
                            <span class="ml-2">update address</span>
                            <div class="text-xs text-gray-500 ml-2"> 01/01/2020 05:09 AM</div>
                        </div>
                        <div class="w-full text-gray-600 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-12 xxl:col-span-12">
                <div class="intro-x cursor-pointer relative flex items-center p-3 py-1">
                    <div class="w-10 h-10 flex-none image-fit mr-1">
                        <img alt="Rubick Tailwind HTML Admin Template" class="rounded-full" src="../images/profile-8.jpg"/>
                    </div>
                    <div class="ml-2 ">
                        <div class="flex items-center">
                            <a href="javascript:;" class="font-medium">user</a> 
                            <span class="ml-2">update address</span>
                            <div class="text-xs text-gray-500 ml-2"> 01/01/2020 05:09 AM</div>
                        </div>
                        <div class="w-full text-gray-600 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-12 xxl:col-span-12">
                <div class="intro-x cursor-pointer relative flex items-center p-3 py-1">
                    <div class="w-10 h-10 flex-none image-fit mr-1">
                        <img alt="Rubick Tailwind HTML Admin Template" class="rounded-full" src="../images/profile-8.jpg"/>
                    </div>
                    <div class="ml-2 ">
                        <div class="flex items-center">
                            <a href="javascript:;" class="font-medium">user</a> 
                            <span class="ml-2">update address</span>
                            <div class="text-xs text-gray-500 ml-2"> 01/01/2020 05:09 AM</div>
                        </div>
                        <div class="w-full text-gray-600 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                    </div>
                </div>
            </div>
            <div class="col-span-12 lg:col-span-12 xxl:col-span-12">
                <div class="intro-x cursor-pointer relative flex items-center p-3 py-1">
                    <div class="w-10 h-10 flex-none image-fit mr-1">
                        <img alt="Rubick Tailwind HTML Admin Template" class="rounded-full" src="../images/profile-8.jpg"/>
                    </div>
                    <div class="ml-2 ">
                        <div class="flex items-center">
                            <a href="javascript:;" class="font-medium">user</a> 
                            <span class="ml-2">update address</span>
                            <div class="text-xs text-gray-500 ml-2"> 01/01/2020 05:09 AM</div>
                        </div>
                        <div class="w-full text-gray-600 mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                    </div>
                </div>
            </div>
        </div>



        </>
        );
    }

    export default OrderHistory;