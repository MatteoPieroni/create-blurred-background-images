import * as React from "react";
import styled from "styled-components";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadInput = styled.label`
  display: block;
  input {
    display: block;
  }
`;

export const FileSelector: React.FunctionComponent<Props> = props => {
  const { handleChange } = props;
  return (
    <UploadInput>
      Choose picture
      <input type="file" id="picture-upload" onChange={handleChange} />
    </UploadInput>
  );
};
