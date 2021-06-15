import Layout from '../components/Layout'
import { getAllPosts } from '../../lib/api'
import {Link} from '../components/Link'
import Post from '../../types/post'
import { rhythm } from '../components/utils/typography'
import { format } from 'date-fns';
import styled from 'styled-components';
import { getDatabase } from '../../lib/notion'
const databaseId = 'a5eb7564fba845e190095688c9b3e6a8';

const PostTitle = styled(Link)`
  text-decoration: underline;
`;

interface Props {
  allPosts: Post[];
  children: React.ReactNode;
}

const Index = (props: Props) => {
  // @ts-ignore
  const { posts } = props;
  console.log(posts)
  return (
    <Layout>
      <h1>hi</h1>
      {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (
              <li key={post.id}>
                  <Link href={`/${post.id}`}>
                  <span>{post.properties.Name.title[0].plain_text}</span>
                  </Link>

                <Link href={`/${post.id}`}>
                  <a> Read post →</a>
                </Link>
              </li>
            );
          })}
      {/* {allPosts.map((post) => {
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
      })} */}
    </Layout>
  )
}

export default Index

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};