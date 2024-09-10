import Logo from "../Assets/img/SVG/Logo1.svg";
import ProfileIcon from "../Assets/img/SVG/profileIcon.svg";
import styled from "styled-components";
import RightIcon from "../Assets/img/SVG/rightIcon.svg";
import { Board } from "../Components/Home/Board";

export const Home = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <img className="logo" src={Logo} alt="로고" />
                <img className="profile" src={ProfileIcon} alt="프로필" />
            </HeaderWrapper>
            <button>
                게시글 작성하러 가기
                <img src={RightIcon} alt="" />
            </button>
            <BoardWrapper>
                <Board />
                <Board />
                <Board />
                <Board />
            </BoardWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 25px;
    align-items: center;
    > button {
        width: 380px;
        height: 50px;
        background-color: white;
        font-family: Pretendard-Medium;
        font-size: 16px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-top: 19px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        gap: 196px;
        filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
    }
`;

const HeaderWrapper = styled.div`
    display: flex;
    gap: 213px;
`;

const BoardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
