import { useState } from "react";
import styled from "styled-components";
import PhotoPreview from "../Assets/img/PNG/photoPreview.png";

export const FileInput = ({
  onFileUpload,
}: {
  onFileUpload: (isUploaded: boolean) => void;
}) => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
        onFileUpload(true);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setLogoPreview(null);
      onFileUpload(false);
    }
  };

  return (
    <PhotoInputWrapper>
      {logoPreview ? (
        <img
          src={logoPreview} // 선택한 이미지의 URL 사용
          alt="로고 미리보기"
          style={{
            width: "85vw",
            height: "210px",
            borderRadius: "5px",
          }}
        />
      ) : (
        <img
          src={PhotoPreview} // 기본 미리보기 이미지 사용
          alt="로고 미리보기"
          style={{
            width: "85vw",
            height: "210px",
            borderRadius: "5px",
          }}
        />
      )}
      <PhotoInput type="file" onChange={handleFileChange} />
    </PhotoInputWrapper>
  );
};

const PhotoInputWrapper = styled.div`
  width: 85vw;
  height: 210px;
  position: relative;
`;

const PhotoInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0; /* 파일 입력이 보이지 않도록 투명하게 설정 */
  cursor: pointer;
`;
