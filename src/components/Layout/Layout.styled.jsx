import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;
  background: var(--light-background);
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const StyledLink = styled(NavLink)`
  color: var(--dark-text);
  padding: 16px 0;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: var(--accent-color);
  }

  :hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  padding: 40px 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
`;
