import * as React from "react";
import styled from "styled-components";

const LinkTag = styled.a`
    color: #EF3B25;
`

const Link = ({ url, children }: { url: string, children: React.ReactNode }) => (
  <LinkTag href={url}>
    {children}
  </LinkTag>
);

export default Link;
