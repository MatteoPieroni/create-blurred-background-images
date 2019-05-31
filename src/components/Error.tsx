import * as React from "react";
import styled from "styled-components";

export interface IErrorProps {
  error: string;
}

const StyledError = styled.div`
  position: fixed;
  bottom: -100%;
  left: 1rem;
  border-radius: 5px;
  padding: 1rem;
  width: 45%;
  background: #f13c20;
  color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
  &.shown {
    bottom: 2rem;
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
  }
  p {
    margin: 0;
  }
`;

export function Error(props: IErrorProps) {
  const { error } = props;
  return (
    <StyledError className={error && "shown"}>
      <p>
        Oops! There has been an error:
        <br />
        {error}
      </p>
    </StyledError>
  );
}
