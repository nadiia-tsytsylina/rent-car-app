import { nanoid } from "@reduxjs/toolkit";
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
} from "./AdvertModal.styled";
import Cross from "assets/svg/cross.svg";

export default function AdvertModal({ advert, onClose }) {
  const arrayOfConditions = advert.rentalConditions.split("\n");
  console.log(arrayOfConditions);

  return (
    <Overlay>
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
                return <InfoItem key={nanoid()}>{item}</InfoItem>;
              })}
            </InfoList>
            <InfoList style={{ marginBottom: 0 }}>
              {advert.functionalities.map((item) => {
                return <InfoItem key={nanoid()}>{item}</InfoItem>;
              })}
            </InfoList>
          </div>
          <div>
            <SubTitle>Rental Conditions:</SubTitle>
          </div>
        </Container>
      </Modal>
    </Overlay>
  );
}
