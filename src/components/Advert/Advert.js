import { useState } from "react";
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
} from "./Advert.styled";

export default function Advert({ advert }) {
  const [isModalShown, setIsModalShown] = useState(false);

  const openModal = () => {
    setIsModalShown(true);
  };

  const closeModal = () => {
    setIsModalShown(false);
  };

  return (
    <>
      <Container>
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
        <Button type="button" onClick={openModal}>
          Learn more
        </Button>
      </Container>
      {isModalShown && <AdvertModal advert={advert} onClose={closeModal} />}
    </>
  );
}
