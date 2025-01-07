import React from "react";

const SdvWorkshop = () => {
  return (
    <div className="relative flex flex-col items-center mb-8 bg-gradient-to-b p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
        <h1 className="text-2xl font-antons sm:text-3xl  md:text-4xl lg:text-6xl  text-transparent bg-clip-text bg-gradient-to-r from-[#C10000] to-[#C10000] drop-shadow-lg tracking-wider ">
          About SDV Workshop
        </h1>
        <p className="font-calsans text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-[#FAFAFA] mt-4 tracking-wide px-8 md:px-20 text-justify">
  The 6th edition of SDV celebrates a remarkable journey of innovation, with each edition setting new milestones. Join us at SDV 6.0 and be part of the next unforgettable chapter! Experience adrenaline-packed challenges and game-changing workshops. SDV 6.0 is where learning meets adventure, exploration sparks excitement, and every moment inspires. Don’t miss out on the event everyone’s talking about!
</p>

      </div>

      <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-8">
        <div className="flex justify-center sm:w-1/2 sm:pl-4 md:pl-6">
          <img
            src="https://i.ibb.co/XkV5C73/arduino-car-1.gif"
            alt="Self-Driving Vehicles Workshop"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 object-cover"
          />
        </div>

        <div className="sm:w-1/2 text-center sm:text-left sm:pr-4 md:pr-6">
          {/* <p className="text-sm sm:text-base md:text-sm lg:text-2xl text-[#F5F5F5] tracking-wide leading-relaxed">
            Explore the future of{" "}
            <span className="text-red-500">Self-Driving Vehicles</span> in this
            immersive workshop.
            <br />
            Unlock innovation, learn cutting-edge technology, and drive
            tomorrow's solutions! Not long ago, self-driving cars seemed like
            science fiction. Now, it's like observing the future occurring right
            in front of us. Today, technology is constantly improving.
            Driverless cars are a success, proving our progress. Using computer
            tech in transportation enhances safety and reliability, paving the
            way for a safer, easier future.
          </p> */}

          <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center sm:justify-center md:justify-start flex-wrap space-x-8 sm:space-x-8 md:space-x-10">
           <a
  href="#register"
  className="relative inline-block px-8 py-4 text-lg font-bold text-white rounded-full 
             bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 shadow-xl 
             transform transition-all duration-500 hover:scale-110 hover:shadow-2xl 
             group overflow-hidden"
>
  {/* Neon Glowing Pulse Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-400 opacity-0 group-hover:opacity-80 
                  transition-opacity duration-500 ease-in-out"></span>

  {/* Glowing Edge Animation */}
  <span className="absolute inset-0 border-4 border-transparent rounded-full group-hover:border-red-600 
                  group-hover:border-4 group-hover:animate-pulse transition-all duration-700"></span>

  {/* 3D Hover Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full 
                  opacity-0 group-hover:opacity-50 transform scale-110 transition-all duration-500"></span>

  {/* Button Text */}
  <span className="relative z-10 group-hover:text-gray-100 transition-colors duration-300">Register Now</span>
</a>

            <a
              href="/whysdv"
              className="px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-[#C10000] to-red-700 
                   text-[#FAFAFAFA] text-s sm:text-sm md:text-base lg:text-lg font-semibold rounded-full shadow-lg 
                   hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#E2F1E7] opacity-40 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#C10000] opacity-50 blur-2xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-[#C10000] opacity-30 blur-3xl rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default SdvWorkshop;
