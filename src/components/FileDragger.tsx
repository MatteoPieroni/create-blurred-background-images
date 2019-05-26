import * as React from "react";

interface Props {
  handleDrop: (files: File) => void;
  className: string;
}

export const FileDragger: React.FunctionComponent<Props> = props => {
  const { className, handleDrop } = props;

  const _handleDrop: (
    event: React.DragEvent<HTMLDivElement>
  ) => void = event => {
    event.preventDefault();
    event.stopPropagation();
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
