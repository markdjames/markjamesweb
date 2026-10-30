import { motion } from 'motion/react'
import { milestones, processes } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Milestones() {
  return (
    <section id="milestones" className="border-b border-line-soft px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" label="event.log" title="Milestones &amp; background processes" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">tagged releases</p>
            <ul className="space-y-3">
              {milestones.map((m, i) => (
                <motion.li
                  key={m.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 rounded-md border border-line bg-panel px-5 py-4"
                >
                  <span className="rounded-sm bg-amber/15 px-2 py-1 font-mono text-[11px] text-amber">
                    {m.year}
                  </span>
                  <span className="text-sm text-ink-dim">{m.title}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
              background processes, always running
            </p>
            <ul className="space-y-3">
              {processes.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-3 rounded-md border border-line-soft px-5 py-3 font-mono text-xs text-ink-dim"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {p}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
