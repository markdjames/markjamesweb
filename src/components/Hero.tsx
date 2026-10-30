import { motion, type Variants } from "motion/react";
import { CAREER_EPOCH, profile } from "../data/content";
import { useUptime } from "../hooks/useUptime";
import GridPulses from "./GridPulses";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-start">
      <span className="tabular font-mono text-2xl text-ink sm:text-3xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const uptime = useUptime(CAREER_EPOCH);

  return (
    <section
      id="top"
      className="bg-grid bg-noise relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-24 pb-32 sm:px-8 sm:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-[0.14] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-signal), transparent 70%)",
        }}
      />

      <GridPulses count={6} maxRows={12} maxCols={22} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-10"
      >
        <motion.div
          variants={item}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-signal"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          All systems operational
        </motion.div>

        <div>
          <motion.h1
            variants={item}
            className="font-display text-[15vw] font-black uppercase leading-[0.9] tracking-tight text-ink sm:text-[10vw] lg:text-[8.5rem]"
          >
            Mark James
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-4 max-w-6xl font-mono text-base text-ink-dim sm:text-lg"
          >
            {profile.role}.{" "}
            <span className="text-ink-faint">
              Building and scaling web platforms, and the teams behind them, for
              over two decades.
            </span>
          </motion.p>
        </div>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center gap-x-10 gap-y-6 pt-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
            uptime since Oct 2005
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Stat value={uptime.years} label="years" />
            <Stat value={uptime.days} label="days" />
            <Stat value={uptime.hours} label="hrs" />
            <Stat value={uptime.minutes} label="min" />
            <Stat value={uptime.seconds} label="sec" />
          </div>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <a
            href="#deploys"
            className="rounded-sm bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-void transition-transform hover:-translate-y-0.5"
          >
            View deploy log
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-dim transition-colors hover:border-signal hover:text-signal"
          >
            Open a channel
          </a>
          <a
            href="/portfolio"
            className="rounded-sm border border-line px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-dim transition-colors hover:border-signal hover:text-signal md:hidden"
          >
            Portfolio
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint"
      >
        <div className="flex flex-col items-center gap-2">
          scroll
          <span className="h-8 w-px animate-pulse bg-line" />
        </div>
      </motion.div>
    </section>
  );
}
