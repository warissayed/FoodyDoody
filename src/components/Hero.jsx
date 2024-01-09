import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center rounded-2xl">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            The <span className=" text-orange-500">Best</span>
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="150"
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            <span className=" text-orange-500">Food</span>Devliered
          </h1>
        </div>
        <img
          className=" w-full max-h-[500px] object-cover rounded-2xl"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
