import React from "react"
import Link from "next/link"
import {useRouter} from 'next/router';
import { rhythm, scale } from "./utils/typography";
import styled from 'styled-components';

const HeaderFlex = styled.header`
	display: flex;
  justify-content: space-between;
`;

interface HeaderProps {
	title: string;
}

export default function Header() {
  return (
    <HeaderFlex>
      <div>
        <Link href={"/about"}>About</Link>
      </div>
    </HeaderFlex>
  )
}
