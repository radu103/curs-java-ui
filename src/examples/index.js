import React from "react";
import { Stack } from "react-ui";

import { Simple } from "./simple";
import { Airline } from "./airline";
import { Hotel } from "./hotel";
import { Tweet } from "./tweet";

const Examples = () => (
  <Stack direction="vertical" gap={8}>
    <Simple />
    <Airline />
    <Hotel />
    <Tweet />
  </Stack>
);
export default Examples;
