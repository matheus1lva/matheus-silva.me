import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Link from 'next/link'
import Post from '../types/post'
import { rhythm } from '../components/utils/typography'
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

interface Props {
  allPosts: Post[];
  children: React.ReactNode;
}

const Index = (props: Props) => {
  const { allPosts } = props;
  console.log(allPosts)
  return (
    <Layout>
      {allPosts.map((post) => {
        const title = post.title;
        return (
          <article key={post.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link href={`/${post.slug}`}>
                  {title}
                </Link>
              </h3>
              <small>{post.date}</small>
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
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'description',
  ])

  return {
    props: { allPosts },
  }
}
