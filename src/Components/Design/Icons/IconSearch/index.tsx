import React, { FC } from "react";

import { IconProps, dimension } from "../types";

export const IconSearch: FC<IconProps> = ({
  className,
  size = `small`,
  color = `#0C0C0C`,
}) => (
  <svg
    className={className}
    width={dimension[size]}
    height={dimension[size]}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 12C13.3137 12 16 9.31371 16 6C16 2.68629 13.3137 0 10 0C6.68629 0 4 2.68629 4 6C4 6.92629 4.2099 7.80356 4.58474 8.58683L1.10338 12.0682L1.10349 12.0683C0.731171 12.4315 0.5 12.9388 0.5 13.5C0.5 14.6046 1.39543 15.5 2.5 15.5C3.06123 15.5 3.56847 15.2688 3.9317 14.8965L3.93181 14.8966L7.41317 11.4153C8.19644 11.7901 9.07371 12 10 12ZM10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8Z"
      fill={color}
    />
  </svg>
);
