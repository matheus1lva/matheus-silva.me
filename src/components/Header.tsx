import React from "react"
import { Link } from "./Link"
import styled from "styled-components"
import config from "./config"

const TitleLink = styled(Link)`
  text-decoration: none;
  font-size: 33px;
`

const HeaderFlex = styled.header`
  display: flex;
  justify-content: space-between;
`

export default function Header() {
  return (
    <HeaderFlex>
      <TitleLink href={`/`}>{config.title}</TitleLink>
      <div>
        <Link href={"/about"}>About</Link>
      </div>
    </HeaderFlex>
  )
}
