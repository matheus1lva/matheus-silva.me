import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Layout from "../../components/Layout"
import Head from "next/head"
import PostType from "../../../types/post"
import { rhythm, scale } from "../../components/utils/typography"
import Bio from "../../components/Bio"
import { format } from "date-fns"

type Props = {
  post: PostType
}

const Post = (props: Props) => {
  const { post } = props

  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | Matheus Silva</title>
            </Head>
            <header>
              <h1
                style={{
                  marginTop: rhythm(1),
                  marginBottom: 0,
                }}
              >
                {post.title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(1),
                }}
              >
                {format(new Date(post.published_at), "yyyy-MM-dd")}
              </p>
            </header>
              <section dangerouslySetInnerHTML={{__html: post.content}} />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <footer>
              <Bio />
            </footer>
          </article>
        </>
      )}
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const slug = params.slug;

  const response = await fetch(`http://strapi-blog-matheus.herokuapp.com/blogs/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.json();

  return {
    props: {
      post: result,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {

  const response = await fetch('http://strapi-blog-matheus.herokuapp.com/blogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();

  return {
    paths: result.map((article) => ({
      params: {
        slug: article.id.toString(),
      },
    })),
    fallback: false,
  }
}