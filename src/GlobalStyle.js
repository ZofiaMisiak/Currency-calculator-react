import { createGlobalStyle } from "styled-components";
 import tlo from "./tlo.jpg";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

.body {
  font-family: "Times new roman", sans-serif;
  font-size:x-large;
  display: flex;
  justify-content: center;
  align-items: top;
  min-height: 800px;
  margin: 20px auto;
  padding: 0 20px;

  background-position: center;
  background-size:contain;
}
`;

  // background-image: url ("${tlo}");