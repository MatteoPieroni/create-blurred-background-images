import * as React from "react";
import styled from "styled-components";
import { Button } from "./Button";

export interface IResultBase64Props {
  base64: string;
  goBack: () => void;
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  height: 100%;
  textarea {
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 2rem;
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
  const { base64, goBack } = props;
  const textAreaRef = React.useRef(null);

  const copyToClipboard: (base64: string) => void = base64 => {
    textAreaRef.current.select();
    document.execCommand("copy");
  };

  return (
    <StyledDiv>
      <textarea ref={textAreaRef} readOnly value={base64} />
      <Button ghost handleClick={goBack}>
        One more!
      </Button>
      <Button handleClick={copyToClipboard}>Copy to clipboard</Button>
    </StyledDiv>
  );
}
