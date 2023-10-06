import Advert from "components/Advert/Advert";
import { List } from "./AdvertList.styled";

export default function AdvertList({ adverts }) {
  return (
    <List>
      {adverts.map((item) => (
        <li key={item.id}>
          <Advert advert={item} />
        </li>
      ))}
    </List>
  );
}
