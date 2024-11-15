import { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoPreview from "../Assets/img/PNG/photoPreview.png";

interface FileInputProps {
  onFileUpload: (file: File | null) => void;
  existingImageUrl?: string | null;
}

export const FileInput = ({
  onFileUpload,
  existingImageUrl,
}: FileInputProps) => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  useEffect(() => {
    if (existingImageUrl) {
      setLogoPreview(existingImageUrl);
    }
  }, [existingImageUrl]);

  console.log(existingImageUrl);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
        onFileUpload(selectedFile);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setLogoPreview(null);
      onFileUpload(null);
    }
  };

  return (
    <PhotoInputWrapper>
      {logoPreview ? (
        <img
          src={logoPreview}
          alt="로고 미리보기"
          style={{
            width: "85vw",
            height: "210px",
            borderRadius: "5px",
          }}
        />
      ) : (
        <img
          src={PhotoPreview}
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
