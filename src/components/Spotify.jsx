import React from "react";
import "../../scss/Spotify.scss";
import { Link } from "react-router-dom";
import LeftSidebar from "./Sidebars/LeftSidebar";
import RIghtSIdebar from "./Sidebars/RIghtSIdebar";

const Spotify = () => {
  return (
    <div className="big3">
      {/* <Link to="/LeftSidebar">
        <p>losdv</p>
      </Link> */}
      <div className="vm">
        <LeftSidebar />
        <RIghtSIdebar />
      </div>
    </div>
  );
};

export default Spotify;
