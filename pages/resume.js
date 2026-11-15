import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import resume from '@/data/resume'

const Section = ({ title, children }) => (
  <section className="border-t border-gray-200 py-8 dark:border-gray-800 print:py-4">
    <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
      {title}
    </h2>
    {children}
  </section>
)

export default function Resume() {
  return (
    <>
      <PageSEO title={`Resume - ${resume.name}`} description={resume.summary} />
      <div className="pt-6">
        <div className="flex flex-col gap-4 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
              {resume.name}
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              {resume.title} · {resume.location}
            </p>
          </div>
          <div className="flex items-center gap-3 print:hidden">
            <SocialIcon kind="github" href={siteMetadata.github} size="6" />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
            <button
              onClick={() => window.print()}
              className="ml-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
            >
              Download PDF
            </button>
          </div>
        </div>
        <Section title="Summary">
          <p className="text-gray-700 dark:text-gray-300">{resume.summary}</p>
        </Section>
        <Section title="Experience">
          <ol className="space-y-8">
            {resume.experience.map((job) => (
              <li key={job.role + job.company} className="break-inside-avoid">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {job.role} <span className="font-normal text-gray-500">· {job.company}</span>
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-300">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>
        <Section title="Skills">
          <ul className="flex flex-wrap gap-2">
            {resume.skills.map((s) => (
              <li
                key={s}
                className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300"
              >
                {s}
              </li>
            ))}
          </ul>
        </Section>
        <Section title="Talks">
          {resume.talks.map((t) => (
            <p key={t.title} className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-gray-100">{t.title}</span> ·{' '}
              {t.event}
            </p>
          ))}
        </Section>
        <Section title="Education">
          {resume.education.map((e) => (
            <p key={e.school} className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-gray-900 dark:text-gray-100">{e.degree}</span> ·{' '}
              {e.school} · {e.year}
            </p>
          ))}
        </Section>
      </div>
    </>
  )
}
