import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import SearchPage from "./pages/SearchPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Product/:id" element={<Product />}></Route>
        <Route path="/SearchPage:text" element={<SearchPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
