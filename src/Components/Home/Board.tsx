import styled from "styled-components";
import ProfileIcon from "../../Assets/img/SVG/profileIcon.svg";
import DeleteIcon from "../..//Assets/img/SVG/deleteIcon.svg";
import EditIcon from "../../Assets/img/SVG/editIcon.svg";
import { PayNotification } from "./PayNotification";
import TestImg from "../../Assets/img/SVG/testImg.svg";
import { Link } from "react-router-dom";

export const Board = () => {
    return (
        <BoardWrapper>
            <HeaderWrapper>
                <ProfileWrapper>
                    <ProfileImg src={ProfileIcon} alt="프로필" />
                    <ProfileBox>
                        <Name>의진</Name>
                        <Date>2024년 9월 10일</Date>
                    </ProfileBox>
                </ProfileWrapper>
                <IconWrapper>
                    <img src={DeleteIcon} alt="삭제" />
                    <img src={EditIcon} alt="수정" />
                </IconWrapper>
            </HeaderWrapper>
            <PayNotification />
            <Link to={"/board/detail"}>
                <Img src={TestImg} alt="테스트 이미지" />
            </Link>
            <Link to={"/board/detail"}>
                <Content>아니 근데 이게 어쩔 수가 없어요.. 맛있는걸 어떡해요 😭 진짜 그만 써야하는뎁... ㅠ.ㅠ</Content>
            </Link>
        </BoardWrapper>
    );
};

const BoardWrapper = styled.div`
    width: 380px;
    height: 401px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: white;
    gap: 15px;
    padding: 15px;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;

const Img = styled.img`
    border-radius: 5px;
`;

const Content = styled.p`
    font-family: Pretendard-Medium;
    font-size: 15px;
`;

const HeaderWrapper = styled.div`
    display: flex;
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    gap: 10px;
`;

const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

const ProfileImg = styled.img`
    width: 41px;
    height: 41px;
`;

const Name = styled.p`
    font-family: Pretendard-Medium;
    font-size: 15px;
`;

const Date = styled.p`
    font-family: Pretendard-Light;
    color: rgba(0, 0, 0, 0.43);
    font-size: 12px;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: auto;
`;
