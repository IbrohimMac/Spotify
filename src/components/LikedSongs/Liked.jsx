import React, { useState, useEffect } from "react";
import "../../../scss/Liked.scss";
import LeftSidebar from "../Sidebars/LeftSidebar";
import RIghtSIdebar from "../Sidebars/RIghtSIdebar";
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
      <div className="playlists">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          aspernatur deleniti ullam enim cupiditate quia non! Animi voluptatibus
          vel atque soluta adipisci. Vitae harum quasi, rem adipisci nihil vel
          tempore.
        </p>
        {audio.map((audio) => (
          <div>
            {/* <audio ref={(element) => setAudio(element)} src={track}></audio> */}
          </div>
        ))}
      </div>
      <RIghtSIdebar />
    </div>
  );
};

export default Liked;
