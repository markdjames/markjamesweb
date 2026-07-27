type Props = {
  index: string
  title: string
  label: string
}

export default function SectionHeading({ index, title, label }: Props) {
  return (
    <div className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-4">
      <div>
        <p className="font-mono text-xs tracking-[0.25em] text-signal uppercase">
          {index} / {label}
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-ink sm:text-4xl">{title}</h2>
      </div>
    </div>
  )
}
