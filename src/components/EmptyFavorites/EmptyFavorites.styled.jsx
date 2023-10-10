import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (min-width: 834px) {
    gap: 40px;
  }
`;

export const Text = styled.h2`
  color: var(--dark-text);
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;

  @media (min-width: 834px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const Image = styled.img`
  width: 240px;
`;

export const StyledLink = styled(Link)`
  color: var(--accent-color);
  line-height: 1.5;
  font-weight: 600;
  text-decoration: underline;
`;
