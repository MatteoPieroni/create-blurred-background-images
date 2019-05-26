import * as React from "react";

import { FileSelector } from "./FileSelector";
import { FileDragger } from "./FileDragger";
import { Image } from "./Icons/Image";

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
    <div className="file-dropper">
      <FileDragger handleDrop={handleDrop}>
        <Image className="image-svg" />
        <h1>Drag and drop your file here</h1>
        <FileSelector handleChange={handleChoose} />
      </FileDragger>
    </div>
  );
}
