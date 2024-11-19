import { useEffect, useState } from "react";
import styled from "styled-components";
import { LoginInput } from "../Components/LoginInput";
import back from "../Assets/img/SVG/back.svg";
import { Color } from "../styles/Color";
import { FileInput } from "../Components/FileInput";
import Button from "../Components/Common/Button";
import { Textarea } from "../Components/Textarea";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  createPost,
  FileUpload,
  PostDetail,
  postUpdate,
} from "../Apis/posts/posts";

export const CreatePost = () => {
  const { postId } = useParams<{ postId: string }>();
  const numericPostId = postId ? parseInt(postId, 10) : null;
  const [price, setPrice] = useState(0);
  const [itemName, setItemName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const isEditMode = Boolean(numericPostId);

  const isFormValid =
    price > 0 &&
    itemName &&
    itemName.trim() !== "" &&
    content &&
    content.trim() !== "" &&
    fileUploaded;

  useEffect(() => {
    if (isEditMode && numericPostId !== null) {
      const fetchPostData = async () => {
        try {
          const response = await PostDetail(numericPostId);
          const post = response.data.post;
          console.log(response.data.post.content);

          setItemName(post.title);
          setContent(post.content);
          setPrice(post.price);
          setExistingImageUrl(post.image_url || null);
        } catch (error) {
          console.error("게시글 로딩 오류:", error);
        }
      };
      fetchPostData();
    }
  }, [isEditMode, numericPostId]);

  const handleFileUpload = (file: File | null) => {
    if (file) {
      setImage(file);
      setFileUploaded(true);
    } else {
      setImage(null);
      setFileUploaded(false);
    }
  };

  const handleSubmit = async () => {
    try {
      if (isEditMode && numericPostId !== null) {
        await postUpdate(numericPostId, {
          title: itemName,
          content: content,
          price: price,
        });
        if (image) {
          await FileUpload(numericPostId, image);
        }
        console.log("게시글이 성공적으로 수정되었습니다!");
        navigate(-1);
      } else {
        const response = await createPost({
          title: itemName,
          content: content,
          price: price,
        });
        const newPostId = response.data.id;
        if (image && newPostId) {
          await FileUpload(newPostId, image);
        }
      }
      console.log("게시글이 성공적으로 작성되었습니다!");
      navigate("/main");
    } catch (error) {
      console.error("게시물 생성 오류:", error);
    }
  };

  return (
    <Container>
      <div style={{ display: "flex", gap: "5vw", alignItems: "center" }}>
        <Link to={"/main"}>
          <Back src={back} />
        </Link>
        <Title>{isEditMode ? "게시글 수정" : "게시글 작성"}</Title>
      </div>
      <InputWrapper>
        <Input>
          <Text>
            <Name>사진</Name>
            <Star>*</Star>
          </Text>
          <FileInput
            onFileUpload={handleFileUpload}
            existingImageUrl={existingImageUrl}
          />
        </Input>
        <Input>
          <Text>
            <Name>가격</Name>
            <Star>*</Star>
          </Text>
          <LoginInput
            placeholder=""
            value={price.toString()}
            onChange={(e) => {
              const numericValue = parseInt(e.target.value, 10);
              setPrice(isNaN(numericValue) ? 0 : numericValue);
            }}
            isUnit={true}
          />
        </Input>
        <Input>
          <Text>
            <Name>지출명</Name>
            <Star>*</Star>
          </Text>
          <LoginInput
            placeholder="ex)요아정, 보노보노 인형"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </Input>
        <Input>
          <Text>
            <Name>글 작성</Name>
            <Star>*</Star>
          </Text>
          <Textarea
            value={content}
            onValueChange={(value) => setContent(value)}
          />
        </Input>
      </InputWrapper>
      <Button
        backgroundColor={isFormValid ? "orange" : "gray"}
        content="게시하기"
        disabled={!isFormValid}
        onClick={handleSubmit}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 90px;
  > Button {
    position: fixed;
    bottom: 30px;
  }
`;

const Back = styled.img`
  width: 5px;
  height: 13px;
`;

const Title = styled.p`
  font-family: "Pretendard-SemiBold";
  font-size: 23px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13vw;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Text = styled.div`
  display: flex;
  gap: 2px;
`;

const Name = styled.p`
  font-family: "Pretendard-Regular";
  font-size: 15px;
`;

const Star = styled.p`
  font-family: "Pretendard-Light";
  color: ${Color.color2};
  font-size: 15px;
`;
