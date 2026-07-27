import { motion } from 'motion/react'
import { services } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="services" className="border-b border-line-soft px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" label="service.mesh" title="Running services" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group rounded-md border border-line bg-panel p-5 transition-colors hover:border-signal-dim"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm text-ink">{service.name}</span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-signal">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal transition-transform group-hover:scale-125" />
                  {service.status}
                </span>
              </div>
              <ul className="mt-4 space-y-1.5">
                {service.items.map((skill) => (
                  <li key={skill} className="font-mono text-xs text-ink-dim">
                    <span className="mr-2 text-ink-faint">›</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
