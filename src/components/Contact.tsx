import { useState } from "react";
import { motion } from "motion/react";
import ContactModal from "./ContactModal";
import GridPulses from "./GridPulses";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="contact"
      className="bg-grid relative overflow-hidden px-6 py-28 sm:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/3 translate-y-1/3 rounded-full opacity-[0.12] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-signal), transparent 70%)",
        }}
      />

      <GridPulses count={4} maxRows={9} maxCols={22} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          status: port open
        </p>

        <h2 className="font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-6xl">
          Let's <span className="text-signal">connect</span>.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base text-ink-dim">
          Whether it's a role, a project, or just a chat - the channel's open.
        </p>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-sm bg-signal px-6 py-3 font-mono text-sm text-void transition-transform hover:-translate-y-0.5"
          >
            Send a message
          </button>
        </div>
      </motion.div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
