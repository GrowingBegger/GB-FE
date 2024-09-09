import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../styles/Color";
import closeEye from "../Assets/img/SVG/closeEye.svg";
import openEye from "../Assets/img/SVG/openEye.svg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  isPassword?: boolean;
}

export const LoginInput: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  isPassword = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputWrapper>
      <StyledInput
        type={isPassword && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {isPassword && (
        <EyeIcon
          src={showPassword ? openEye : closeEye}
          onClick={handleTogglePassword}
        />
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  width: 360px;
  height: 45px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  font-family: Pretendard-Light;
  font-size: 15px;
  padding: 0 15px;
  border: 1px solid ${Color.color1};
  border-radius: 5px;
  :focus {
    border: 1px solid ${Color.color2};
  }
`;

const EyeIcon = styled.img`
  width: 20px;
  height: 14px;
  position: absolute;
  right: 10px;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
`;
