import styled from "@emotion/styled";

export const Container = styled.div`
  text-align: center;
  padding: 40px 0;
`;

export const Title = styled.h1`
  color: var(--dark-text);
  font-weight: 600;
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

export const SubTitle = styled.h2`
  color: var(--accent-color);
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
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
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  text-align: left;
  gap: 4px;
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
  width: 600px;
`;
