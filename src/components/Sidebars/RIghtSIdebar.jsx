import React from "react";
import "../../../scss/RightSide.scss";
import { IoMdPersonAdd } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import i1 from "../../../images/i1.png";

const RIghtSIdebar = () => {
  return (
    <>
      <div className="big2">
        <div className="vme">
          <p>Friend Activity</p>
          <IoMdPersonAdd className="Ii" />
          <VscChromeClose className="IiExt" />
        </div>
        <div className="sled">
          <p>
            Let friends and followers on Spotify see what you’re listening to.
          </p>
          <div className="imgs">
            <div className="img1">
              <img src={i1} alt="" />
            </div>
            <div className="img1">
              <img src={i1} alt="" />
            </div>
            <div className="img1">
              <img src={i1} alt="" />
            </div>
          </div>
          <p className="sled-p">
            Go to Settings Social and enable “Share my listening activity on
            Spotify.’ You can turn this off at any time.
          </p>
          <button>SETTINGS</button>
        </div>
      </div>
    </>
  );
};

export default RIghtSIdebar;
