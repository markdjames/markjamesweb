import { useState } from 'react'
import { motion } from 'motion/react'
import { deploys, type Deploy } from '../data/content'
import SectionHeading from './SectionHeading'

function DeployCard({ deploy }: { deploy: Deploy }) {
  const [open, setOpen] = useState(deploy.status === 'active')
  const isActive = deploy.status === 'active'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 sm:pl-14"
    >
      <span
        className={`absolute left-0 top-1.5 flex h-6 w-6 -translate-x-1/2 items-center justify-center sm:h-7 sm:w-7 ${
          deploy.lane === 'secondary' ? 'sm:left-0' : ''
        }`}
      >
        <span
          className={`h-2.5 w-2.5 rounded-full ${isActive ? 'bg-signal' : 'bg-ink-faint'}`}
          style={isActive ? { boxShadow: '0 0 0 4px color-mix(in srgb, var(--color-signal) 20%, transparent)' } : undefined}
        />
      </span>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full rounded-md border border-line bg-panel px-5 py-4 text-left transition-colors hover:border-signal-dim sm:px-6 sm:py-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-ink-faint">{deploy.version}</span>
            <span
              className={`rounded-sm px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] ${
                isActive ? 'bg-signal/15 text-signal' : 'bg-ink-faint/10 text-ink-faint'
              }`}
            >
              {isActive ? 'active' : 'archived'}
            </span>
          </div>
          <span className="font-mono text-[11px] text-ink-faint">
            {deploy.start} – {deploy.end ?? 'present'}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-ink sm:text-2xl">{deploy.role}</h3>
        <p className="font-mono text-sm text-ink-dim">{deploy.org}</p>

        <motion.div
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-dim">{deploy.detail}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {deploy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-line-soft px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-faint"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint">
          {open ? '− collapse' : '+ expand'}
        </span>
      </button>
    </motion.div>
  )
}

export default function Experience() {
  const ordered = [...deploys].reverse()

  return (
    <section id="deploys" className="border-b border-line-soft px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" label="deploy.log" title="Release history" />
        <div className="relative flex flex-col gap-6 border-l border-line pl-0 sm:gap-8">
          {ordered.map((deploy) => (
            <DeployCard key={deploy.version} deploy={deploy} />
          ))}
        </div>
      </div>
    </section>
  )
}
