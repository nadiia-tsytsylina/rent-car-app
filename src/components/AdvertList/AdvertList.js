import { useSelector } from "react-redux";
import { selectAdverts } from "redux/selectors";

import Advert from "components/Advert/Advert";

import { List } from "./AdvertList.styled";

export default function AdvertList() {
  const adverts = useSelector(selectAdverts);

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
