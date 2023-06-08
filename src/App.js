import React from "react";
import "./styles.css";

import { ThemeProvider } from "react-ui";
import { tokens, components } from "react-ui/themes/light";

import Cars from "./cars";

export default function App() {
  return (
    <ThemeProvider tokens={tokens} components={components}>
        <Cars/>
    </ThemeProvider>
  );
}