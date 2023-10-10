import Advert from "components/Advert/Advert";
import { List, LoadMoreButton } from "./AdvertList.styled";

export default function AdvertList({ adverts, onLoadMore, isButtonShown }) {
  return (
    <>
      <List>
        {adverts.map((item) => (
          <li key={item.id}>
            <Advert advert={item} />
          </li>
        ))}
      </List>
      {isButtonShown && (
        <LoadMoreButton onClick={onLoadMore}>Load more</LoadMoreButton>
      )}
    </>
  );
}
