import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PeriodicTable from "./pages/PeriodicTable";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/PeriodicTable" element={<PeriodicTable />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
