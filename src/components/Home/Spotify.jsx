import React, { useState, useEffect } from "react";
import "../../../scss/Spotify.scss";
import { Link } from "react-router-dom";
import LeftSidebar from "../Sidebars/LeftSidebar";
import RIghtSIdebar from "../Sidebars/RIghtSIdebar";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import i1 from "../../../images/card1.svg";
import i2 from "../../../images/card2.svg";
import i3 from "../../../images/card3.svg";
import i4 from "../../../images/card4.svg";
import i5 from "../../../images/card5.svg";
import i6 from "../../../images/card6.svg";
const Spotify = () => {
  /////
  const [playlists, setPlaylists] = useState([]);
  const ClientID = "f8ad3b81570c4ebfb5c3be7e657a0366";
  const ClientSecret = "4fc769b86e634917b57d50cf781a3358";
  const token = "https://accounts.spotify.com/api/token";
  const url =
    "https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=6";

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
        setPlaylists(data.playlists.items);
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
    <div className="big3">
      <div className="vm">
        <LeftSidebar />
        <div className="fir">
          <div className="vv">
            <FaChevronCircleLeft className="I" />
            <FaChevronCircleRight className="I" />
          </div>
          <h1 className="vm-h">Good afternoon</h1>
          <div className="cards">
            <div className="card1">
              <img src={i1} alt="" />
              <h3>Chill Mix</h3>
            </div>
            <div className="card1">
              <img src={i2} alt="" />
              <h3>Pop Mix</h3>
            </div>
            <div className="card1">
              <img src={i3} alt="" />
              <h3>Daily Mix 1</h3>
            </div>
            <div className="card1">
              <img src={i4} alt="" />
              <h3>Daily Mix 5</h3>
            </div>
            <div className="card1">
              <img src={i5} alt="" />
              <h3>Folk & Acoustic Mix</h3>
            </div>
            <div className="card1">
              <img src={i6} alt="" />
              <h3>Daily Mix 4</h3>
            </div>
          </div>
          <h1 className="h1">Your top mixes</h1>
          <div className="playlist">
            {playlists.map((playlists) => (
              <Link className="Link" to="/PlayList">
                <div key={playlists.id} className="playlist-card">
                  <img
                    className="playlist-img"
                    src={playlists.images[0].url}
                    alt={playlists.name}
                  />
                  <h3>{playlists.name}</h3>
                  <h4>{playlists.description}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <RIghtSIdebar />
      </div>
    </div>
  );
};

export default Spotify;
