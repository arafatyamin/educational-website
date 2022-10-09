import { ArrowRightIcon, ChevronDoubleRightIcon, ClockIcon, UserIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Notice = () => {
    return (
        <div>
            <div className="card w-full bg-white shadow">
            <h2 className="card-title text-white bg-indigo-900 w-full p-4">Latest News</h2>
            <div className="card-body items-center text-center text-blue-700 ">
                <p className="font-bold mx-4 cursor-pointer">Profession Paython Learing With Earning Skill</p>
                    <div className="card-actions gap-0 w-full justify-between">
                    <div className="flex items-center p-2 w-12/6 text-slate-500 text-xl">
                        <UserIcon className="h-4 w-6"> </UserIcon>
                        <p><small>BY DRUP PAUL</small></p>
                    </div>
                    <div className="flex items-center p-2 w-12/6 text-slate-500 text-xl">
                        <ClockIcon className="h-4 w-6"> </ClockIcon>
                        <p><small> 12 DEC, 2018</small></p>
                    </div>
                </div>
                <div className="divider"></div>
                
                <div>
                    <p className="text-blue-700 font-bold mx-4 cursor-pointer">Profession Paython Learing With Earning Skill</p>
                    <div className="card-actions gap-0 w-full justify-between">
                    <div className="flex items-center p-2 w-12/6 text-slate-500 text-xl">
                        <UserIcon className="h-4 w-6"> </UserIcon>
                        <p><small>BY DRUP PAUL</small></p>
                    </div>
                    <div className="flex items-center p-2 w-12/6 text-slate-500 text-xl">
                        <ClockIcon className="h-4 w-6"> </ClockIcon>
                        <p><small> 12 DEC, 2018</small></p>
                    </div>
                </div>
                <div className="divider"></div>
                </div>
                <div>
                    <p className="text-blue-700 font-bold mx-4 cursor-pointer">Profession Paython Learing With Earning Skill</p>
                    <div className="card-actions gap-0 w-full justify-between">
                    <div className="flex items-center p-2 w-12/6 text-slate-500 text-xl">
                        <UserIcon className="h-4 w-6"> </UserIcon>
                        <p><small>BY DRUP PAUL</small></p>
                    </div>
                    <div className="flex items-center p-2 w-12/6 text-slate-500 text-xl">
                        <ClockIcon className="h-4 w-6"> </ClockIcon>
                        <p><small> 12 DEC, 2018</small></p>
                    </div>
                </div>
                <div className="divider"></div>
                </div>
                <div className="flex items-center text-blue-700 font-bold">
                <a href="">BROWSE ALL NEWS  </a>
                <ChevronDoubleRightIcon className="h-4"></ChevronDoubleRightIcon>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Notice;