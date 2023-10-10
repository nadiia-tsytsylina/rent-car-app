import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Text = styled.h2`
  color: var(--dark-text);
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
`;

export const Image = styled.img`
  width: 240px;
`;

export const StyledLink = styled(Link)`
  color: var(--accent-color);
  font-size: 18px;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  margin-bottom: 24px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: underline;
`;
