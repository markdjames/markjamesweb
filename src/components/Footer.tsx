const links = [
  {
    href: "https://www.linkedin.com/in/mark-james-developer/",
    label: "Mark James on LinkedIn",
    icon: (
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    ),
  },
  {
    href: "https://medium.com/@markjameswebdev",
    label: "Mark James on Medium",
    icon: (
      <>
        <circle cx="6.5" cy="12" r="5.5" />
        <ellipse cx="15.5" cy="12" rx="3" ry="5.5" />
        <ellipse cx="21" cy="12" rx="1.2" ry="5.2" />
      </>
    ),
  },
  {
    href: "https://soundcloud.com/fyvayem",
    label: "Mark James on SoundCloud",
    icon: (
      <>
        <circle cx="7" cy="13.2" r="3.2" />
        <circle cx="11" cy="10.7" r="4.2" />
        <circle cx="15.5" cy="12.6" r="3.4" />
        <rect x="4" y="13" width="15" height="4.5" rx="2.2" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line-soft px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 font-mono text-[11px] text-ink-faint sm:flex-row">
        <p>© {new Date().getFullYear()} Mark James · All rights reserved.</p>

        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.label}
              className="text-ink-faint transition-colors hover:text-signal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                {link.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
