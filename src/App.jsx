import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Spotify from "./components/Spotify";
import LeftSidebar from "./components/Sidebars/LeftSidebar";
import RIghtSIdebar from "./components/Sidebars/RIghtSIdebar";

const App = () => {
  return (
    <div>
      <Router>
        <Spotify />
        <Routes>
          {/* <Route path="/Spotify" element={<Spotify />} /> */}
          <Route path="/LeftSidebar" element={<LeftSidebar />} />
          <Route path="/RIghtSIdebar" element={<RIghtSIdebar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
