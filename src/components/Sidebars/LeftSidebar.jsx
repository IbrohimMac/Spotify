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
        <hr className="hr" />
        <div className="categories">
          <p>Chill Mix</p>
          <p>Insta Hits</p>
          <p>Your Top Songs 2021</p>
          <p>Mellow Songs</p>
          <p>Anime Lofi & Chillhop Music</p>
          <p>BG Afro “Select” Vibes</p>
          <p>Afro “Select” Vibes</p>
          <p>Happy Hits!</p>
          <p>Deep Focus</p>
          <p>Instrumental Study</p>
          <p>OST Compilations</p>
          <p>Nostalgia for old souled mill...</p>
          <p>Mixed Feelings</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
