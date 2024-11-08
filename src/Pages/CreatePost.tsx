import { useState } from "react";
import styled from "styled-components";
import { LoginInput } from "../Components/LoginInput";
import back from "../Assets/img/SVG/back.svg";
import { Color } from "../styles/Color";
import { FileInput } from "../Components/FileInput";
import Button from "../Components/Common/Button";
import { Textarea } from "../Components/Textarea";
import { Link, useNavigate } from "react-router-dom";
import { createPost, FileUpload } from "../Apis/posts/posts";

export const CreatePost = () => {
  const [price, setPrice] = useState(0);
  const [itemName, setItemName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const navigate = useNavigate();

  const isFormValid =
    price > 0 &&
    itemName.trim() !== "" &&
    content.trim() !== "" &&
    fileUploaded;

  const handleFileUpload = (file: File | null) => {
    if (file) {
      setImage(file);
      setFileUploaded(true);
    } else {
      setImage(null);
      setFileUploaded(false);
    }
  };

  const handleCreatePost = async () => {
    try {
      const response = await createPost({
        title: itemName,
        content: content,
        price: price,
      });

      const postId = response.data.id;
      if (image) {
        await FileUpload(postId, image);
      }
      console.log("게시글이 성공적으로 작성되었습니다!");
      navigate("/");
    } catch (error) {
      console.error("게시물 생성 오류:", error);
    }
  };

  return (
    <Container>
      <div style={{ display: "flex", gap: "5vw", alignItems: "center" }}>
        <Link to={"/"}>
          <Back src={back} />
        </Link>
        <Title>{isFormValid ? "게시글 수정" : "게시글 작성"}</Title>
      </div>
      <InputWrapper>
        <Input>
          <Text>
            <Name>사진</Name>
            <Star>*</Star>
          </Text>
          <FileInput onFileUpload={handleFileUpload} />
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
            onValueChange={(hasValue) => setContent(hasValue ? "valid" : "")}
          />
        </Input>
      </InputWrapper>
      <Button
        backgroundColor={isFormValid ? "orange" : "gray"}
        content="게시하기"
        disabled={!isFormValid}
        onClick={handleCreatePost}
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
