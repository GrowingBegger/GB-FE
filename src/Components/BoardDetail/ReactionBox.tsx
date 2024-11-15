import styled from "styled-components";
import MadIcon from "../../Assets/img/SVG/reactionIcons/madIcon.svg";
import RegretIcon from "../../Assets/img/SVG/reactionIcons/regretIcon.svg";
import GoodIcon from "../../Assets/img/SVG/reactionIcons/goodIcon.svg";
import { ReactionType, createReactionRequest } from "../../Apis/likes/type";
import { createReaction, deleteReaction } from "../../Apis/likes/likes";
import { useState } from "react";

type ReactionBoxProps = {
    likes: [number, number, number];
    postId: number;
};

export const ReactionBox = ({ likes, postId }: ReactionBoxProps) => {
    const [selectedReaction, setSelectedReaction] = useState<ReactionType | null>(null);

    const handleReactionClick = async (reaction: ReactionType) => {
        try {
            if (selectedReaction === reaction) {
                await deleteReaction(postId);
                setSelectedReaction(null);
            } else {
                const data: createReactionRequest = { reaction };
                await createReaction(postId, data);
                setSelectedReaction(reaction);
            }
        } catch (error) {
            console.error("반응 처리 오류:", error);
        }
    };

    return (
        <ReactionBoxWrapper>
            <Reactions onClick={() => handleReactionClick("Bad")}>
                <img src={MadIcon} alt="미친거지" />
                <TextWrapper>
                    <p style={{ fontFamily: "Pretendard-Semibold", fontSize: "13px" }}>미친거지</p>
                    <p style={{ fontFamily: "Pretendard-Light", fontSize: "13px" }}>{likes[0]}</p>
                </TextWrapper>
            </Reactions>
            <Reactions onClick={() => handleReactionClick("Best")}>
                <img src={RegretIcon} alt="후회할거지" />
                <TextWrapper>
                    <p style={{ fontFamily: "Pretendard-Semibold", fontSize: "13px" }}>후회할거지</p>
                    <p style={{ fontFamily: "Pretendard-Light", fontSize: "13px" }}>{likes[1]}</p>
                </TextWrapper>
            </Reactions>
            <Reactions onClick={() => handleReactionClick("Good")}>
                <img src={GoodIcon} alt="잘한거지" />
                <TextWrapper>
                    <p style={{ fontFamily: "Pretendard-Semibold", fontSize: "13px" }}>잘한거지</p>
                    <p style={{ fontFamily: "Pretendard-Light", fontSize: "13px" }}>{likes[2]}</p>
                </TextWrapper>
            </Reactions>
        </ReactionBoxWrapper>
    );
};

const ReactionBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    width: 100%;
    justify-content: center;
    justify-content: space-between;
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
