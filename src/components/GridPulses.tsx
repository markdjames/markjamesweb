import { useMemo } from 'react'

const GRID_SIZE = 64

type Pulse = {
  id: number
  axis: 'x' | 'y'
  offset: number
  length: number
  duration: number
  delay: number
  reverse: boolean
}

function makePulses(count: number, maxRows: number, maxCols: number): Pulse[] {
  return Array.from({ length: count }, (_, id) => {
    const axis: Pulse['axis'] = Math.random() > 0.5 ? 'x' : 'y'
    const lineIndex = Math.floor(Math.random() * (axis === 'x' ? maxRows : maxCols))
    return {
      id,
      axis,
      offset: lineIndex * GRID_SIZE,
      length: 50 + Math.random() * 50,
      duration: 5 + Math.random() * 6,
      delay: Math.random() * 10,
      reverse: Math.random() > 0.5,
    }
  })
}

type Props = {
  count?: number
  maxRows?: number
  maxCols?: number
}

export default function GridPulses({ count = 6, maxRows = 12, maxCols = 22 }: Props) {
  const pulses = useMemo(() => makePulses(count, maxRows, maxCols), [count, maxRows, maxCols])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {pulses.map((p) => (
        <span
          key={p.id}
          className={p.axis === 'x' ? 'grid-pulse grid-pulse-x' : 'grid-pulse grid-pulse-y'}
          style={{
            [p.axis === 'x' ? 'top' : 'left']: `${p.offset}px`,
            [p.axis === 'x' ? 'width' : 'height']: `${p.length}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationDirection: p.reverse ? 'reverse' : 'normal',
          }}
        />
      ))}
    </div>
  )
}
