import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdverts } from "redux/operations";

import AdvertList from "components/AdvertList/AdvertList";
import { selectAdverts } from "redux/selectors";

export default function Catalog() {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return <>{adverts.length > 0 && <AdvertList adverts={adverts} />}</>;
}
