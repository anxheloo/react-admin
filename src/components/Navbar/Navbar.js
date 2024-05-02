import React from "react";

const Navbar = () => {
  return (
    <div className="w-full p-[20px] flex justify-between items-center bg-mainBg">
      <div
        id="logo"
        className="flex items-center font-bold gap-[10px] text-white cursor-pointer"
      >
        <img src="logo.svg" alt="app name"></img>
        <span>ACMedia</span>
      </div>

      <div id="icons" className="flex items-center gap-8">
        <img src="search.svg" alt="search"></img>
        <img src="app.svg" alt="search"></img>
        <img src="expand.svg" alt="search"></img>

        <div id="notifications" className="flex items-center relative ">
          <img src="notifications.svg" alt="notifications"></img>
          <span className="absolute bg-red-600 rounded-full text-white text-sm w-5 text-center -top-3 left-3">
            1
          </span>
        </div>

        <div id="user" className="flex items-center gap-1">
          <img
            src="https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj"
            alt="user"
            className=" rounded-full w-8 h-8 object-cover"
          ></img>
          <span>Anxhelo</span>
        </div>

        <img src="settings.svg" alt="search"></img>
      </div>
    </div>
  );
};

export default Navbar;
