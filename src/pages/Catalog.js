import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAdverts } from "redux/operations";

import AdvertList from "components/AdvertList/AdvertList";

export default function Catalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <AdvertList />
    </div>
  );
}
