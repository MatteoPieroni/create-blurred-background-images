import * as React from "react";

export interface IResultBase64Props {
  base64: string;
}

export function ResultBase64(props: IResultBase64Props) {
  const { base64 } = props;
  return (
    <div>
      <textarea readOnly value={base64} />
    </div>
  );
}
