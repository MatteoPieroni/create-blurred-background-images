import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const processFile = require("./processFile");

import { SelectScreen } from "./components/SelectScreen";
import { ProcessingScreen } from "./components/ProcessingScreen";
import { ResultBase64 } from "./components/ResultBase64";

const StyledContainer = styled.div`
  height: 100%;
  background-color: #4056a1;
  background-image: url(${props => (props.image ? props.image : "")});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const App: React.FunctionComponent = () => {
  const [base64, setBase64] = React.useState("");
  const [processing, setProcessing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);
  const [processedImage, setProcessedImage] = React.useState("");

  const handleDragOver: (
    event: React.DragEvent<HTMLDivElement>
  ) => void = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  const processFileAndSetBase64: (file: File) => void = async file => {
    setProcessing(true);
    // @ts-ignore
    const base64File = await processFile(file.path);
    console.log(base64File);
    setBase64(base64File);
    setProcessedImage(base64File);
    setProcessing(false);
  };

  return (
    <StyledContainer image={processedImage} onDragOver={handleDragOver}>
      {!processing && !base64 && (
        <SelectScreen handleProcess={processFileAndSetBase64} />
      )}
      {processing && <ProcessingScreen isProcessing={processing} />}
      {base64 && <ResultBase64 base64={base64} />}
    </StyledContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
export = App;
