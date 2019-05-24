import * as React from 'react';

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileDragger: React.FunctionComponent<Props> = (props) => {
  const {handleChange} = props;
  return (
    <label>
      Choose picture
      <input type="file" id="picture-upload" onChange={handleChange} />
    </label>
  );
}