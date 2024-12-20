import styled from "styled-components";
import LeftIcon from "../Assets/img/SVG/smallLeftIcon.svg";
import SendIcon from "../Assets/img/SVG/sendIcon.svg";
import { Board } from "../Components/Home/Board";
import { ReactionBox } from "../Components/BoardDetail/ReactionBox";
import { CommentBox } from "../Components/BoardDetail/CommentBox";
import { Color } from "../styles/Color";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetPostDetailResponse, Value } from "../Apis/posts/type";
import { PostDetail } from "../Apis/posts/posts";
import { createComment } from "../Apis/comments/comments";

export const BoardDetail = () => {
    const { postId } = useParams<{ postId: string }>();
    const [post, setPost] = useState<GetPostDetailResponse | null>(null);
    const [commentContent, setCommentContent] = useState("");

    useEffect(() => {
        const fetchPostDetail = async () => {
            if (!postId) return;
            try {
                const response = await PostDetail(Number(postId));
                setPost(response.data);
            } catch (error) {
                console.error("데이터 로딩 오류:", error);
            }
        };

        fetchPostDetail();
    }, [postId]);

    const handleSendComment = async () => {
        if (!commentContent.trim()) return;
        try {
            await createComment(Number(postId), commentContent);
            setCommentContent("");
            const response = await PostDetail(Number(postId));
            setPost(response.data);
        } catch (error) {
            console.error("댓글 전송 오류: ", error);
        }
    };

    const transformPostToValue = (post: GetPostDetailResponse): Value => ({
        postId: post.post.id,
        title: post.post.title,
        content: post.post.content,
        price: post.post.price,
        imageUrl: post.post.image_url,
        writerName: post.post.user.nickname,
        writerImageUrl: post.post.user.profile,
        createdAt: post.post.created_at,
    });

    return (
        <Wrapper>
            <Wrap>
                <Link to={"/main"}>
                    <BackButtonWrapper>
                        <img src={LeftIcon} alt="뒤로가기" />
                        <p style={{ fontFamily: "Pretendard-Regular", fontSize: "13px" }}>뒤로가기</p>
                    </BackButtonWrapper>
                </Link>
            </Wrap>
            {post && <Board value={transformPostToValue(post)} />}
            {post && <ReactionBox likes={post.likes} postId={Number(postId)} />}
            <Line />
            <CommentTitle>댓글</CommentTitle>
            <CommentWrapper>
                {post?.comment.map((comment, index) => (
                    <CommentBox key={index} comment={comment} />
                ))}
            </CommentWrapper>
            <CommentInputWrapper>
                <CommentInput
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    placeholder="댓글을 입력해주세요"
                ></CommentInput>
                <img src={SendIcon} alt="보내기" onClick={handleSendComment} />
            </CommentInputWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`;

const BackButtonWrapper = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 14px;
    margin-top: 25px;
`;

const Line = styled.div`
    width: 100%;
    height: 3px;
    border-radius: 30px;
    background-color: ${Color.color1};
    margin-top: 20px;
    margin-bottom: 15px;
`;

const CommentTitle = styled.p`
    font-family: Pretendard-SemiBold;
    font-size: 15px;
    margin-bottom: 15px;
    align-self: flex-start;
`;

const CommentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
    width: 100%;
`;

const CommentInputWrapper = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: center;
    margin-bottom: 30px;
`;

const CommentInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #cdcdcd;
    border-radius: 5px;
    padding-left: 15px;
    font-family: Pretendard-Light;
    font-size: 15px;
`;
