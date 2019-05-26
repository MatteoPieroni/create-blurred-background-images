import * as React from "react";
import styled from "styled-components";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadInput = styled.label`
  display: inline-block;
  margin-bottom: 2rem;
  border-radius: 5px;
  padding: 1rem 5rem;
  background: #fff;
  text-align: center;
  font-weight: 600;
  color: #f13c20;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: #f13c20;
    color: #fff;
  }
  input {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const FileSelector: React.FunctionComponent<Props> = (props: Props) => {
  const { handleChange } = props;
  return (
    <UploadInput>
      Choose picture!
      <input type="file" id="picture-upload" onChange={handleChange} />
    </UploadInput>
  );
};
