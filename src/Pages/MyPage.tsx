import styled from "styled-components";
import ProfileIcon from "../Assets/img/SVG/profileIcon.svg";
import EditIcon from "../Assets/img/SVG/editIcon.svg";
import { Color } from "../styles/Color";
import { Menu } from "../Components/MyPage/Menu";
import LeftIcon from "../Assets/img/SVG/leftIcon.svg";
import { Link } from "react-router-dom";

export const MyPage = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <BackButtton src={LeftIcon} alt="뒤로가기" />
                <ProfileImg src={ProfileIcon} alt="프로필" />
            </HeaderWrapper>
            <NameWrapper>
                <p style={{ fontFamily: "Pretendard-SemiBold", fontSize: "17px" }}>의진</p>
                <Link to={"/mypage/edit"}>
                    <EditImg src={EditIcon} alt="수정하기" />
                </Link>
            </NameWrapper>
            <Level>Lv.5</Level>
            <ContentWrapper>
                <TargetMoney>
                    의진님의 한달 목표 소비 금액은
                    <p style={{ fontFamily: "Pretendard-Bold" }}> 100,000원</p>
                    입니다
                </TargetMoney>
                <Line />
                <Menu />
            </ContentWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 46px 35px;
`;

const HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
`;

const BackButtton = styled.img`
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
`;

const ProfileImg = styled.img`
    width: 70px;
    margin-bottom: 20px;
`;

const NameWrapper = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;

const EditImg = styled.img`
    width: 16px;
`;

const Level = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 18px;
    border-radius: 10px;
    background-color: ${Color.color2};
    margin-top: 6px;
    font-family: Pretendard-Medium;
    font-size: 11px;
    color: white;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
`;

const TargetMoney = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Color.white};
    border: 1px solid ${Color.color2};
    width: 100%;
    height: 50px;
    border-radius: 30px;
    font-family: Pretendard-Medium;
    font-size: 15px;
    gap: 3px;
    margin-top: 30px;
    color: ${Color.color2};
`;

const Line = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 30px;
    background-color: ${Color.color2};
`;
