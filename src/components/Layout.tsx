import React from "react"
import Header from "./Header"
import Bio from './Bio';
import { rhythm as rh} from "./utils/typography"
import styled from "styled-components";

const Footer = styled.footer`
  margin-top:30px;
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${() => {
    return rh(24)
  }};
  padding: ${() => {
   return `${rh(1.5)} ${rh(3 / 4)}`;
  }};
`;

const Children = styled.div`
  margin-top: 30px;
  font-family: Montserrat;
`;

const Layout = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <Body>
      <Header />
      <Bio />
      <Children>{children}</Children>
      <Footer>Matheus Silva - Made with Next.js {"<"}3</Footer>
    </Body>
  )
}

export default Layout
