import styled from "styled-components";
import back from "../Assets/img/SVG/back.svg";
import { Color } from "../styles/Color";
import { Link } from "react-router-dom";

export const ExpenditureDetails = () => {
  const Ex = [
    { name: "요아정", price: "15,000" },
    { name: "팬클럽 연장", price: "30,000" },
    { name: "회식", price: "14,910" },
    { name: "야구티켓", price: "34,000" },
    { name: "젤리", price: "1,000" },
    { name: "집가고싶다", price: "15,000,000" },
  ];
  return (
    <Container>
      <Link to={"/mypage"}>
        <img
          src={back}
          alt="뒤로가기"
          style={{ width: "5px", height: "13px" }}
        />
      </Link>
      <Text>
        <Title>한달 지출 내역</Title>
        <Content>현재 총 20,000,000원을 지출했습니다.</Content>
      </Text>
      <Day>
        <Date>9월 10일</Date>
        <BreakDownWrapper>
          {Ex.map((element, index) => (
            <BreakDown>
              <Name>{element.name}</Name>
              <Price>{element.price}</Price>
            </BreakDown>
          ))}
        </BreakDownWrapper>
      </Day>
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
