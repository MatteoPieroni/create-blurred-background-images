import * as React from "react";
import * as ReactDOM from "react-dom";

const processFile = require("./processFile");

import { FileSelector } from "./components/FileSelector";
import { FileDragger } from "./components/FileDragger";

const App: React.FunctionComponent = () => {
  const [base64, setBase64] = React.useState("");

  const handleDragOver: (
    event: React.DragEvent<HTMLDivElement>
  ) => void = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  const processFileAndSetBase64: (file: File) => void = async file => {
    // @ts-ignore
    const base64File = await processFile(file.path);
    console.log(base64File);
    setBase64(base64File);
  };

  const handleChoose: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = async event => {
    event.preventDefault();
    event.stopPropagation();
    const { files } = event.target;
    if (files) {
      processFileAndSetBase64(files[0]);
    }
  };

  const handleDrop: (files: File) => void = async file => {
    processFileAndSetBase64(file);
  };

  return (
    <div onDragOver={handleDragOver}>
      <h1>Hi there</h1>
      <FileSelector handleChange={handleChoose} />
      <FileDragger handleDrop={handleDrop} />
      {base64}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
export = App;
