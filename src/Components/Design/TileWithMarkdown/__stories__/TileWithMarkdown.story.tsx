import { storiesOf } from "@storybook/react";
import React from "react";

import { TileWithMarkdown } from "../";

storiesOf(`Design/Tile`, module).add(`tile`, () => (
  <>
    <TileWithMarkdown input="# This is a header\n\nAnd this is a paragraph" />
  </>
));
