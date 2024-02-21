import { Container, Text, Image, StyledLink } from "./EmptyFavorites.styled";
import Logo from "assets/images/logo512.png";

export default function EmptyFavorites() {
  return (
    <>
      <Container>
        <Text>Your favorites will be displayed here</Text>

        <Text>
          You can add some cars to favorites in{" "}
          <StyledLink to="/catalog">Catalog</StyledLink>
        </Text>
      </Container>
      <Image src={Logo} alt="Logo" />
    </>
  );
}
