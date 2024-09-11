import styled from "styled-components";
import LeftIcon from "../Assets/img/SVG/smallLeftIcon.svg";
import SendIcon from "../Assets/img/SVG/sendIcon.svg";
import { Board } from "../Components/Home/Board";
import { ReactionBox } from "../Components/BoardDetail/ReactionBox";
import { CommentBox } from "../Components/BoardDetail/CommentBox";
import { Color } from "../styles/Color";
import { Link } from "react-router-dom";

export const BoardDetail = () => {
    return (
        <Wrapper>
            <Wrap>
                <Link to={"/"}>
                    <BackButtonWrapper>
                        <img src={LeftIcon} alt="뒤로가기" />
                        <p style={{ fontFamily: "Pretendard-Regular", fontSize: "13px" }}>뒤로가기</p>
                    </BackButtonWrapper>
                </Link>
                <Board />
                <ReactionBox />
                <Line />
                <CommentTitle>댓글</CommentTitle>
                <CommentWrapper>
                    <CommentBox />
                    <CommentBox />
                    <CommentBox />
                    <CommentBox />
                </CommentWrapper>
                <CommentInputWrapper>
                    <CommentInput placeholder="댓글을 입력해주세요"></CommentInput>
                    <img src={SendIcon} alt="보내기" />
                </CommentInputWrapper>
            </Wrap>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const BackButtonWrapper = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 14px;
    margin-top: 25px;
`;

const Line = styled.div`
    width: 380px;
    height: 3px;
    border-radius: 30px;
    background-color: ${Color.color1};
    margin-top: 20px;
    margin-bottom: 15px;
`;

const CommentTitle = styled.p`
    font-family: Pretendard-SemiBold;
    font-size: 15px;
    margin-bottom: 15px;
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
`;

const CommentInputWrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-bottom: 30px;
`;

const CommentInput = styled.input`
    width: 335px;
    height: 40px;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    padding-left: 15px;
    font-family: Pretendard-Light;
    font-size: 15px;
`;
