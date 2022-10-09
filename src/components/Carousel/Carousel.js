import React from 'react';

const  Carousel = () => {
    return (
        <div >
            <div className="carousel w-full h-[600px]">
              <div id="slide1" className="carousel-item relative w-full">
                <img alt="" src="https://img.freepik.com/free-psd/online-live-webinar-social-media-post-square-banner-template_202595-523.jpg?w=740&t=st=1665289613~exp=1665290213~hmac=4a0d024fa3ff52d3c7fbd3968d607bb7484eb31ae3a4d9885adc27b83a4e9445" className="w-full" />
                <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
                <img alt="" src="https://img.freepik.com/free-psd/real-estate-house-social-media-post-square-banner-template_202595-453.jpg?w=740&t=st=1665289628~exp=1665290228~hmac=567299e90f225650fe61f155b5fc298599ae2d7e12b6b2efa803f32c8417c801" className="w-full" />
                <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
                <img alt="" src="https://img.freepik.com/premium-psd/real-estate-house-social-media-post-square-banner-template_202595-452.jpg?w=740" className="w-full" />
                <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide4" className="carousel-item relative w-full">
                <img alt="" src="https://img.freepik.com/premium-psd/minimal-home-interior-design-instagram-post-banner-template-set_145156-527.jpg?w=740" className="w-full" />
                <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
          </div>
        </div>
    );
};

export default Carousel;