import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import FavoritesPage from "./pages/Favorites/FavoritesPage";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
