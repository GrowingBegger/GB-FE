import styled from "styled-components";
import LevelIcon from "../../Assets/img/SVG/myPageIcons/levelIcon.svg";
import MoneyIcon from "../../Assets/img/SVG/myPageIcons/moneyIcon.svg";
import GraphIcon from "../../Assets/img/SVG/myPageIcons/graphIcon.svg";
import BoardIcon from "../../Assets/img/SVG/myPageIcons/boardIcon.svg";
import LogoutIcon from "../../Assets/img/SVG/myPageIcons/logoutIcon.svg";
import RightIcon from "../../Assets/img/SVG/myPageIcons/grayRightIcon.svg";
import { Link } from "react-router-dom";
import { Modal } from "../Common/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookie } from "../../Utils/cookie";

export const Menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        Cookie.remove("accessToken");
        navigate("/login");
    };

    return (
        <>
            <MenuWrapper>
                <MenuBox>
                    <TitleWrapper>
                        <img src={LevelIcon} alt="레벨 조회" />
                        <p style={{ fontFamily: "Pretendard-Medium", fontSize: "15px" }}>레벨 조회</p>
                    </TitleWrapper>
                    <ButtonWrapper to={"/mypage/level"}>
                        <ButtonName>내 레벨을 확인해보세요</ButtonName>
                        <img src={RightIcon} alt="바로가기" />
                    </ButtonWrapper>
                </MenuBox>
                <MenuBox>
                    <TitleWrapper>
                        <img src={MoneyIcon} alt="한달 지출 내역" />
                        <p style={{ fontFamily: "Pretendard-Medium", fontSize: "15px" }}>한달 지출 내역</p>
                    </TitleWrapper>
                    <ButtonWrapper to={"/mypage/ExpenditureDetails"}>
                        <ButtonName>얼마나 쓰고 있을까요?</ButtonName>
                        <img src={RightIcon} alt="바로가기" />
                    </ButtonWrapper>
                </MenuBox>
                <MenuBox>
                    <TitleWrapper>
                        <img src={GraphIcon} alt="지출 그래프" />
                        <p style={{ fontFamily: "Pretendard-Medium", fontSize: "15px" }}>지출 그래프</p>
                    </TitleWrapper>
                    <ButtonWrapper to={"/mypage/paygraph"}>
                        <ButtonName>그래프로 확인하고 관리해보세요</ButtonName>
                        <img src={RightIcon} alt="바로가기" />
                    </ButtonWrapper>
                </MenuBox>
                <MenuBox>
                    <TitleWrapper>
                        <img src={BoardIcon} alt="내가 쓴 게시물" />
                        <p style={{ fontFamily: "Pretendard-Medium", fontSize: "15px" }}>내가 쓴 게시물</p>
                    </TitleWrapper>
                    <ButtonWrapper to={"/mypage/board"}>
                        <ButtonName>내 게시물을 모아보세요</ButtonName>
                        <img src={RightIcon} alt="바로가기" />
                    </ButtonWrapper>
                </MenuBox>
                <MenuBox>
                    <TitleWrapper>
                        <img src={LogoutIcon} alt="로그아웃" />
                        <p style={{ fontFamily: "Pretendard-Medium", fontSize: "15px" }}>로그아웃</p>
                    </TitleWrapper>
                    <LogoutWrapper onClick={handleLogoutClick}>
                        <ButtonName>계정을 로그아웃합니다</ButtonName>
                        <img src={RightIcon} alt="바로가기" />
                    </LogoutWrapper>
                </MenuBox>
            </MenuWrapper>
            {isModalOpen && (
                <Modal
                    titleText={{ before: "", after: "하시겠습니까?" }}
                    pointText="로그아웃"
                    contentText="계정이 로그아웃됩니다"
                    onCancel={handleCancel}
                    onConfirm={handleConfirm}
                />
            )}
        </>
    );
};

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    width: 100%;
`;

const MenuBox = styled.div`
    display: flex;
    align-items: center;
`;

const TitleWrapper = styled.div`
    display: flex;
    gap: 22px;
    align-items: center;
`;

const ButtonWrapper = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
`;

const ButtonName = styled.p`
    font-family: Pretendard-Light;
    font-size: 12px;
    color: #969696;
`;

const LogoutWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
`;
