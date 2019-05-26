import * as React from "react";

export interface IProcessingScreenProps {
  isProcessing: boolean;
  success?: boolean;
  failure?: boolean;
}

export function ProcessingScreen(props: IProcessingScreenProps) {
  const { isProcessing } = props;
  return isProcessing ? <div>Working</div> : null;
}
