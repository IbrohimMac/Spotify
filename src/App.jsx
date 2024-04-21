import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spotify from "./components/Home/Spotify";
import Liked from "./components/LikedSongs/Liked";
import PlayList from "./components/PlayList/PlayList";
import LeftSidebar from "./components/Sidebars/LeftSidebar";
import RIghtSIdebar from "./components/Sidebars/RIghtSIdebar";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Spotify />} />
          <Route path="/Liked" element={<Liked />} />
          <Route path="/PlayList" element={<PlayList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
