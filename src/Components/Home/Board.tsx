import styled from "styled-components";
import ProfileIcon from "../../Assets/img/SVG/profileIcon.svg";
import DeleteIcon from "../..//Assets/img/SVG/deleteIcon.svg";
import EditIcon from "../../Assets/img/SVG/editIcon.svg";
import { PayNotification } from "./PayNotification";
import TestImg from "../../Assets/img/SVG/testImg.svg";

export const Board = () => {
    return (
        <BoardWrapper>
            <HeaderWrapper>
                <ProfileWrapper>
                    <img src={ProfileIcon} alt="프로필" />
                    <div>
                        <Name className="name">의진</Name>
                        <Date className="date">2024년 9월 10일</Date>
                    </div>
                </ProfileWrapper>
                <IconWrapper>
                    <img src={DeleteIcon} alt="삭제" />
                    <img src={EditIcon} alt="수정" />
                </IconWrapper>
            </HeaderWrapper>
            <PayNotification />
            <img src={TestImg} alt="테스트 이미지" />
            <p>아니 근데 이게 어쩔 수가 없어요.. 맛있는걸 어떡해요 😭 진짜 그만 써야하는뎁... ㅠ.ㅠ</p>
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
    > img {
        border-radius: 5px;
    }
    > p {
        font-family: Pretendard-Medium;
        font-size: 15px;
    }
`;

const HeaderWrapper = styled.div`
    display: flex;
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    gap: 10px;
    > img {
        width: 41px;
        height: 41px;
    }
    > div {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
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
