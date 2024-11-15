import React from "react";
import styled from "styled-components";
import ModalIcon from "../../Assets/img/SVG/modalIcon.svg";
import { Color } from "../../styles/Color";
import Button from "./Button";

interface ModalProps {
  titleText: {
    before: string;
    after: string;
  };
  pointText: string;
  contentText: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  titleText,
  pointText,
  contentText,
  onCancel,
  onConfirm,
}) => {
  return (
    <ModalWrapper>
      <ModalBox>
        <img src={ModalIcon} alt="모달" />
        <TextWrapper>
          <Title>
            <p>{titleText.before}</p>
            <Point>{pointText}</Point>
            <p>{titleText.after}</p>
          </Title>
          <Content>{contentText}</Content>
        </TextWrapper>
        <ButtonWrapper>
          <Button
            content="취소"
            size="small"
            backgroundColor="gray"
            onClick={onCancel}
          />
          <Button
            content="확인"
            size="small"
            backgroundColor="orange"
            onClick={onConfirm}
          />
        </ButtonWrapper>
      </ModalBox>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.33);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  width: 349px;
  height: 240px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 19.75px;
  gap: 5px;
  align-items: center;
  margin-bottom: 29px;
`;

const Title = styled.div`
  display: flex;
  gap: 5px;
  font-family: Pretendard-SemiBold;
  font-size: 18px;
`;

const Point = styled.p`
  color: ${Color.color2};
`;

const Content = styled.p`
  font-family: Pretendard-Regular;
  font-size: 14px;
  color: #616161;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 13px;
`;
