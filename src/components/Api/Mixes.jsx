import React, { useEffect, useState } from "react";
import { getMusic, getApia } from "../JS/script";
import { Link } from "react-router-dom";
import { Mixes } from "../JS/data";
const Mixe = () => {
  const tokenURl = "https://accounts.spotify.com/api/token";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getApia(tokenURl);
        const playlists = await getMusic(Mixes);
        setData(playlists?.playlists.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <h1 className="h1">Your top mixes</h1>
      <div className="playlist">
        {data.slice(10).map((data, index) => (
          <Link
            to={`/playlist/${data.id}?type=Mixes`}
            key={index}
            className="Link"
          >
            <div className="playlist-card">
              <img
                className="playlist-img"
                src={data.images[0].url}
                alt={data.name}
              />
              <h3>{data.name}</h3>
              <h4>{data.description}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mixe;
