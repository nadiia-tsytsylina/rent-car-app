import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 274px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  color: var(--dark-text);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;

export const Span = styled.span`
  color: var(--accent-color);
  margin-left: 4px;
`;

export const Year = styled.span`
  margin-left: 4px;
`;

export const Price = styled.p`
  color: var(--dark-text);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  width: 274px;
`;

export const InfoItem = styled.li`
  color: var(--light-text);
  font-size: 12px;
  line-height: 1.5;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  padding-right: 6px;
  height: 18px;

  &:last-child {
    border-right: none;
    padding: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
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

export const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 16px;
  right: 16px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.3);
  }
`;
