import styled from "styled-components";
import back from "../Assets/img/SVG/back.svg";
import { Color } from "../styles/Color";
import { Link } from "react-router-dom";
import { getMonthExpenses } from "../Apis/expenses/expenses";
import { useEffect, useState } from "react";
import { getMonthExpensesArrayType } from "../Apis/expenses/type";

export const ExpenditureDetails = () => {
    const [expensesData, setExpensesData] = useState<getMonthExpensesArrayType[]>([]);
    const [totalExpenses, setTotalExpenses] = useState<number>(0);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await getMonthExpenses();
                const data = response.data;
                setExpensesData(data.dailyExpenseData);
                const total = data.dailyExpenseData.reduce((sum, day) => {
                    const dayTotal = day.expenses.reduce((daySum, expense) => daySum + expense.price, 0);
                    return sum + dayTotal;
                }, 0);
                setTotalExpenses(total);
            } catch (error) {
                console.error("한달 지출 내역 오류:", error);
            }
        };
        fetchExpenses();
    }, []);

    return (
        <Container>
            <Link to={"/mypage"}>
                <img src={back} alt="뒤로가기" style={{ width: "5px", height: "13px" }} />
            </Link>
            <Text>
                <Title>한달 지출 내역</Title>
                <Content>현재 총 {totalExpenses}원을 지출했습니다.</Content>
            </Text>
            {expensesData.map((day, index) => (
                <Day key={index}>
                    <Date>{day.date}일</Date>
                    <BreakDownWrapper>
                        {day.expenses.map((expense, idx) => (
                            <BreakDown key={idx}>
                                <Name>{expense.name}</Name>
                                <Price>{expense.price}원</Price>
                            </BreakDown>
                        ))}
                    </BreakDownWrapper>
                </Day>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    padding: 75px 35px 10px 35px;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Title = styled.p`
    font-family: "Pretendard-SemiBold";
    font-size: 23px;
`;

const Content = styled.p`
    font-family: "Pretendard-Light";
    font-size: 12px;
    color: rgba(0, 0, 0, 0.43);
`;

const Day = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
`;

const BreakDownWrapper = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Date = styled.p`
    width: 20%;
    font-family: "Pretendard-Regular";
    font-size: 13px;
`;

const BreakDown = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Name = styled.p`
    font-family: "Pretendard-SemiBold";
    font-size: 15px;
    color: ${Color.color2};
`;

const Price = styled.p`
    font-family: "Pretendard-SemiBold";
    font-size: 15px;
`;
