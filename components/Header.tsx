import React from "react"
import Link from "next/link"
import { useRouter } from 'next/router';
import { rhythm, scale } from "./utils/typography";
import styled from 'styled-components';
import config from './config';

const HeaderFlex = styled.header`
	display: flex;
  justify-content: space-between;
`;


interface HeaderProps {
  title: string;
}

export default function Header() {
  const router = useRouter();
  const path = router.asPath;
  let header = null;

  if (path === "/") {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          href={`/`}
        >
          {config.title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          href={`/`}
        >
          {config.title}
        </Link>
      </h3>
    )
  }
  return (
    <header
    >
      <div>{header}</div>
      <div>
        <Link href={"/about"}>About</Link>
      </div>
    </header>
  )
}
