import * as React from "react";
import styled from "styled-components";

export interface IButtonProps {
  handleClick: (args: any) => void;
  ghost?: boolean;
}

const StyledButton = styled.button`
  display: inline-block;
  margin-bottom: 2rem;
  margin-right: 1rem;
  border: none;
  border-radius: 5px;
  padding: 1rem 0;
  width: 27%;
  background: ${props => (props.ghost ? "transparent" : "#fff")};
  text-align: center;
  font-weight: 600;
  color: #f13c20;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: #f13c20;
    color: #fff;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Button: React.FunctionComponent<IButtonProps> = props => {
  const { handleClick } = props;

  return <StyledButton onClick={handleClick}>{props.children}</StyledButton>;
};
