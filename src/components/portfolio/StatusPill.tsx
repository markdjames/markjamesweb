import type { ProjectStatus } from '../../data/projects'

const styles: Record<ProjectStatus, { pill: string; dot: string }> = {
  live: { pill: 'bg-signal/15 text-signal', dot: 'bg-signal' },
  'in development': { pill: 'bg-amber/15 text-amber', dot: 'bg-amber' },
  prototype: { pill: 'bg-ink-faint/10 text-ink-dim', dot: 'bg-ink-faint' },
}

export default function StatusPill({ status }: { status: ProjectStatus }) {
  const style = styles[status]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] ${style.pill}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  )
}
