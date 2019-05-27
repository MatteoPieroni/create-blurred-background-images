import * as React from "react";

interface IFileDragger {
  handleDrop: (files: File) => void;
  className: string;
  processing: boolean;
}

export const FileDragger: React.FunctionComponent<IFileDragger> = props => {
  const { className, handleDrop, processing } = props;

  const _handleDrop: (
    event: React.DragEvent<HTMLDivElement>
  ) => void = event => {
    event.preventDefault();
    event.stopPropagation();
    if (processing) return;
    const { dataTransfer } = event;
    if (dataTransfer.files) {
      handleDrop(dataTransfer.files[0]);
    }
  };

  return (
    <div className={className} onDrop={_handleDrop}>
      {props.children}
    </div>
  );
};
