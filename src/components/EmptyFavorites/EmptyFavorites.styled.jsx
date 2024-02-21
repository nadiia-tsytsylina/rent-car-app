import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media (min-width: 834px) {
    gap: 24px;
  }
`;

export const Text = styled.h2`
  color: var(--dark-text);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;

  @media (min-width: 834px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 180px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 834px) {
    width: 240px;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--accent-color);
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  text-decoration: underline;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: var(--dark-blue);
  }

  @media (min-width: 834px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;
