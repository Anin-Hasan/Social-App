import React from "react";

const LeftBar = () => {
  return (
    <>
      <div className="mx-3 my-3 font-poppins top-[70px] h-full w-60 sticky">
        <div className="flex mb-3 items-center pl-2">
          <img
            className="h-5 rounded-full"
            src="https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg"
            alt=""
          />
          <span className="text-sm mx-2">Joy Mondol</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6 " src="./src/assets/1.png" alt="" />
          <span className="text-sm mx-2">Friends</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/2.png" alt="" />
          <span className="text-sm mx-2">Groups</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/3.png" alt="" />
          <span className="text-sm mx-2">Marketplace</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/4.png" alt="" />
          <span className="text-sm mx-2">Watch</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/5.png" alt="" />
          <span className="text-sm mx-2">Memory</span>
        </div>
        <div className="h-[0.5px] bg-opacity-40 bg-gray-500"> </div>
        <h1 className="text-sm text-gray-500 my-3">Your shortcuts</h1>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/6.png" alt="" />
          <span className="text-sm mx-2">Events</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/7.png" alt="" />
          <span className="text-sm mx-2">Gaming</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/8.png" alt="" />
          <span className="text-sm mx-2">Gallery</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/9.png" alt="" />
          <span className="text-sm mx-2">Videos</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/10.png" alt="" />
          <span className="text-sm mx-2">Messages</span>
        </div>
        <div className="h-[0.5px] bg-opacity-40 bg-gray-500"> </div>
        <h1 className="text-sm text-gray-500 my-3">Others</h1>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/11.png" alt="" />
          <span className="text-sm mx-2">Fundraiser</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/12.png" alt="" />
          <span className="text-sm mx-2">Tutorials</span>
        </div>
        <div className="flex mb-3 items-center pl-2 cursor-pointer">
          <img className="h-6" src="./src/assets/13.png" alt="" />
          <span className="text-sm mx-2">Courses</span>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
