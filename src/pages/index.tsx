import Layout from '../components/Layout'
import { getAllPosts } from '../../lib/api'
import {Link} from '../components/Link'
import Post from '../../types/post'
import { rhythm } from '../components/utils/typography'
import { format } from 'date-fns';
import styled from 'styled-components';

const PostTitle = styled(Link)`
  text-decoration: underline;
`;

interface Props {
  allPosts: Post[];
  children: React.ReactNode;
}

const Index = (props: Props) => {
  const { allPosts } = props;
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
                <PostTitle href={`/posts/${post.slug}`} className="test123">
                  {title}
                </PostTitle>
              </h3>
              <small>{format(new Date(post.date), 'yyyy-MM-dd')}</small>
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
