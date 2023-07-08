import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center shadow-navbar bg-white h-14 px-4 font-poppins top-0 sticky z-10">
      <div className="flex items-center">
        <Link to="/">
          <h1 className="font-bold text-xl">Social</h1>
        </Link>
        <HomeOutlinedIcon className="mx-3" />
        <DarkModeOutlinedIcon className="mr-3" />
        <GridViewOutlinedIcon className="mr-3" />
        <div className="border-2 rounded-md px-2">
          <SearchOutlinedIcon />
          <input
            className="outline-none px-2"
            type="text"
            placeholder="search..."
          />
        </div>
      </div>
      <div className="flex items-center">
        <PersonOutlineOutlinedIcon className="mr-3" />
        <EmailOutlinedIcon className="mr-3" />
        <NotificationsNoneOutlinedIcon className="mr-3" />
        <div className="flex items-center">
          <img
            className="h-6 rounded-full mr-3"
            src="https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg"
            alt=""
          />
          <span className="font-semibold">Joy Mondol</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
