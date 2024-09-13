import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Color } from "../styles/Color";

interface TextareaProps {
  onValueChange: (hasValue: boolean) => void;
}

export const Textarea: React.FC<TextareaProps> = ({ onValueChange }) => {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = event.target.value;
    setValue(v);
    onValueChange(v.trim().length > 0);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "0px";
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + "px";
    }
  }, [value]);
  return (
    <TextArea
      placeholder="ex)하지만 맛있는거지"
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
};

const TextArea = styled.textarea`
  width: 85vw;
  min-height: 45px;
  overflow: hidden;
  font-family: Pretendard-Light;
  font-size: 15px;
  padding: 10px 15px;
  border: 1px solid ${Color.color1};
  border-radius: 5px;
  :focus {
    border: 1px solid ${Color.color2};
  }
`;
