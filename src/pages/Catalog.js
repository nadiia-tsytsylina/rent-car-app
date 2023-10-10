import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { fetchAdverts, fetchAdvertsByPage } from "redux/operations";
import {
  selectAllAdverts,
  selectAdvertsByPage,
  selectIsFiltred,
  selectFiltredAdverts,
} from "redux/selectors";
import { resetFilter } from "redux/filterSlice";

import AdvertList from "components/AdvertList/AdvertList";
import Filter from "components/Filter/Filter";
import EmptyFilter from "components/EmptyFilter/EmptyFilter";

export default function Catalog() {
  const dispatch = useDispatch();
  const allAdverts = useSelector(selectAllAdverts);
  const adverts = useSelector(selectAdvertsByPage);
  const [page, setPage] = useState(1);
  const isFiltred = useSelector(selectIsFiltred);
  const filtredAdverts = useSelector(selectFiltredAdverts);
  const [isButtonShown, setIsButtonShown] = useState(true);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAdvertsByPage(page));
    dispatch(resetFilter());
  }, [dispatch, page]);

  useEffect(() => {
    if (adverts.length === allAdverts.length) {
      setIsButtonShown(false);
    } else {
      setIsButtonShown(true);
    }
  }, [adverts, allAdverts]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Filter />
      {!isFiltred && adverts.length > 0 && (
        <AdvertList
          adverts={adverts}
          onLoadMore={handleLoadMore}
          isButtonShown={isButtonShown}
        />
      )}
      {isFiltred && filtredAdverts.length > 0 && (
        <AdvertList adverts={filtredAdverts} onLoadMore={handleLoadMore} />
      )}
      {isFiltred && filtredAdverts.length === 0 && <EmptyFilter />}
    </>
  );
}
