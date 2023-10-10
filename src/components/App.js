import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoading } from "redux/selectors";

import Home from "pages/Home";
import Catalog from "pages/Catalog";
import Favorites from "pages/Favorites";
import Layout from "./Layout/Layout";
import Loader from "./Loader/Loader";

export default function App() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      {isLoading && <Loader />}
    </>
  );
}
