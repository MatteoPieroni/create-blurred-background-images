import * as React from "react";
import styled from "styled-components";
const remote = require("electron").remote;
const window = remote.getCurrentWindow();

import { Max } from "./Icons/Maximize";
import { Min } from "./Icons/Minimize";
import { Close } from "./Icons/Close";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export function NavBar() {
  return (
    <StyledNav>
      <Min className="translate" handleClick={() => window.minimize()} />
      <Max
        className="rotate"
        handleClick={() =>
          window.isMaximized() ? window.unmaximize() : window.maximize()
        }
      />
      <Close handleClick={() => window.close()} />
    </StyledNav>
  );
}
