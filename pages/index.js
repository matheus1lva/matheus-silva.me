import Link from '@/components/Link'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import resume from '@/data/resume'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <section className="flex flex-col-reverse items-start gap-8 pb-16 pt-8 sm:flex-row sm:items-center">
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
            Hi, I&apos;m {resume.name.split(' ')[0]}.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            {resume.summary}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/resume"
              className="rounded-md bg-primary-600 px-5 py-2.5 font-medium text-white hover:bg-primary-700"
            >
              View resume
            </Link>
            <Link
              href="/blog"
              className="rounded-md border border-gray-300 px-5 py-2.5 font-medium text-gray-900 hover:border-primary-500 dark:border-gray-700 dark:text-gray-100"
            >
              Read the blog
            </Link>
            <div className="ml-2 flex gap-3">
              <SocialIcon kind="github" href={siteMetadata.github} size="6" />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
            </div>
          </div>
        </div>
        <Image
          src="/static/images/avatar.jpg"
          alt={resume.name}
          width={160}
          height={160}
          className="rounded-full"
        />
      </section>
      <section className="border-t border-gray-200 pt-10 dark:border-gray-800">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Latest writing
          </h2>
          <Link
            href="/blog"
            className="font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            All posts &rarr;
          </Link>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-800">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map(({ slug, date, title, summary }) => (
            <li key={slug} className="py-6">
              <Link href={`/blog/${slug}`} className="group block">
                <time dateTime={date} className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(date)}
                </time>
                <h3 className="mt-1 text-xl font-semibold text-gray-900 group-hover:text-primary-600 dark:text-gray-100 dark:group-hover:text-primary-400">
                  {title}
                </h3>
                {summary && <p className="mt-2 text-gray-600 dark:text-gray-400">{summary}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
