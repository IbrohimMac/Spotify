import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../JS/data";
import { getPlaylists, getToken } from "../JS/script";
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
    <div className="playlistBig">
      <LeftSidebar />
      <FaChevronCircleLeft className="I" />
      <FaChevronCircleRight className="I" />
      <h1>
        {data?.map((el, i) => {
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
          <table>
            <thead className="playlist-thead">
              <tr>
                <th>#</th>
                <th className="th1">Title</th>
                <th className="th2">Album</th>
                <th className="th3">Date Added</th>
                <th className="th4">
                  <FaClock />
                </th>
              </tr>
            </thead>
            <tbody className="playlist-tbody">
              <tr>
                <th>1</th>
                <th>Mark</th>
                <th>Otto</th>
                <th>@@@</th>
              </tr>
            </tbody>
          </table>
        </div>
      </h1>
      <RIghtSIdebar />
    </div>
  );
};

export default Details;
