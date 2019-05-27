import * as React from "react";
import styled from "styled-components";

export interface IResultBase64Props {
  base64: string;
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  textarea {
    border: none;
    border-radius: 5px;
    padding: 1rem;
    width: 60%;
    height: 50%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    resize: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export function ResultBase64(props: IResultBase64Props) {
  const { base64 } = props;
  return (
    <StyledDiv>
      <textarea readOnly value={base64} />
    </StyledDiv>
  );
}
