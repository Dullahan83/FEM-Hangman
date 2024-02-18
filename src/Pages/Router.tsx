import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Home from "./Home";
import Ingame from "./Ingame";
import Rules from "./Rules";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/InGame/:category" element={<Ingame />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
