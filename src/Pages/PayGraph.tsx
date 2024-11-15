import styled from "styled-components";
import LeftIcon from "../Assets/img/SVG/leftIcon.svg";
import { Color } from "../styles/Color";
import { Graph } from "../Components/MyPage/Graph";
import { Link } from "react-router-dom";
import { getExpenses } from "../Apis/expenses/expenses";
import { useEffect, useState } from "react";
import { getExpensesType } from "../Apis/expenses/type";

export const PayGraph = () => {
    const [myExpenses, setMyExpenses] = useState<getExpensesType>();

    useEffect(() => {
        getExpenses()
            .then((response) => {
                setMyExpenses(response.data);
            })
            .catch((error) => {
                console.error("올해 지출 내역 불러오기 오류: ", error);
            });
    }, []);

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
                {myExpenses?.expenseData.map((data) => (
                    <PayData key={data.month}>
                        <Month>{`${data.month}월`}</Month>
                        <Money>{`${data.expense.toLocaleString()} 원`}</Money>
                    </PayData>
                ))}
            </PayDataWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    padding: 50px 35px;
    width: 100%;
`;

const BackButtonLink = styled(Link)`
    display: flex;
    align-self: flex-start;
`;

const BackButton = styled.img`
    display: flex;
    width: 100%;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-self: flex-start;
    margin-top: 75px;
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
    align-items: flex-start;
    gap: 10px;
    margin-top: 25px;
`;

const PayData = styled.div`
    display: flex;
    align-items: center;
    width: 85vw;
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
