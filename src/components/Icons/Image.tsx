import * as React from "react";

export interface IImageProps {
  className: string;
}

export function Image(props: IImageProps) {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 54"
      width="56"
      height="54"
      className={className}
    >
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
          <path d="M-329 -211L471 -211L471 389L-329 389Z" />
        </clipPath>
      </defs>
      <style>
        {`
          tspan {white - space: pre }
          .shp0 {opacity: 0.102;fill: #a66df5 }
          .shp1 {fill: #a66df5 }
        `}
      </style>
      <g id="Dribbble Copy" clipPath="url(#cp1)">
        <g id="4">
          <path
            id="Shape"
            className="shp0"
            d="M40.97,0.23h-37.14c-1.81,0 -3.29,1.48 -3.29,3.29v36.33c0,1.81 1.48,3.29 3.29,3.29h37.14c1.81,0 3.29,-1.48 3.29,-3.29v-36.33c0,-1.81 -1.48,-3.29 -3.29,-3.29z"
          />
          <path
            id="Shape"
            className="shp1"
            d="M53.06,11.77v36.33c0,1.81 -1.48,3.29 -3.29,3.29h-37.14c-1.81,0 -3.29,-1.48 -3.29,-3.29v-36.33c0,-1.81 1.48,-3.29 3.29,-3.29h37.14c1.81,0 3.29,1.48 3.29,3.29zM12.63,6.29c-3.03,0 -5.48,2.46 -5.48,5.48v36.33c0,3.03 2.46,5.48 5.48,5.48h37.14c3.03,0 5.48,-2.46 5.48,-5.48v-36.33c0,-3.03 -2.46,-5.48 -5.48,-5.48z"
          />
          <path
            id="Combined Shape"
            className="shp1"
            d="M44.64,39.98v-6.31c0,-0.22 -0.08,-0.44 -0.21,-0.61l-5.22,-6.77c-0.35,-0.46 -1.02,-0.53 -1.46,-0.14l-9.19,8.12c-0.35,0.3 -0.83,0.34 -1.22,0.09l-4.78,-3.12c-0.46,-0.29 -1.05,-0.18 -1.37,0.26l-3.51,4.96c-0.12,0.17 -0.18,0.37 -0.18,0.58v2.75c0,0.56 0.46,1.01 1.01,1.01h25.33c0.44,0 0.8,-0.36 0.8,-0.8zM24.4,26.72c0,1.84 1.48,3.34 3.3,3.34c1.83,0 3.31,-1.5 3.31,-3.34c0,-1.84 -1.48,-3.34 -3.31,-3.34c-1.82,0 -3.3,1.5 -3.3,3.34z"
          />
        </g>
      </g>
    </svg>
  );
}
