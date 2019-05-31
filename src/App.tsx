import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

const processFile = require("./processFile");
const utils = require("./lib/utils");

import { SelectScreen } from "./components/SelectScreen";
import { ResultBase64 } from "./components/ResultBase64";
import { Error } from "./components/Error";

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
    if (utils.isRightImageType(file.type)) {
      // @ts-ignore
      const base64File = await processFile(file.path);
      setProcessedImage(base64File);
      setBase64(base64File);
    } else {
      newError(
        "We couldn't process the selected file. Are you sure it's an image?"
      );
    }
    setProcessing(false);
  };

  const newError: (string) => void = error => {
    setError(error);
    setTimeout(() => setError(""), 3000);
  };

  const reset: () => void = () => {
    setBase64("");
    setProcessedImage("");
  };

  return (
    <StyledContainer image={processedImage} onDragOver={handleDragOver}>
      <Error error={error} />
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
