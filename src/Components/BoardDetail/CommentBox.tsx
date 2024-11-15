import styled from "styled-components";
import ProfileIcon from "../../Assets/img/SVG/profileIcon.svg";

interface CommentBoxProps {
    comment: {
        content: string;
        createdAt: string;
        user: {
            nickname: string;
            profile: string;
        };
    };
}

export const CommentBox: React.FC<CommentBoxProps> = ({ comment }) => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <Profile src={comment.user.profile || ProfileIcon} alt="프로필" />
        <ProfileWrap>
          <p style={{ fontFamily: "Pretendard-Medium", fontSize: "15px" }}>
            {comment.user.nickname}
          </p>
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

const Profile = styled.img`
    width: 30px;
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
