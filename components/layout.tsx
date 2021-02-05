import React from "react"
import Header from "./Header"

import { rhythm } from "./utils/typography"

const Layout = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header />
      <main>{children}</main>
      <footer>Matheus Silva - Made with love with Gatsby {"<"}3</footer>
    </div>
  )
}

export default Layout
