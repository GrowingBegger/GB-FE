import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Color } from "../styles/Color";

interface TextareaProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const Textarea: React.FC<TextareaProps> = ({ value, onValueChange }) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = event.target.value;
    onValueChange(v);
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
