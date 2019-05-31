import * as React from "react";

import { StyledIcon } from "./StyledIcon";
import { IIconProps } from "./IIcon";

export function Min(props: IIconProps) {
  const { className, handleClick } = props;
  return (
    <StyledIcon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      onClick={handleClick}
    >
      <path className="back" d="M0 0h24v24H0V0z" />
      <path
        className="fill"
        d="M7 19h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z"
      />
    </StyledIcon>
  );
}
