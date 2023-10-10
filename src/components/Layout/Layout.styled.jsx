import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  background: var(--light-background);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

  @media (min-width: 834px) {
    gap: 100px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: var(--dark-text);
  padding: 16px 0;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: var(--accent-color);
  }

  :hover {
    transform: scale(1.1);
  }

  @media (min-width: 834px) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 40px 10px 150px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    padding: 40px 24px 150px;
  }

  @media (min-width: 1440px) {
    padding: 40px 24px 150px;
    max-width: 1440px;
  }
`;
