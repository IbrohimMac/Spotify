import React from "react";
import "../../../scss/LeftSide.scss";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { RiAddCircleFill } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
const LeftSidebar = () => {
  return (
    <div className="big1">
      <div className="icons">
        <div className="first">
          <IoHome className="II" />
          <p>Home</p>
        </div>
        <div className="second">
          <FaSearch className="II" />
          <p>Search</p>
        </div>
        <div className="second">
          <IoLibrarySharp className="II" />
          <p>Your Library</p>
        </div>
        <div className="third">
          <RiAddCircleFill className="II" />
          <p>Create Playlist</p>
        </div>
        <div className="fourth">
          <AiTwotoneLike className="II" />
          <p>Liked Songs</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
