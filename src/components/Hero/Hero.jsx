import React, { useState } from 'react';
import logoWithTitle from "../../assets/logo-title.png"
import pen from "../../assets/pen.svg"



export const Hero = () => {
    const [videoUrl, setVideoUrl] = useState('');  // State to hold the video URL input

    // Handler for input change
    const handleInputChange = (event) => {
      setVideoUrl(event.target.value);
    };
  
    // Handler for the button click
    const handleTranscription = () => {
      console.log('Transcription for URL:', videoUrl);
      // You might want to add logic to call an API or another function here
    };
  
    return (
      <div className="flex flex-col items-center mt-40 mb-60 justify-center p-4 bg-background-black">
        <div className="title text-3xl font-bold mt-30">
          <img  className="" src={logoWithTitle} alt="#" />
        </div>
        {/* <div className="w-full max-w-64 border-b border-gray-700 my-4"></div> */}
        {/* <div className="w-full max-w-lx mx-auto border-b border-gray-700 my-5"></div> */}
        <div className="max-w-xl text-center px-4 mb-8 text-active-grey sm:text-md md:text-md">
            <p className="">
            Noted levereges  <span className="text-gradient">cutting-edge AI technologies</span> to redefine real-time transcription, crafted to capture and document your key ideas effortlessly. 
                <span className="text-gradient"> Simply paste the link below</span> and press the 
                  <img className="inline h-7 w-7 fill-current  color-gradient" src={pen} alt="" style={{ filter: 'invert(100%)' }}/>
                   button
            </p>
        </div>
        <div className="mt-4 w-full max-w-md relative">
          <label htmlFor="videoUrl" className="block text-lg font-medium text-gray-700">
      
          </label>
          <input
            type="text"
            id="videoUrl"
            className="mt-1 block w-full px-3 py-3 bg-dormant-grey border border-dormant-grey rounded-full shadow-sm focus:outline-none focus:ring-key-red focus:border-key-red sm:text-sm text-gray-300"
            placeholder="https://www.youtube.com/watch?v=..."
            value={videoUrl}
            onChange={handleInputChange}
            
          />
          <button
            type="button"
            className="absolute inset-y-2.5 right-2 flex items-center justify-center px-3 py-4 font-bold text-white bg-gradient-to-r from-key-red to-darker-red rounded-full hover:bg-dormant-grey">
            <img className="h-7 w-7 fill-current color-white" src={pen} alt="" style={{ filter: 'invert(100%)' }}/>
          </button>
        </div>
      </div>
    )
}
