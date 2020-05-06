import React from 'react';
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

export default function Header({ location, title }) {
    const rootPath = `${__PATH_PREFIX__}/`
    let header
  
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
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
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
        <header
            style={{ 
                display: "flex",
                "justify-content": "space-between"
            }}
        >
            <div>
                {header}
            </div>
            <div>
                <Link to={"/about"}>About</Link>
            </div>
        </header>
    )
}