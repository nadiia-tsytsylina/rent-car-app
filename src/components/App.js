import { Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Catalog from "pages/Catalog";
import Favorites from "pages/Favorites";
import Layout from "./Layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}
