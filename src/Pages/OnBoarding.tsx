import styled from "styled-components";
import Logo2 from "../Assets/img/SVG/Logo2.svg";
import Button from "../Components/Common/Button";
import { Color } from "../styles/Color";
import { Link } from "react-router-dom";

export const OnboardingPage = () => {
  return (
    <Container>
      <img src={Logo2} alt="로고" />
      <ButtonWrapper>
        <Link to={"/login"}>
          <Button content="로그인" />
        </Link>
        <Link to={"/singup"}>
          <Button
            content="회원가입"
            backgroundColor="white"
            borderColor={Color.color2}
            textColor={Color.color2}
          />
        </Link>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 45vh;
  padding: 10vw 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
