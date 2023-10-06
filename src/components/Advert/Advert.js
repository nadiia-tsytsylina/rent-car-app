import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "redux/favoriteSlice";
import { selectFavorites } from "redux/selectors";
import AdvertModal from "components/AdvertModal/AdvertModal";
import {
  Container,
  Image,
  TitleContainer,
  Title,
  Span,
  Year,
  Price,
  InfoList,
  InfoItem,
  Button,
  FavoriteButton,
} from "./Advert.styled";
import HeartNormal from "assets/images/svg/heart-normal.svg";
import HeartActive from "assets/images/svg/heart-active.svg";

export default function Advert({ advert }) {
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector(selectFavorites);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isCurrentFavorite = favoriteAdverts.find(
      (favorite) => favorite.id === advert.id
    );
    if (isCurrentFavorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [advert, favoriteAdverts]);

  const onOpenModal = () => {
    setIsModalShown(true);
  };

  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onAddFavorites = () => {
    dispatch(addFavorites(advert));
    setIsFavorite(true);
  };

  const onDeleteFavorites = () => {
    dispatch(deleteFavorites(advert.id));
    setIsFavorite(false);
  };

  return (
    <>
      <Container>
        {isFavorite ? (
          <FavoriteButton onClick={onDeleteFavorites}>
            <img src={HeartActive} alt="favorite button" />
          </FavoriteButton>
        ) : (
          <FavoriteButton onClick={onAddFavorites}>
            <img src={HeartNormal} alt="favorite button" />
          </FavoriteButton>
        )}

        <div>
          <Image src={advert.img} alt={advert.model} />
          <TitleContainer>
            <Title>
              {advert.make}
              <Span>{advert.model}</Span>,<Year>{advert.year}</Year>
            </Title>
            <Price>{advert.rentalPrice}</Price>
          </TitleContainer>
          <InfoList>
            <InfoItem>{advert.address.city}</InfoItem>
            <InfoItem>{advert.address.country}</InfoItem>
            <InfoItem>{advert.rentalCompany}</InfoItem>
          </InfoList>
          <InfoList style={{ marginBottom: 0 }}>
            <InfoItem>{advert.type}</InfoItem>
            <InfoItem>{advert.mileage}</InfoItem>
            <InfoItem
              style={{
                overflow: "hidden",
                whiteSpace: "wrap",
                textOverflow: "ellipsis",
              }}
            >
              {advert.accessories[0]}
            </InfoItem>
          </InfoList>
        </div>
        <Button type="button" onClick={onOpenModal}>
          Learn more
        </Button>
      </Container>
      {isModalShown && <AdvertModal advert={advert} onClose={onCloseModal} />}
    </>
  );
}
