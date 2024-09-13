import styled from "styled-components";
import { Board } from "../Components/Home/Board";
import LeftIcon from "../Assets/img/SVG/leftIcon.svg";
import { Link } from "react-router-dom";

export const MyBoards = () => {
    return (
        <Wrapper>
            <div style={{ display: "flex", gap: "5vw", alignItems: "center" }}>
                <Link to={"/mypage"}>
                    <BackButton src={LeftIcon} />
                </Link>
                <p style={{ fontFamily: "Pretendard-SemiBold", fontSize: "23px" }}>내가 쓴 게시물</p>
            </div>
            <BoardWrapper>
                <Board />
                <Board />
                <Board />
                <Board />
                <Board />
            </BoardWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 25px;
`;

const BackButton = styled.img`
    width: 5px;
    height: 13px;
`;

const BoardWrapper = styled.div`
    margin-top: 45px;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 15px;
`;
