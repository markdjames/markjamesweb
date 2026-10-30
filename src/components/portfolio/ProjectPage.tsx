import { motion } from 'motion/react'
import { projects, type Project } from '../../data/projects'
import SectionHeading from '../SectionHeading'
import StatusPill from './StatusPill'

function Neighbour({ project, direction }: { project: Project; direction: 'prev' | 'next' }) {
  return (
    <a
      href={`/portfolio/${project.slug}`}
      className={`group flex flex-1 flex-col rounded-md border border-line bg-panel px-5 py-4 transition-colors hover:border-signal-dim ${
        direction === 'next' ? 'items-end text-right' : ''
      }`}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint">
        {direction === 'prev' ? '← previous' : 'next →'}
      </span>
      <span className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-signal">
        {project.name}
      </span>
    </a>
  )
}

export default function ProjectPage({ project }: { project: Project }) {
  const index = projects.indexOf(project)
  const prev = projects[(index - 1 + projects.length) % projects.length]!
  const next = projects[(index + 1) % projects.length]!

  return (
    <>
      <section className="bg-grid bg-noise relative overflow-hidden border-b border-line-soft px-6 pt-20 pb-16 sm:px-8">
        <div className="relative mx-auto max-w-6xl">
          <a
            href="/portfolio"
            className="font-mono text-xs uppercase tracking-[0.15em] text-ink-faint transition-colors hover:text-signal"
          >
            ← repo.index
          </a>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-ink-faint">
                {String(index + 1).padStart(2, '0')} · {project.repo}
              </span>
              <StatusPill status={project.status} />
            </div>
            <h1 className="mt-4 font-display text-6xl font-black uppercase leading-[0.9] tracking-tight text-ink sm:text-8xl">
              {project.name}
            </h1>
            <p className="mt-6 max-w-3xl font-mono text-base text-ink-dim sm:text-lg">{project.tagline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.url && (
                <a
                  href={project.url.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-sm bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-void transition-transform hover:-translate-y-0.5"
                >
                  Visit {project.url.label} ↗
                </a>
              )}
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                runtime: {project.platform}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-line-soft px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index="01" label="readme" title="What it is" />
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-6">
              {project.summary.map((paragraph, i) => (
                <p key={i} className="text-balance text-base leading-relaxed text-ink-dim sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="rounded-md border border-line bg-panel p-5 self-start">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">dependencies</p>
              <ul className="mt-4 space-y-1.5">
                {project.stack.map((item) => (
                  <li key={item} className="font-mono text-xs text-ink-dim">
                    <span className="mr-2 text-ink-faint">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line-soft px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading index="02" label="changelog.highlights" title="Under the hood" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="rounded-md border border-line bg-panel p-5"
              >
                <h3 className="font-mono text-sm text-ink">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{highlight.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="More projects" className="border-b border-line-soft px-6 py-12 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row">
          <Neighbour project={prev} direction="prev" />
          <Neighbour project={next} direction="next" />
        </div>
      </nav>
    </>
  )
}
