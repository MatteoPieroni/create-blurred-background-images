import * as React from "react";
import styled from "styled-components";

import { FileSelector } from "./FileSelector";
import { FileDragger } from "./FileDragger";
import { Image } from "./Icons/Image";

const StyledDiv = styled.div`
  height: 100%;
  .file-dropper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    color: #fff;
    svg {
      width: 25%;
    }
  }
`;

export interface ISelectScreenProps {
  handleProcess: (file: File) => void;
}

export function SelectScreen(props: ISelectScreenProps) {
  const { handleProcess } = props;

  const handleChoose: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = async event => {
    event.preventDefault();
    event.stopPropagation();
    const { files } = event.target;
    if (files) {
      handleProcess(files[0]);
    }
  };

  const handleDrop: (files: File) => void = async file => {
    handleProcess(file);
  };

  return (
    <StyledDiv>
      <FileDragger className="file-dropper" handleDrop={handleDrop}>
        <Image className="image-svg" />
        <h1>Drag and drop your file here</h1>
        <FileSelector handleChange={handleChoose} />
      </FileDragger>
    </StyledDiv>
  );
}
