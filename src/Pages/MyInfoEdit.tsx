import styled from "styled-components";
import LeftIcon from "../Assets/img/SVG/leftIcon.svg";
import EditIcon from "../Assets/img/SVG/myPageIcons/orangeEditIcon.svg";
import { LoginInput } from "../Components/LoginInput";
import Button from "../Components/Common/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { editUserInfoType } from "../Apis/user/type";
import { editUserInfo } from "../Apis/user/user";

export const MyInfoEdit = () => {
    const [nickname, setNickname] = useState("");
    const [target, setTarget] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const data: editUserInfoType = {
            nickname,
            target: Number(target),
        };
        try {
            await editUserInfo(data);
        } catch (error) {
            console.error("수정 중 오류 발생");
        }
    };
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
            <Form onSubmit={handleSubmit}>
                <InputWrapper>
                    <LoginInput
                        placeholder="닉네임을 입력해 주세요"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <LoginInput
                        type="text"
                        placeholder="한달 목표 소비 금액을 입력해 주세요."
                        isUnit
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                    />
                </InputWrapper>
                <ButtonWrapper>
                    <Button content="수정하기" />
                </ButtonWrapper>
            </Form>
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
