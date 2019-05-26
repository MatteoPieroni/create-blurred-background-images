import * as React from "react";

interface Props {
  handleDrop: (files: File) => void;
}

export const FileDragger: React.FunctionComponent<Props> = props => {
  const { handleDrop } = props;

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

  return <div onDrop={_handleDrop}>{props.children}</div>;
};
