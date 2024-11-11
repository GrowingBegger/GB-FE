import styled from "styled-components";
import DeleteIcon from "../../Assets/img/SVG/deleteIcon.svg";
import EditIcon from "../../Assets/img/SVG/editIcon.svg";
import { PayNotification } from "./PayNotification";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "../Common/Modal";
import { GetPostListResponse } from "../../Apis/posts/type";
import { getPostList } from "../../Apis/posts/posts";
import ProfileIcon from "../../Assets/img/SVG/profileIcon.svg";

export const Board = ({ postId }: { postId?: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postList, setPostList] = useState<GetPostListResponse[]>([]);

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const response = await getPostList();
        setPostList(
          Array.isArray(response.data) ? response.data : [response.data]
        );
      } catch (error) {
        console.error("데이터 로딩 오류:", error);
      }
    };

    fetchPostList();
  }, []);

  return (
    <>
      {postList
        .filter((post) => !postId || post.postId === postId)
        .map((element) => (
          <BoardContainer key={element.postId}>
            <HeaderWrapper>
              <ProfileWrapper>
                <ProfileImg src={element.writerImageUrl} alt="프로필" />
                <ProfileBox>
                  <Name>{element.writerName}</Name>
                  <Date>{element.createdAt.split("T")[0]}</Date>
                </ProfileBox>
              </ProfileWrapper>
              <IconWrapper>
                <img
                  src={DeleteIcon}
                  alt="삭제"
                  onClick={() => setIsModalOpen(true)}
                />
                <Link to={"/createpost"}>
                  <img src={EditIcon} alt="수정" />
                </Link>
              </IconWrapper>
            </HeaderWrapper>
            <PayNotification
              title={element.title ?? ""}
              price={element.price ?? 0}
            />
            <Link to={`/posts/${element.postId}`}>
              <Img src={element.imageUrl} alt="게시물 이미지" />
            </Link>
            <Link to={`/posts/${element.postId}`}>
              <Content>{element.content}</Content>
            </Link>
          </BoardContainer>
        ))}
      {isModalOpen && (
        <Modal
          titleText={{ before: "게시물을", after: "하시겠습니까?" }}
          pointText="삭제"
          contentText="작성한 게시물이 삭제됩니다"
          onCancel={() => setIsModalOpen(false)}
          onConfirm={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

const BoardContainer = styled.div`
  width: 100%;
  height: 401px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: white;
  gap: 15px;
  padding: 15px;
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;

const Img = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 200px;
`;

const Content = styled.p`
  font-family: Pretendard-Medium;
  font-size: 15px;
`;

const HeaderWrapper = styled.div`
  display: flex;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  gap: 10px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ProfileImg = styled.img`
  width: 41px;
  height: 41px;
`;

const Name = styled.p`
  font-family: Pretendard-Medium;
  font-size: 15px;
`;

const Date = styled.p`
  font-family: Pretendard-Light;
  color: rgba(0, 0, 0, 0.43);
  font-size: 12px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: auto;
`;
