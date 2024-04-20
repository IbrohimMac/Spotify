import React from "react";
import "../../../scss/RightSide.scss";
import { IoMdPersonAdd } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
const RIghtSIdebar = () => {
  return (
    <div>
      <div className="big2">
        <div className="vmes">
          <p>Friend Activity</p>
          <IoMdPersonAdd className="II" />
          <VscChromeClose className="II" />
        </div>
      </div>
    </div>
  );
};

export default RIghtSIdebar;
