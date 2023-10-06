import { GoDot } from "react-icons/go";
import {
  Container,
  Title,
  SubTitle,
  SubContainer,
  List,
  Item,
  Image,
  RentLink,
} from "./Main.styled";
import Car from "assets/images/main-car-webP.webp";

export default function Main() {
  return (
    <Container>
      <Title>We are daily rental of cars in Ukraine</Title>
      <SubTitle>
        Kyiv, Kharkiv, Dnipro, Lviv, Odessa, Zaporizhzhia, Vinnytsia
      </SubTitle>
      <SubContainer>
        <div>
          <List>
            <Item>
              <GoDot fill="var(--accent-color)" />
              32 new cars in the fleet
            </Item>
            <Item>
              <GoDot fill="var(--accent-color)" />
              Full insurance (CASCO, OSAGO)
            </Item>
            <Item>
              <GoDot fill="var(--accent-color)" />
              Car delivery to the address
            </Item>
            <Item>
              <GoDot fill="var(--accent-color)" />
              Car transfer takes up to 8 minutes
            </Item>
            <Item>
              <GoDot fill="var(--accent-color)" />
              It is possible to go abroad
            </Item>
            <Item>
              <GoDot fill="var(--accent-color)" />
              24/7 support
            </Item>
          </List>
          <RentLink href="tel:+380730000000">Rental car</RentLink>
        </div>

        <Image src={Car} alt="car mersedes" />
      </SubContainer>
    </Container>
  );
}
