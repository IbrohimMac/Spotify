import { useState, useEffect } from "react";
import "../../../scss/Spotify.scss";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { getPlaylists, getToken } from "../JS/script";
import { API } from "../JS/data";
import LeftSidebar from "../Sidebars/LeftSidebar";
import RIghtSIdebar from "../Sidebars/RIghtSIdebar";

const Spotify = () => {
  /////
  const [data, setData] = useState([]);
  const token = "https://accounts.spotify.com/api/token";
  useEffect(() => {
    const fetchData = async () => {
      try {
        await getToken(token);
        const playlists = await getPlaylists(API);
        setData(playlists?.playlists.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
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
            {data.slice(2, 8).map((data, index) => (
              <Link
                to={`/playlist/${data.id}?type=API`}
                key={index}
                className="Link"
              >
                <div className="card1">
                  <img src={data.images[0].url} alt="" />
                  <h3>{data.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <h1 className="h1">Your top mixes</h1>
          <div className="playlist">
            {data.slice(2, 6).map((data, index) => (
              <Link
                to={`/playlist/${data.id}?type=API`}
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
          <h1 className="h1">Made for you</h1>
          <div className="playlist">
            {data.slice(5, 9).map((data, index) => (
              <Link
                to={`/playlist/${data.id}?type=API`}
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
          <h1 className="h1">Recently played</h1>
          <div className="playlist">
            {data.slice(8, 12).map((data, index) => (
              <Link
                to={`/playlist/${data.id}?type=API`}
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

          <h1 className="h1">Jump back in</h1>
          <div className="playlist">
            {data.slice(3, 7).map((data, index) => (
              <Link
                to={`/playlist/${data.id}?type=API`}
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

          <h1 className="h1">Uniquely yours</h1>
          <div className="playlist">
            {data.slice(7, 11).map((data, index) => (
              <Link
                to={`/playlist/${data.id}?type=API`}
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
        <RIghtSIdebar />
      </div>
    </div>
  );
};

export default Spotify;
