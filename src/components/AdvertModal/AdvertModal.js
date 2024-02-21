import { useEffect } from "react";

import {
  Overlay,
  Modal,
  CloseButton,
  Title,
  Span,
  Year,
  Image,
  InfoList,
  InfoItem,
  Container,
  Description,
  SubTitle,
  ConditionsList,
  ConditionItem,
  RentLink,
} from "./AdvertModal.styled";
import Cross from "assets/images/svg/cross.svg";

export default function AdvertModal({ advert, onClose }) {
  const arrayOfConditions = advert.rentalConditions.split("\n");
  console.log(arrayOfConditions.slice(1));
  const minimumAge = arrayOfConditions[0].split(":")[1];

  const mileage = String(advert.mileage / 1000).replace(/\./g, ",");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal>
        <CloseButton type="button" onClick={onClose}>
          <img src={Cross} alt="close button" />
        </CloseButton>
        <Image src={advert.img} alt={advert.model} />
        <Title>
          {advert.make}
          <Span>{advert.model}</Span>,<Year>{advert.year}</Year>
        </Title>
        <InfoList>
          <InfoItem>{advert.address.city}</InfoItem>
          <InfoItem>{advert.address.country}</InfoItem>
          <InfoItem>id: {advert.id}</InfoItem>
          <InfoItem>Year: {advert.year}</InfoItem>
          <InfoItem>Type: {advert.type}</InfoItem>
        </InfoList>
        <InfoList style={{ marginBottom: 14 }}>
          <InfoItem>Fuel Consumption: {advert.fuelConsumption}</InfoItem>
          <InfoItem>Engine Size: {advert.engineSize}</InfoItem>
        </InfoList>
        <Container>
          <Description>{advert.description}</Description>
          <div>
            <SubTitle>Accessories and functionalities:</SubTitle>
            <InfoList>
              {advert.accessories.map((item) => {
                return <InfoItem key={item}>{item}</InfoItem>;
              })}
            </InfoList>
            <InfoList style={{ marginBottom: 0 }}>
              {advert.functionalities.map((item) => {
                return <InfoItem key={item}>{item}</InfoItem>;
              })}
            </InfoList>
          </div>
          <div>
            <SubTitle>Rental Conditions:</SubTitle>
            <ConditionsList>
              <ConditionItem>
                Minimum age:<Span>{minimumAge}</Span>
              </ConditionItem>
              {arrayOfConditions.slice(1).map((item) => {
                return <ConditionItem key={item}>{item}</ConditionItem>;
              })}
              <ConditionItem>
                Mileage:<Span>{mileage}</Span>
              </ConditionItem>
              <ConditionItem>
                Price:<Span>{advert.rentalPrice}</Span>
              </ConditionItem>
            </ConditionsList>
          </div>
          <RentLink href="tel:+380730000000">Rental car</RentLink>
        </Container>
      </Modal>
    </Overlay>
  );
}
