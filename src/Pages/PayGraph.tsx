import styled from "styled-components";
import LeftIcon from "../Assets/img/SVG/leftIcon.svg";
import { Color } from "../styles/Color";
import { Graph } from "../Components/MyPage/Graph";
import { Link } from "react-router-dom";

export const PayGraph = () => {
    return (
        <Wrapper>
            <BackButtonLink to={"/mypage"}>
                <BackButton src={LeftIcon} alt="뒤로가기" />
            </BackButtonLink>
            <Title>
                <p style={{ fontFamily: "Pretendard-SemiBold", fontSize: "23px" }}>지출 그래프</p>
                <Explain>그래프로 지출을 체계적으로 관리하세요</Explain>
            </Title>
            <GraphBox>
                <Graph />
            </GraphBox>
            <PayDataWrapper>
                <PayData>
                    <Month>1월</Month>
                    <Money>10,000,000 원</Money>
                </PayData>
                <PayData>
                    <Month>2월</Month>
                    <Money>0 원</Money>
                </PayData>
                <PayData>
                    <Month>3월</Month>
                    <Money>10,000,000 원</Money>
                </PayData>
                <PayData>
                    <ThisMonth>4월</ThisMonth>
                    <ThisMoney>10,000,000 원</ThisMoney>
                </PayData>
                <PayData>
                    <Month>5월</Month>
                    <Money>10,000,000 원</Money>
                </PayData>
                <PayData>
                    <Month>6월</Month>
                    <Money>10,000,000 원</Money>
                </PayData>
                <PayData>
                    <Month>7월</Month>
                    <Money>200,000 원</Money>
                </PayData>
                <PayData>
                    <Month>5월</Month>
                    <Money>10,000,000 원</Money>
                </PayData>
                <PayData>
                    <Month>6월</Month>
                    <Money>10,000,000 원</Money>
                </PayData>
                <PayData>
                    <Month>7월</Month>
                    <Money>200,000 원</Money>
                </PayData>
                <PayData>
                    <Month>6월</Month>
                    <Money>10,000,000 원</Money>
                </PayData>
                <PayData>
                    <Month>7월</Month>
                    <Money>200,000 원</Money>
                </PayData>
            </PayDataWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    padding: 75px 27px;
`;

const BackButtonLink = styled(Link)`
    display: flex;
    align-self: flex-start;
`;

const BackButton = styled.img`
    width: 2vw;
    margin-bottom: 31px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-self: flex-start;
`;

const Explain = styled.p`
    font-family: Pretendard-Light;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.43);
`;

const GraphBox = styled.div`
    margin-top: 25px;
`;

const PayDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 340px;
    margin-top: 25px;
`;

const PayData = styled.div`
    display: flex;
    align-items: center;
`;

const Month = styled.p`
    font-family: Pretendard-Medium;
    font-size: 15px;
    margin-right: auto;
`;

const Money = styled.p`
    font-family: Pretendard-Regular;
    font-size: 15px;
`;

const ThisMonth = styled.p`
    font-family: Pretendard-Medium;
    font-size: 15px;
    margin-right: auto;
    color: ${Color.color2};
`;

const ThisMoney = styled.p`
    font-family: Pretendard-Regular;
    font-size: 15px;
    color: ${Color.color2};
`;
