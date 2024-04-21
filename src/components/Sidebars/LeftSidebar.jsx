import React from "react";
import "../../../scss/LeftSide.scss";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoLibrarySharp } from "react-icons/io5";
import { RiAddCircleFill } from "react-icons/ri";
import { AiTwotoneLike } from "react-icons/ai";
const LeftSidebar = () => {
  return (
    <div className="big1">
      <div className="bigg1">
        <div className="mini1">
          <Link to="/" className="link">
            <div className="home">
              <IoHome className="II" />
              <h3>Home</h3>
            </div>
          </Link>
          <div className="search">
            <FaSearch className="II" />
            <h3>Search</h3>
          </div>
          <div className="library">
            <IoLibrarySharp className="II" />
            <h3>Your Library</h3>
          </div>
        </div>
        <div className="mini2">
          <Link to="/PlayList" className="link">
            <div className="create">
              <RiAddCircleFill className="II" />
              <h3>Create Playlist</h3>
            </div>
          </Link>
          <Link to="/Liked" className="link">
            <div className="songs">
              <AiTwotoneLike className="II" />
              <h3>Liked Songs</h3>
            </div>
          </Link>
        </div>
        <hr />
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
