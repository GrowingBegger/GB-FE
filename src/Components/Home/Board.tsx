import styled from "styled-components";
import DeleteIcon from "../../Assets/img/SVG/deleteIcon.svg";
import EditIcon from "../../Assets/img/SVG/editIcon.svg";
import { PayNotification } from "./PayNotification";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Modal } from "../Common/Modal";
import { Value } from "../../Apis/posts/type";
import { postDelete } from "../../Apis/posts/posts";
import { Cookie } from "../../Utils/cookie";
import ProfileIcon from "../../Assets/img/SVG/profileIcon.svg";

export const Board = ({ value }: { value: Value }) => {
    const postId = value.postId;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleConfirm = () => {
        postDelete(postId)
            .then(() => {
                console.log("게시글이 삭제 되었습니다.");
                setIsModalOpen(false);
                window.location.reload();
            })
            .catch(() => {
                console.log("게시글 삭제 오류");
            });
    };
    useEffect(() => {
        if (value?.writerImageUrl) {
            const img = new Image();
            img.src = value.writerImageUrl;
            img.onload = () => setImageLoaded(true);
            img.onerror = () => setImageLoaded(false);
        }
    });

    const encodedNickname = Cookie.get("nickname");

    const decodedNickname = decodeURIComponent(encodedNickname);

    return (
        <>
            <BoardContainer key={value.postId}>
                <HeaderWrapper>
                    <ProfileWrapper>
                        <ProfileImg
                            backgroundImage={imageLoaded ? value?.writerImageUrl || ProfileIcon : ProfileIcon}
                        />
                        <ProfileBox>
                            <Name>{value.writerName}</Name>
                            <Date>{value.createdAt.split("T")[0]}</Date>
                        </ProfileBox>
                    </ProfileWrapper>
                    {decodedNickname === value.writerName && (
                        <IconWrapper>
                            <img src={DeleteIcon} alt="삭제" onClick={() => setIsModalOpen(true)} />
                            <Link to={`/createpost/${value.postId}`}>
                                <img src={EditIcon} alt="수정" />
                            </Link>
                        </IconWrapper>
                    )}
                </HeaderWrapper>
                <PayNotification title={value.title ?? ""} price={value.price ?? 0} />
                <Link to={`/posts/${value.postId}`}>
                    <Img src={value.imageUrl} alt="게시물 이미지" />
                </Link>
                <Link to={`/posts/${value.postId}`}>
                    <Content>{value.content}</Content>
                </Link>
            </BoardContainer>
            {isModalOpen && (
                <Modal
                    titleText={{ before: "게시물을", after: "하시겠습니까?" }}
                    pointText="삭제"
                    contentText="작성한 게시물이 삭제됩니다"
                    onCancel={() => setIsModalOpen(false)}
                    onConfirm={handleConfirm}
                />
            )}
        </>
    );
};

const BoardContainer = styled.div`
    width: 100%;
    height: 100%;
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

const ProfileImg = styled.div<{ backgroundImage: string }>`
    width: 41px;
    height: 41px;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
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
