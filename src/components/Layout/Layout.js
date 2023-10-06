import { Outlet } from "react-router-dom";

import { Navigation, StyledLink, Container } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
