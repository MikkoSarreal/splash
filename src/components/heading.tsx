import * as React from "react";
import styled from "styled-components";

const HeadingStyled = styled.h1`
    font-family: 'Rohn Rounded', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-weight: 800;
    font-style: italic;
    color: #FFF;
    margin-top: 10px;
    font-size: 1.2rem;
`;

const Heading = ({ children }: { children: React.ReactNode }) => (
  <HeadingStyled>
    {children}
  </HeadingStyled>
);

export default Heading;
