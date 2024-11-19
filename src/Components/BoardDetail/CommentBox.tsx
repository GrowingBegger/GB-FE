import styled from "styled-components";
import ProfileIcon from "../../Assets/img/SVG/profileIcon.svg";
import { useEffect, useState } from "react";

interface CommentBoxProps {
    comment: {
        content: string;
        created_at: string;
        user: {
            nickname: string;
            profile: string;
        };
    };
}

export const CommentBox: React.FC<CommentBoxProps> = ({ comment }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        if (comment.user?.profile) {
            const img = new Image();
            img.src = comment.user?.profile;
            img.onload = () => setImageLoaded(true);
            img.onerror = () => setImageLoaded(false);
        }
    });

    return (
        <Wrapper>
            <ProfileWrapper>
                <Profile backgroundImage={imageLoaded ? comment.user?.profile || ProfileIcon : ProfileIcon} />
                <ProfileWrap>
                    <p style={{ fontFamily: "Pretendard-Medium", fontSize: "15px" }}>{comment.user.nickname}</p>
                    <Date>{comment.created_at.split("T")[0]}</Date>
                </ProfileWrap>
            </ProfileWrapper>
            <Comment>{comment.content}</Comment>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProfileWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const ProfileWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const Profile = styled.div<{ backgroundImage: string }>`
    width: 30px;
    height: 30px;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
`;

const Date = styled.p`
    font-family: Pretendard-Light;
    font-size: 11px;
    color: rgba(0, 0, 0, 0.43);
`;

const Comment = styled.p`
    font-family: Pretendard-Regular;
    margin-left: 40px;
    margin-top: 10px;
    width: 340px;
`;
