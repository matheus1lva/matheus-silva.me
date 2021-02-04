<<<<<<< HEAD
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
=======
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
>>>>>>> b8ced84... add something
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
<<<<<<< HEAD
    'excerpt',
=======
    'description',
>>>>>>> b8ced84... add something
  ])

  return {
    props: { allPosts },
  }
}
