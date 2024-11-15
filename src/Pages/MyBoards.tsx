import styled from "styled-components";
import { Board } from "../Components/Home/Board";
import LeftIcon from "../Assets/img/SVG/leftIcon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetPostListResponse } from "../Apis/posts/type";
import { getMyPostList } from "../Apis/posts/posts";

export const MyBoards = () => {
  const [myList, setMyList] = useState<GetPostListResponse | null>(null);

  useEffect(() => {
    const myPostList = async () => {
      try {
        const response = await getMyPostList();
        setMyList(response.data);
      } catch (error) {
        console.error("데이터 로딩 오류:", error);
      }
    };
    myPostList();
  }, []);

  return (
    <Wrapper>
      <div style={{ display: "flex", gap: "5vw", alignItems: "center" }}>
        <Link to={"/mypage"}>
          <BackButton src={LeftIcon} />
        </Link>
        <p style={{ fontFamily: "Pretendard-SemiBold", fontSize: "23px" }}>
          내가 쓴 게시물
        </p>
      </div>
      <BoardWrapper>
        {myList?.map((element) => (
          <Board key={element.postId} value={element} />
        ))}
      </BoardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 25px;
`;

const BackButton = styled.img`
  width: 5px;
  height: 13px;
`;

const BoardWrapper = styled.div`
  margin-top: 45px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
`;
