import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import SpeedDial from "./components/MUISpeedDial";

const App = () => (
  <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    <SpeedDial />
  </>
);

export default App;
