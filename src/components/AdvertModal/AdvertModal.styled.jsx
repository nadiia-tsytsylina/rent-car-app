import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 99;
`;

export const Modal = styled.div`
  position: relative;
  max-height: 90vh;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  /* &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.5); 
    border-radius: 20px; 
  } */
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 16px;
  right: 16px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.3);
  }
`;

export const Title = styled.h2`
  color: var(--dark-text);
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Span = styled.span`
  color: var(--accent-color);
  margin-left: 4px;
`;

export const Year = styled.span`
  margin-left: 4px;
`;

export const Image = styled.img`
  width: 460px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 4px;
  width: 460px;
`;

export const InfoItem = styled.li`
  color: var(--light-text);
  font-size: 12px;
  line-height: 1.5;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  padding-right: 6px;

  &:last-child {
    border-right: none;
    padding: 0;
    /* overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis; */
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Description = styled.p`
  color: var(--dark-text);
  font-size: 14px;
  line-height: 1.43;
  width: 460px;
`;

export const SubTitle = styled.h3`
  color: var(--dark-text);
  font-size: 14px;
  line-height: 1.43;
  width: 460px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  width: 460px;
`;

export const ConditionItem = styled.li`
  padding: 7px 14px;
  color: var(--grey-text);
  font-size: 12px;
  line-height: 1.5;
`;

export const RentLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
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
