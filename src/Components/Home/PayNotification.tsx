import styled from "styled-components";
import { Color } from "../../styles/Color";
import CoinIcon from "../../Assets/img/SVG/coinIcon.svg";

export const PayNotification = () => {
    return (
        <PayNotificationWrapper>
            <p className="BoldText">요아정</p>
            <div className="Texts">
                <p>에</p>
                <p className="BoldText">20,000원</p>
            </div>
            <div className="Icon">
                <p>을 지출했어요</p>
                <img src={CoinIcon} alt="코인" />
            </div>
        </PayNotificationWrapper>
    );
};

const PayNotificationWrapper = styled.div`
    display: flex;
    width: 350px;
    height: 41px;
    background-color: ${Color.color2};
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 15px;
    font-family: Pretendard-Medium;
    > .Texts {
        display: flex;
        gap: 5px;
    }
    > .Icon {
        display: flex;
        gap: 9px;
        align-items: center;
    }
    > .BoldText {
        font-family: Pretendard-Bold;
    }
`;
