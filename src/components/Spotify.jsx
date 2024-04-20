import React from "react";
import "../../scss/Spotify.scss";
import { Link } from "react-router-dom";
import LeftSidebar from "./Sidebars/LeftSidebar";
import RIghtSIdebar from "./Sidebars/RIghtSIdebar";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const Spotify = () => {
  return (
    <div className="big3">
      {/* <Link to="/LeftSidebar">
        <p>losdv</p>
      </Link> */}
      <div className="vm">
        <LeftSidebar />
        <div className="fir">
          <div className="vv">
            <FaChevronCircleLeft className="I" />
            <FaChevronCircleRight className="I" />
          </div>
          <h1 className="vm-h">Good afternoon</h1>
        </div>
        <RIghtSIdebar />
      </div>
    </div>
  );
};

export default Spotify;
