import Logo from "../Assets/img/SVG/Logo1.svg";
import ProfileIcon from "../Assets/img/SVG/profileIcon.svg";
import styled from "styled-components";
import RightIcon from "../Assets/img/SVG/rightIcon.svg";
import { Board } from "../Components/Home/Board";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetPostListResponse } from "../Apis/posts/type";
import { getPostList } from "../Apis/posts/posts";

export const Home = () => {
  const [postList, setPostList] = useState<GetPostListResponse | null>(null);

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await getPostList();
        console.log("API 응답 데이터:", response.data);
        setPostList(response.data);
      } catch (error) {
        console.error("데이터 로딩 오류:", error);
      }
    };

    fetchPostList();
  }, []);

  return (
    <Wrapper>
      <HeaderWrapper>
        <LogoImg src={Logo} alt="로고" />
        <Link to={"/mypage"}>
          <ProfileImg src={ProfileIcon} alt="프로필" />
        </Link>
      </HeaderWrapper>
      <BoardButton>
        <Link to={"/createPost"}>
          <ButtonText>게시글 작성하러 가기</ButtonText>
        </Link>
        <Link to={"/createPost"}>
          <ButtonImg src={RightIcon} alt="게시물 작성 버튼" />
        </Link>
      </BoardButton>
      <BoardWrapper>
        {postList?.map((post) => (
          <Board key={post.postId} value={post} />
        ))}
      </BoardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 25px;
  align-items: center;
`;

const BoardButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 19px;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;

const ButtonText = styled.p`
  font-family: Pretendard-Medium;
  font-size: 16px;
`;

const ButtonImg = styled.img`
  margin-left: auto;
`;

const ProfileImg = styled.img`
  display: flex;
  margin-left: auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const LogoImg = styled.img`
  margin-right: auto;
`;

const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
`;
