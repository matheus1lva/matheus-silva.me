import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Layout from "../components/Layout"
import Head from "next/head"
import { CMS_NAME } from "../../lib/constants"
import markdownToHtml from "../../lib/markdownToHtml"
import PostType from "../../types/post"
import { rhythm, scale } from "../components/utils/typography"
import Bio from "../components/Bio"
import { format } from "date-fns"
import rehypeRaw from "rehype-raw"
import Image from "next/image"
import styled from "styled-components"
import { getBlocks, getDatabase, getPage } from "../../lib/notion"
import React from "react"

const databaseId = "a5eb7564fba845e190095688c9b3e6a8"

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline }, 
      text,
    } = value;
    return (
      <span
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

const Post = props => {
  const { page, blocks } = props

  return (
    <Layout>
      <article>
        <Head>
          <title>{page.properties.Name.title[0].plain_text}</title>
        </Head>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {page.properties.Name.title[0].plain_text}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {/* {format(new Date(post.date), 'yyyy-MM-dd')} */}
            bla bla
          </p>
        </header>
        {blocks.map((block) => (
            <React.Fragment key={block.id}>{renderBlock(block)}</React.Fragment>
          ))}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}
export default Post

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId)
  return {
    paths: database.map(page => ({ params: { id: page.id } })),
    fallback: true,
  }
}

export const getStaticProps = async context => {
  const { id } = context.params
  const page = await getPage(id)
  const blocks = await getBlocks(id)

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter(block => block.has_children)
      .map(async block => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        }
      })
  )
  const blocksWithChildren = blocks.map(block => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        x => x.id === block.id
      )?.children
    }
    return block
  })

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  }
}
