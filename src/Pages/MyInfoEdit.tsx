import styled from "styled-components";
import LeftIcon from "../Assets/img/SVG/leftIcon.svg";
import EditIcon from "../Assets/img/SVG/myPageIcons/orangeEditIcon.svg";
import { LoginInput } from "../Components/LoginInput";
import Button from "../Components/Common/Button";
import { Link } from "react-router-dom";

export const MyInfoEdit = () => {
    return (
        <Wrapper>
            <Container>
                <Link to={"/mypage"}>
                    <BackButton src={LeftIcon} alt="뒤로가기" />
                </Link>
                <TitleWrapper>
                    <Title>내 정보</Title>
                    <IconWrapper>
                        <Title>수정하기</Title>
                        <img src={EditIcon} alt="수정하기" />
                    </IconWrapper>
                </TitleWrapper>
            </Container>
            <InputWrapper>
                <LoginInput placeholder="닉네임을 입력해 주세요" />
                <LoginInput type="text" placeholder="한달 목표 소비 금액을 입력해 주세요." isUnit />
            </InputWrapper>
            <ButtonWrapper>
                <Button content="수정하기" />
            </ButtonWrapper>
        </Wrapper>
    );
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 35px;
    justify-content: center;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

export const BackButton = styled.img`
    display: flex;
    width: 100%;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 30.58px;
    align-self: flex-start;
`;

export const Title = styled.p`
    font-family: Pretendard-SemiBold;
    font-size: 23px;
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 90px;
    padding-left: 35px;
    padding-right: 35px;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    margin-top: 334px;
`;
