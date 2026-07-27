import { motion } from 'motion/react'
import { profile } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Overview() {
  return (
    <section id="overview" className="border-b border-line-soft px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" label="system.overview" title="Who's running this instance" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            {profile.summary.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-balance text-base leading-relaxed text-ink-dim sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-fit rounded-md border border-line bg-panel p-6 font-mono text-xs text-ink-dim"
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-ink-faint">config.yaml</p>
            <dl className="space-y-3">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-faint">role</dt>
                <dd className="text-right text-ink">engineering_manager</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-faint">focus</dt>
                <dd className="text-right text-ink">people &gt; process</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-faint">stack</dt>
                <dd className="text-right text-ink">ui → infra → devops</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-faint">current_experiment</dt>
                <dd className="text-right text-ink">agentic coding</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-faint">philosophy</dt>
                <dd className="text-right text-ink">happy teams ship</dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
