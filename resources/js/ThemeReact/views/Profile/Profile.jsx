import React, { useState, useEffect } from 'react';

function Profile()
{
    return(
            <div class="intro-y chat grid grid-cols-12 gap-5 mt-5">
                <div class="col-span-12 lg:col-span-4 xxl:col-span-3">
                    <div class="pr-1">
                        <div class="box px-5 py-10 mt-5">
                            <div class="w-20 h-20 flex-none image-fit rounded-full overflow-hidden mx-auto">
                                {/* <img alt="Icewall Tailwind HTML Admin Template" src="dist/images/profile-15.jpg"/> */}
                            </div>
                            <div class="text-center mt-3">
                                <div class="font-medium text-lg">Nicolas Cage</div>
                                <div class="text-gray-600 mt-1">Tailwind HTML Admin Template</div>
                            </div>
                        </div>
                        <div class="box p-5 mt-5">
                            <div class="flex items-center border-b border-gray-200 dark:border-dark-5 pb-5">
                                <div>
                                    <div class="text-gray-600">Country</div>
                                    <div class="mt-1">New York City, USA</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe w-4 h-4 text-gray-600 ml-auto"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> 
                            </div>
                            <div class="flex items-center border-b border-gray-200 dark:border-dark-5 py-5">
                                <div>
                                    <div class="text-gray-600">Phone</div>
                                    <div class="mt-1">+32 19 23 62 24 34</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic w-4 h-4 text-gray-600 ml-auto"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> 
                            </div>
                            <div class="flex items-center border-b border-gray-200 dark:border-dark-5 py-5">
                                <div>
                                    <div class="text-gray-600">Email</div>
                                    <div class="mt-1">nicolascage@left4code.com</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail w-4 h-4 text-gray-600 ml-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> 
                            </div>
                            <div class="flex items-center pt-5">
                                <div>
                                    <div class="text-gray-600">Joined Date</div>
                                    <div class="mt-1">15 August 2022</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock w-4 h-4 text-gray-600 ml-auto"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="intro-y col-span-12 lg:col-span-8 xxl:col-span-9">
                            <div class="chat__box box"></div>
                </div>
            </div>
        
    )
}

export default Profile;