import { motion } from 'motion/react'
import { projects } from '../../data/projects'
import GridPulses from '../GridPulses'
import StatusPill from './StatusPill'

export default function PortfolioIndex() {
  return (
    <>
      <section className="bg-grid bg-noise relative overflow-hidden border-b border-line-soft px-6 pt-24 pb-20 sm:px-8">
        <GridPulses count={4} maxRows={6} maxCols={22} />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">05 / repo.index</p>
          <h1 className="mt-4 font-display text-6xl font-black uppercase leading-[0.9] tracking-tight text-ink sm:text-8xl">
            Portfolio
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink-dim sm:text-lg">
            Freelance work and personal projects, built outside the day job — mostly on Cloudflare, mostly with
            AI-assisted and agentic workflows. Each one is a real product with real constraints, not a demo.
          </p>
        </div>
      </section>

      <section className="border-b border-line-soft px-6 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
              className="group flex flex-col rounded-md border border-line bg-panel p-6 transition-colors hover:border-signal-dim"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-xs text-ink-faint">
                  {String(i + 1).padStart(2, '0')} · {project.repo}
                </span>
                <StatusPill status={project.status} />
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-ink">{project.name}</h2>
              <p className="mt-1 font-mono text-xs text-ink-faint">{project.platform}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-dim">{project.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-line-soft px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint transition-colors group-hover:text-signal">
                inspect →
              </span>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  )
}
