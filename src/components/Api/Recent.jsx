import React, { useEffect, useState } from "react";
import { getMusic, getApia } from "../JS/script";
import { Link } from "react-router-dom";
import { Recent } from "../JS/data";
const Recen = () => {
  const tokenURl = "https://accounts.spotify.com/api/token";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getApia(tokenURl);
        const playlists = await getMusic(Recent);
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
      <h1 className="h1">Recently played</h1>
      <div className="playlist">
        {data.slice(2, 6).map((data, index) => (
          <Link
            to={`/playlist/${data.id}?type=Recent`}
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

export default Recen;
