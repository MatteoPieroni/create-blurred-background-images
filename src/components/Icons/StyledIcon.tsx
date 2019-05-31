import styled from "styled-components";

export const StyledIcon = styled.svg`
  display: block;
  padding: 5px 10px;
  width: 25px;

  &.rotate {
    transform: rotate(0.5turn);
    .fill {
      width: 80%;
    }
  }
  .back {
    fill: none;
  }
  .fill {
    fill: #fff;
  }
  &.translate .fill {
    transform: translateY(-5px);
  }
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
