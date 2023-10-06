import { useSelector } from "react-redux";
import { selectFavorites } from "redux/selectors";
import AdvertList from "components/AdvertList/AdvertList";
import EmptyFavorites from "components/EmptyFavorites/EmptyFavorites";

export default function Favorites() {
  const favoriteAdverts = useSelector(selectFavorites);

  return (
    <>
      {favoriteAdverts.length > 0 ? (
        <AdvertList adverts={favoriteAdverts} />
      ) : (
        <EmptyFavorites />
      )}
    </>
  );
}
