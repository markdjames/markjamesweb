import { useEffect, useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type Props = {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string | null>(null)
  const firstFieldRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return

    setStatus('idle')
    setError(null)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const raf = requestAnimationFrame(() => firstFieldRef.current?.focus())

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      cancelAnimationFrame(raf)
    }
  }, [open, onClose])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    setStatus('submitting')
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          company: data.get('company'),
        }),
      })

      const body = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null

      if (!res.ok || !body?.ok) {
        throw new Error(body?.error ?? 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            aria-hidden
            onClick={onClose}
            className="absolute inset-0 bg-void/80 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-md border border-line bg-panel-raised p-6 shadow-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  new.transmission
                </p>
                <h3 id="contact-modal-title" className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-ink">
                  Send a message
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-sm border border-line px-2.5 py-1.5 font-mono text-xs text-ink-faint transition-colors hover:border-signal hover:text-signal"
              >
                esc
              </button>
            </div>

            {status === 'success' ? (
              <div className="space-y-4">
                <p className="font-mono text-sm text-signal">
                  ✓ delivered — thanks, I'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-sm bg-signal px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-void"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div
                  className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                    Name
                  </label>
                  <input
                    ref={firstFieldRef}
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={200}
                    className="w-full rounded-sm border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal-dim"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={320}
                    className="w-full rounded-sm border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal-dim"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    maxLength={5000}
                    className="w-full resize-none rounded-sm border border-line bg-panel px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-signal-dim"
                  />
                </div>

                {status === 'error' && (
                  <p className="font-mono text-xs text-red">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full rounded-sm bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-void transition-opacity disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Transmitting…' : 'Send message'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
