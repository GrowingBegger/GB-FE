import styled from "styled-components";
import { Color } from "../styles/Color";
import { LoginInput } from "../Components/LoginInput";
import Button from "../Components/Common/Button";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { login } from "../Apis/user/user";
import { Cookie } from "../Utils/cookie";

export const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isError, setIsError] = useState<boolean>(false);

  const navigate = useNavigate();

  const onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      setPw(e.target.value);
    } else if (e.target.id === "id") {
      setId(e.target.value);
    }
  };

  const handleLogin = () => {
    login({
      username: id,
      password: pw,
    })
      .then((res) => {
        Cookie.set("accessToken", res.data.accessToken);
        navigate("/");
      })
      .catch(() => {
        setPw("");
        setIsError(true);
      });
  };

  return (
    <Container>
      <TextWrapper>
        <Title>로그인</Title>
        <Content>기존 계정으로 로그인 해주세요</Content>
      </TextWrapper>
      <Wrapper>
        <LoginInput
          id="id"
          type="text"
          placeholder="아이디를 입력해 주세요."
          value={id}
          onChange={onLoginChange}
        />
        <LoginInput
          id="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          isPassword
          value={pw}
          onChange={onLoginChange}
        />
      </Wrapper>
      {isError && <Error>비밀번호가 일치하지 않습니다*</Error>}
      <Button content="로그인" onClick={handleLogin} />
      <Wrapper>
        <Signin>
          아직 회원이 아니신가요?&ensp;
          <StyledLink to={"/signup"}>회원가입 하기</StyledLink>
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

const Error = styled.p`
  font-family: Pretendard-Regular;
  font-size: 11px;
  color: #ff5454;
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
`;

const StyledLink = styled(Link)`
  color: ${Color.color2};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
