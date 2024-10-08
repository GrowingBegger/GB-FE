import styled from "styled-components";
import ProfileIcon from "../../Assets/img/SVG/profileIcon.svg";

export const CommentBox = () => {
    return (
        <Wrapper>
            <ProfileWrapper>
                <Profile src={ProfileIcon} alt="프로필" />
                <ProfileWrap>
                    <p style={{ fontFamily: "Pretendard-Medium", fontSize: "15px" }}>보노보노</p>
                    <Date>2024년 9월 11일</Date>
                </ProfileWrap>
            </ProfileWrapper>
            <Comment>여러분 그거 아세요? 사실 보노보노 섹시함ㅋㅋ</Comment>
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
