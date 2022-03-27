import * as React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
      font-family: "Rohn Rounded";
      src: url("/fonts/RohnRounded-BlackItalic.ttf") format("truetype");
      font-weight: 800;
      font-style: italic;
      font-display: swap;
    }

    @font-face {
      font-family: "Rohn Rounded";
      src: url("/fonts/RohnRounded-Regular.ttf") format("truetype");
      font-weight: 400;
      font-display: swap;
    }


    font-size: 16px;
    
    body {
      font-family: 'Rohn Rounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
    }
`;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default Layout;
