import * as React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonWrap onClick={onClick}>{children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
