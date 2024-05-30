import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import SpeedDial from "./components/MUISpeedDial";
import Aos from "aos";
import "aos/dist/aos.css";
// import Confetti from "react-confetti-boom";

Aos.init();

const App = () => (
  <div className="app">
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    <SpeedDial />
    {/* <Confetti mode="boom" particleCount={200} effectCount={1} /> */}
  </div>
);

export default App;
