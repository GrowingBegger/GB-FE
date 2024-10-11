import styled from "styled-components";
import { Color } from "../styles/Color";
import { LoginInput } from "../Components/LoginInput";
import Button from "../Components/Common/Button";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>로그인</Title>
        <Content>기존 계정으로 로그인 해주세요</Content>
      </TextWrapper>
      <Wrapper>
        <LoginInput type="text" placeholder="아이디를 입력해 주세요." />
        <LoginInput
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          isPassword
        />
      </Wrapper>
      <Button content="로그인" />
      <Wrapper>
        <Signin>
          아직 회원이 아니신가요?&ensp;<Link to={"/signup"}>회원가입 하기</Link>
        </Signin>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 110px;
  align-items: center;
  padding: 30% 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-self: flex-start;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.p`
  font-family: Pretendard-Semibold;
  font-size: 25px;
`;

const Content = styled.p`
  font-family: Pretendard-Light;
  font-size: 15px;
`;

const Signin = styled.p`
  display: flex;
  font-family: Pretendard-Regular;
  font-size: 14px;
  align-self: center;

  > p {
    color: ${Color.color2};
  }
`;
