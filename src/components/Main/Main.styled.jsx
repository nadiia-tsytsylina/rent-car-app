import styled from "@emotion/styled";

export const Container = styled.div`
  text-align: center;
  padding: 40px 0;
`;

export const Title = styled.h1`
  color: var(--dark-text);
  font-weight: 600;
  font-size: 28px;
  text-transform: uppercase;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    font-size: 36px;
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const SubTitle = styled.h2`
  color: var(--accent-color);
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;

  @media (min-width: 834px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column-reverse;
  padding: 20px 0;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 80px;
  }

  @media (min-width: 1440px) {
    gap: 120px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  color: var(--dark-text);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
  gap: 4px;

  @media (min-width: 834px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const RentLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 44px;
  background-color: var(--accent-color);
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: none;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: var(--dark-blue);
  }
`;

export const Image = styled.img`
  width: 400px;

  @media (min-width: 834px) {
    width: 500px;
  }

  @media (min-width: 1440px) {
    width: 800px;
  }
`;
