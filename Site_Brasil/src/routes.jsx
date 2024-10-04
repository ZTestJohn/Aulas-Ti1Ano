import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wars from "./pages/Wars";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Wars" element={<Wars />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
