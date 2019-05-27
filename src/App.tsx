import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const processFile = require("./processFile");

import { SelectScreen } from "./components/SelectScreen";
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
  const [error, setError] = React.useState("");
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
    setProcessedImage(base64File);
    setProcessing(false);
    setBase64(base64File);
  };

  const reset: () => void = () => {
    setBase64("");
    setProcessedImage("");
  };

  return (
    <StyledContainer image={processedImage} onDragOver={handleDragOver}>
      {!processing && !base64 && (
        <SelectScreen
          handleProcess={processFileAndSetBase64}
          processing={processing}
        />
      )}
      {base64 && <ResultBase64 base64={base64} goBack={reset} />}
    </StyledContainer>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
export = App;
