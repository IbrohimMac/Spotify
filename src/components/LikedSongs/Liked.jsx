import React, { useState, useEffect } from "react";
import "../../../scss/Liked.scss";
import liked from "../../../images/liked-like.png";
import LeftSidebar from "../Sidebars/LeftSidebar";
import RIghtSIdebar from "../Sidebars/RIghtSIdebar";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { ImPlay2 } from "react-icons/im";
import { BiSolidLike } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Liked = () => {
  const [audio, setAudio] = useState([]);
  const ClientID = "f8ad3b81570c4ebfb5c3be7e657a0366";
  const ClientSecret = "4fc769b86e634917b57d50cf781a3358";
  const token = "https://accounts.spotify.com/api/token";
  const url =
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists";

  const getToken = async () => {
    await fetch(token, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(ClientID + ":" + ClientSecret)}`,
      },
      body: "grant_type=client_credentials",
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(
          "asset_token",
          JSON.stringify(`${data.token_type} ${data.access_token}`)
        );
      })
      .catch((err) => console.log(err));
  };
  /////// 2///
  const getPlaylists = async () => {
    await fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("asset_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.playlists.items);
        setAudio(data.audio.items);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const fetchData = async () => {
      await getToken();
      await getPlaylists();
    };
    fetchData();
  }, []);
  ///
  return (
    <div>
      <LeftSidebar />
      <div className="likeSongs">
        <div className="vvmes">
          <FaChevronCircleLeft className="I" />
          <Link to="/">
            <FaChevronCircleRight className="I" />
          </Link>
        </div>
        <div className="liked-vmeste">
          <img src={liked} alt="" />
          <div className="liked-vmeste2">
            <h4>PUBLIC PLAYLIST</h4>
            <h1>Liked Songs</h1>
          </div>
        </div>
        <div className="liked-vmestee">
          <ImPlay2 className="liked-icons" />
          <div className="likeVmeste">
            <BiSolidLike className="liked-icons2" />
            <FiDownload className="liked-icons2" />
            <HiOutlineDotsHorizontal className="liked-icons2" />
          </div>
          <div className="likeVmestee">
            <FaSearch className="liked-icons2" />
            <select name="en" id="en">
              <option value="en">Custom order</option>
              <option value="en">Custom order</option>
            </select>
          </div>
        </div>
      </div>
      <RIghtSIdebar />
    </div>
  );
};

export default Liked;
