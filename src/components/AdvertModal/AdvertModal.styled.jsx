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
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
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

// export const AdditionalInfo= styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
// `

export const SubTitle = styled.h3`
  color: var(--dark-text);
  font-size: 14px;
  line-height: 1.43;
  width: 460px;
  font-weight: 500;
  margin-bottom: 8px;
`;
