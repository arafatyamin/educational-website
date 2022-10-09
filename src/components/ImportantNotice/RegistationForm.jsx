import React from 'react';

const RegistationForm = () => {
    return (
        <div className="pt-8">
            <div className="card w-full bg-base-200 shadow-xl">
            <h2 className="card-title text-white bg-indigo-900 w-full p-4">Card title!</h2>
            <div className="card-body">
                <h2 className="card-title text-blue-800 w-full p-4">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <iframe className="w-full aspect-video " src="https://www.youtube.com/embed/39uMLYTh40Q" title="YouTube video player" ></iframe>
                <button className="btn">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default RegistationForm;