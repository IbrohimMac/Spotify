import React, { useState, useEffect } from "react";
import "../../../scss/PlayList.scss";
import LeftSidebar from "../Sidebars/LeftSidebar";
import RIghtSIdebar from "../Sidebars/RIghtSIdebar";

const PlayList = () => {
  return (
    <div>
      <LeftSidebar />
      <RIghtSIdebar />
    </div>
  );
};

export default PlayList;
