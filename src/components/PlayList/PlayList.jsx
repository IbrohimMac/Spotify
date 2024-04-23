import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../JS/data";
import { getPlaylists, getToken } from "../JS/script";
import LeftSidebar from "../Sidebars/LeftSidebar";
import RIghtSIdebar from "../Sidebars/RIghtSIdebar";
const Details = () => {
  const { id } = useParams();
  const api = window.location.href;
  const apiUrl = api.toString().split("?type=")[1];
  const tokenURl = "https://accounts.spotify.com/api/token";

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getToken(tokenURl);
        const playlists = await getPlaylists(API);
        const album = await getPlaylists(
          "https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt/tracks"
        );
        setData(playlists?.playlists.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="playlist-content">
      <LeftSidebar />
      <h1 style={{ color: "red" }}>
        {data?.map((el, i) => {
          console.log(el);
          if (el?.id === id) {
            return (
              <div key={i}>
                <img src={el.images[0].url} alt="" />
                <h1>{el?.name}</h1>
              </div>
            );
          }
        })}
      </h1>
      <RIghtSIdebar />
    </div>
  );
};

export default Details;
