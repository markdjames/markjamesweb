import { useEffect, useState } from 'react'

export type Uptime = {
  years: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

function diff(epoch: Date): Uptime {
  let ms = Date.now() - epoch.getTime()

  const msPerYear = 365.25 * 24 * 60 * 60 * 1000
  const years = Math.floor(ms / msPerYear)
  ms -= years * msPerYear

  const msPerDay = 24 * 60 * 60 * 1000
  const days = Math.floor(ms / msPerDay)
  ms -= days * msPerDay

  const hours = Math.floor(ms / (60 * 60 * 1000))
  ms -= hours * 60 * 60 * 1000

  const minutes = Math.floor(ms / (60 * 1000))
  ms -= minutes * 60 * 1000

  const seconds = Math.floor(ms / 1000)

  return { years, days, hours, minutes, seconds }
}

export function useUptime(epoch: Date): Uptime {
  const [uptime, setUptime] = useState(() => diff(epoch))

  useEffect(() => {
    const id = window.setInterval(() => setUptime(diff(epoch)), 1000)
    return () => window.clearInterval(id)
  }, [epoch])

  return uptime
}
