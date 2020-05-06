import React from "react"
import Header from "./Header"

import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <Header location={location} title={title} />
      <main>{children}</main>
      <footer>
        Made with love with Gatsby {'<'}3
      </footer>
    </div>
  )
}

export default Layout
