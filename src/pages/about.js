import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div style={{ marginTop: `30px`}}>
        <h4>Who am i</h4>
        <p>
          I'm a open source oriented developer, i tend to whatever i do think
          about others first and think if anything that can be done can be open
          sourced. SInce the beginning this made me grow so much! I was capable of
          learning best practices in all scenarios, new tools, new ways of coding!
          Everything! The way that a product and a project should grow is end user
          first!
        </p>
        <p>
          When we developers are building something should be thinking how
          the end user will use it, and ship it as fast as possible! We need
          better tools and better development approach to be capable of tieing
          those two things together, which is what i'm always doing: tie high
          maintainability with customer experience and how we can aggregate value
          to the end user! And of course, i'm always worried with too much
          abstractions and too little, because either can be a problem! Anyone can
          expect from me simplicity, i'll always start from the simplest solution
          first, than iterate over and figure out what is the best!
        </p>

        <div>
          <h4></h4>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
