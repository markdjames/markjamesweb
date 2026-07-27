const links = [
  { href: "#overview", label: "overview" },
  { href: "#deploys", label: "experience" },
  { href: "#services", label: "skills" },
  { href: "#milestones", label: "milestones" },
];

export default function StatusBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-void/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink-dim sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-ink">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          mjames<span className="text-ink-faint">.status</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-sm border border-signal-dim px-3 py-1.5 text-signal transition-colors hover:bg-signal hover:text-void"
        >
          get in touch
        </a>
      </div>
    </header>
  );
}
