import styled from "styled-components";
import { Color } from "../styles/Color";
import { LoginInput } from "../Components/LoginInput";
import Button from "../Components/Common/Button";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { signup } from "../Apis/user/user";

export const SignupPage = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [target, setTarget] = useState("");

  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "id") {
      setId(e.target.value);
    } else if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "target") {
      setTarget(e.target.value);
    }
  };

  const handleSignup = () => {
    signup({
      username: id,
      nickname: name,
      password: password,
      target: target,
    })
      .then((res) => {
        navigate("/login");
      })
      .catch(() => {
        setPassword("");
      });
  };

  return (
    <Container>
      <TextWrapper>
        <Title>회원가입</Title>
        <Content>계정을 생성해서 앱을 사용해보세요</Content>
      </TextWrapper>
      <Wrapper>
        <LoginInput
          id="id"
          type="text"
          placeholder="아이디를 입력해 주세요."
          onChange={onChange}
          value={id}
        />
        <LoginInput
          id="name"
          type="text"
          placeholder="닉네임을 입력해주세요"
          onChange={onChange}
          value={name}
        />
        <LoginInput
          id="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          onChange={onChange}
          value={password}
          isPassword
        />
        <LoginInput
          id="target"
          type="text"
          placeholder="한달 목표 소비 금액을 입력해 주세요."
          onChange={onChange}
          value={target}
          isUnit
        />
      </Wrapper>
      <Button content="회원가입" onClick={handleSignup} />
      <Wrapper>
        <Signin>
          이미 회원이신가요?&ensp;
          <StyledLink to="/login">로그인 하기</StyledLink>
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
`;

const StyledLink = styled(Link)`
  color: ${Color.color2};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
