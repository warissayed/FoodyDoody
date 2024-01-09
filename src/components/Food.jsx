import React, { useState } from "react";
import { data } from "../Data/data";

const Food = ({ searchQuery }) => {
  const [food, setFood] = useState(data);

  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFood(
      data.filter((p) => {
        return p.price === price;
      })
    );
  };

  return (
    <div className=" max-w-[1640px] m-auto px-4 py-12">
      <h1 className=" text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/*Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/*Filter type */}
        <div>
          <p className=" font-bold text-gray-700">Filter Type</p>
          <div className=" flex justify-between flex-wrap">
            <button
              onClick={() => setFood(data)}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              Chicken
            </button>
          </div>
        </div>
        {/*Filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className=" flex justify-between mx-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className=" border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1 "
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/*Display img */}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map((items, index) => (
          <div
            key={index}
            className="border shadow-xl border-black/40 hover:scale-105 duration-300 rounded-lg"
          >
            <img
              src={items.image}
              alt={items.name}
              className=" w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className=" font-bold">{items.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-xl">
                  {items.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
