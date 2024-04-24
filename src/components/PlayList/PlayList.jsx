import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../JS/data";
import { getMusic, getApia } from "../JS/script";
import LeftSidebar from "../Sidebars/LeftSidebar";
import RIghtSIdebar from "../Sidebars/RIghtSIdebar";
import "../../../scss/PlayList.scss";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ImPlay2 } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
const PlayList = () => {
  const { id } = useParams();
  const api = window.location.href;
  const apiUrl = api.toString().split("?type=")[1];
  const tokenURl = "https://accounts.spotify.com/api/token";

  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getApia(tokenURl);
        const playlists = await getMusic(API);
        const album = await getMusic(
          "https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt/tracks"
        );
        setDate(playlists?.playlists.items);
        setData(album.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [api, apiUrl, id]);
  return (
    <div className="playlistBig">
      <LeftSidebar />
      <Link to="/">
        <FaChevronCircleLeft className="I" />
      </Link>
      <Link to="/liked">
        <FaChevronCircleRight className="I" />
      </Link>
      <h1>
        <div>
          {date?.map((el, i) => {
            console.log(el);
            if (el?.id === id) {
              return (
                <div className="playlist-card" key={i}>
                  <img src={el.images[0].url} alt="" />
                  <div className="playlist-card-mini">
                    <h3>PUBLIC PLAYLIST</h3>
                    <h1>{el?.name}</h1>
                    <p>{el.description}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="playlist-vmeste">
          <ImPlay2 className="playlist-icons" />
          <div className="playlistVmeste">
            <BiSolidLike className="playlist-icons2" />
            <FiDownload className="playlist-icons2" />
            <HiOutlineDotsHorizontal className="playlist-icons2" />
          </div>
          <div className="playlistVmestee">
            <FaSearch className="playlist-icons2" />
            <select name="en" id="en">
              <option value="en">Custom order</option>
              <option value="en">Custom order</option>
            </select>
          </div>
        </div>
        <div className="playlist-table">
          <table class="table">
            <thead className="playlist-thead">
              <tr>
                <th scope="col">#</th>
                <th className="th1" scope="col">
                  TITLE
                </th>
                <th className="th2" scope="col">
                  ALBUM
                </th>
                <th scope="col">MUSIC</th>
              </tr>
            </thead>

            <tbody className="playlist-tbody">
              {data?.slice(0, 15).map((el, i) => (
                <tr>
                  <th
                    className="playlist-tbody-th"
                    style={{ fontSize: "22px" }}
                    scope="row"
                  >
                    {i + 1}
                  </th>
                  <td>
                    <img
                      className="playlist-img"
                      src={el.track.album.images[0].url}
                    />
                  </td>
                  <td>
                    <p
                      style={{ fontSize: "22px" }}
                      className="playlist-table-p"
                    >
                      {el.track.artists[0].name}
                    </p>
                  </td>
                  <td>
                    <audio
                      className="playlist-table-audio"
                      controls
                      src={el.track.preview_url}
                    ></audio>
                  </td>
                  <td>
                    <p>{}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </h1>
      <RIghtSIdebar />
    </div>
  );
};

export default PlayList;
