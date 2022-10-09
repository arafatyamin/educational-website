import React from 'react';
import ImportantNotice from '../ImportantNotice/ImportantNotice';
import AboutMore from './AboutMore';
import Introduction from './Introduction';

const Home = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <Introduction></Introduction>
                <AboutMore></AboutMore>
            </div>
            <div className='py-4 px-8'>
                <ImportantNotice></ImportantNotice>
            </div>
        </div>
    );
};

export default Home;