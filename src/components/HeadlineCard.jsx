import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const HeadlineCard = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" max-w-[1640px] mx-auto py-12 p-4 grid md:grid-cols-3 gap-6">
      {/*Card */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" rounded-xl relative"
      >
        {/*Overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">
            Sunday Out, BOGO's Out
          </p>
          <p className=" px-2">Through 9/26</p>
          <button className="  border-white bg-white text-black mx-2 absolute bottom-4">
            OrderNow
          </button>
        </div>
        <img
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className=" rounded-xl relative"
      >
        {/*Overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className=" px-2">Added Daily</p>
          <button className="  border-white bg-white text-black mx-2 absolute bottom-4">
            OrderNow
          </button>
        </div>
        <img
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1604908554105-088645debe26?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" rounded-xl relative"
      >
        {/*Overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className=" font-bold text-2xl px-2 pt-4">We Deliver Desserts</p>
          <p className=" px-2">Tasty Treats</p>
          <button className="  border-white bg-white text-black mx-2 absolute bottom-4">
            OrderNow
          </button>
        </div>
        <img
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
