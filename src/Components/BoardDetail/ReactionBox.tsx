import styled from "styled-components";
import MadIcon from "../../Assets/img/SVG/reactionIcons/madIcon.svg";
import RegretIcon from "../../Assets/img/SVG/reactionIcons/regretIcon.svg";
import GoodIcon from "../../Assets/img/SVG/reactionIcons/goodIcon.svg";

export const ReactionBox = () => {
    return (
        <ReactionBoxWrapper>
            <Reactions>
                <img src={MadIcon} alt="미친거지" />
                <TextWrapper>
                    <p style={{ fontFamily: "Pretendard-Semibold", fontSize: "13px" }}>미친거지</p>
                    <p style={{ fontFamily: "Pretendard-Light", fontSize: "13px" }}>20</p>
                </TextWrapper>
            </Reactions>
            <Reactions>
                <img src={RegretIcon} alt="후회할거지" />
                <TextWrapper>
                    <p style={{ fontFamily: "Pretendard-Semibold", fontSize: "13px" }}>후회할거지</p>
                    <p style={{ fontFamily: "Pretendard-Light", fontSize: "13px" }}>20</p>
                </TextWrapper>
            </Reactions>
            <Reactions>
                <img src={GoodIcon} alt="잘한거지" />
                <TextWrapper>
                    <p style={{ fontFamily: "Pretendard-Semibold", fontSize: "13px" }}>잘한거지</p>
                    <p style={{ fontFamily: "Pretendard-Light", fontSize: "13px" }}>20</p>
                </TextWrapper>
            </Reactions>
        </ReactionBoxWrapper>
    );
};

const ReactionBoxWrapper = styled.div`
    display: flex;
    gap: 35px;
    align-items: center;
    margin-top: 25px;
    justify-content: center;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`;

const Reactions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
