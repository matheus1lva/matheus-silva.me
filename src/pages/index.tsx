import Layout from "../components/Layout"
import { getAllPosts } from "../../lib/api"
import { Link } from "../components/Link"
import Post from "../../types/post"
import { rhythm } from "../components/utils/typography"
import { format } from "date-fns"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const PostTitle = styled(Link)`
  text-decoration: underline;
`

interface Props {
  allPosts: Post[]
  children: React.ReactNode
}

const Index = (props: Props) => {
  const { allPosts } = props;
  console.log(allPosts);
  return (
    <Layout>
      <Helmet>
        <title>Matheus Silva</title>
      </Helmet>
      {allPosts.map(post => {
        const title = post.title
        return (
          <article key={post.id}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <PostTitle href={`/posts/${post.id.toString()}`} className="test123">
                  {title}
                </PostTitle>
              </h3>
              <small>{format(new Date(post.published_at), "yyyy-MM-dd")}</small>
            </header>
            <section>
              <p>{post.description}</p>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  const response = await fetch('http://strapi-blog-matheus.herokuapp.com/blogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();

  return {
    props: { allPosts: result },
  }
}
