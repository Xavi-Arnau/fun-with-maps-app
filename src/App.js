import About from "./components/About";
import Footer from "./components/Footer";
import Main from "./components/Main";

import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Automarkers from "./components/pages/Automarkers";
import Animatedmarkers from "./components/pages/Animatedmarkers";
import Animatedline from "./components/pages/Animatedline";
import MapStyles from "./components/pages/MapStyles";
import Buildings3d from "./components/pages/Buildings3d";
import Terrain3d from "./components/pages/Terrain3d";
import Filters from "./components/pages/Filters";
import Slides from "./components/pages/Slides";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-sand">
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/automarkers" element={<Automarkers />} />
          <Route path="/animatedmarkers" element={<Animatedmarkers />} />
          <Route path="/animatedline" element={<Animatedline />} />
          <Route path="/mapstyles" element={<MapStyles />} />
          <Route path="/buildings3d" element={<Buildings3d />} />
          <Route path="/terrain3d" element={<Terrain3d />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
