import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";
import FavoritesProvider from "./contexts/Favorite";
import { FilteredProductsProvider } from "./contexts/FilteredProducts";

function AppRoutes() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <FilteredProductsProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Shop" element={<Shop />}></Route>
            <Route path="/Product/:id" element={<Product />}></Route>
            <Route path="/SearchPage/:text" element={<SearchPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </FilteredProductsProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
