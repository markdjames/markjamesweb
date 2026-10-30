export type ProjectStatus = "live" | "in development" | "prototype";

export type Project = {
  slug: string;
  name: string;
  repo: string;
  tagline: string;
  status: ProjectStatus;
  platform: string;
  url?: { href: string; label: string };
  summary: string[];
  highlights: { title: string; detail: string }[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "flyerbug",
    name: "Flyerbug",
    repo: "flyerbug-2026",
    tagline:
      "Honest, algorithm-free event discovery and ticketing for the UK grassroots scene — one codebase, three brands.",
    status: "live",
    platform: "Cloudflare Workers",
    url: { href: "https://flyerbug.net", label: "flyerbug.net" },
    summary: [
      "Flyerbug lists gigs, club nights and grassroots venue events with no paid placements pushing results around. The same codebase ships Sportsbug (sports fixtures) and Familybug (family events), with the brand chosen at build time for the frontends and at deploy time for the API and workers.",
      "Behind the discovery site sit an admin console, a promoter dashboard and a standalone checkout for selling tickets directly. A fleet of queue-driven workers keeps listings fresh by syncing from ticketing partners, spidering venues' structured data and enriching events with AI-written descriptions.",
    ],
    highlights: [
      {
        title: "Multi-brand from one repo",
        detail:
          "Three sites, three domains and their ticket, promoter and media subdomains, all from shared code with per-brand environments rather than forks.",
      },
      {
        title: "Ingestion pipeline",
        detail:
          "Separate sync workers for each event source, connected by Cloudflare Queues so one partner's outage never blocks another's, plus a JSON-LD spider with its own database.",
      },
      {
        title: "Ticketing and payments",
        detail:
          "A dedicated checkout app with Stripe webhooks handled by the API, deployed on its own tickets subdomain per brand.",
      },
      {
        title: "AI-assisted content",
        detail:
          "Claude-generated event descriptions, and weekly batch-generated SEO landing copy for genres and cities, researched before it is written.",
      },
      {
        title: "Typed end to end",
        detail:
          "An OpenAPI contract generates the frontend's API types, and the web app enforces coverage thresholds and design-token usage in its test suite.",
      },
    ],
    stack: [
      "Hono",
      "React 19",
      "Vite",
      "Cloudflare D1 / KV / R2",
      "Queues",
      "Stripe",
      "Claude",
      "OpenAPI",
    ],
  },
  {
    slug: "mobi",
    name: "Mobi",
    repo: "mobi",
    tagline:
      "The Philharmonia Orchestra's business platform: scheduling, personnel and reporting for everyone from administrators to musicians.",
    status: "live",
    platform: "PHP 8.2 + React",
    summary: [
      "Mobi runs the day-to-day business of a major symphony orchestra: concert and rehearsal schedules, players and seating, repertoire, venues and the reports that finance and management depend on. I led its original build as a staff developer, and have been brought back as a freelancer to modernise it.",
      "The modernisation is a live migration rather than a rewrite. A new React interface is replacing the legacy PHP pages one at a time behind the same router, while the platform moved to the cloud, authentication moved to AWS Cognito, and the codebase gained the tests and structure it needs to keep going for another decade.",
    ],
    highlights: [
      {
        title: "Incremental rebuild",
        detail:
          "The router serves a rebuilt view when one exists and the legacy module when it doesn't, so pages move across one at a time with no big-bang cutover.",
      },
      {
        title: "Cognito without disruption",
        detail:
          "Pluggable authentication strategies, with existing accounts linked to their Cognito identities on first sign-in rather than migrated in bulk.",
      },
      {
        title: "A layered architecture",
        detail:
          "New work flows React → REST API → service → model, with SQL confined to models, while legacy endpoints are retired domain by domain against a written ledger.",
      },
      {
        title: "Tests at every level",
        detail:
          "PHPUnit unit, integration and database suites against migrated test data, and Playwright end-to-end tests across five permission levels.",
      },
      {
        title: "Data people can trust",
        detail:
          "Exports and reports built for the people who act on them, with caching chosen per endpoint so nothing carrying contact details is ever served stale.",
      },
    ],
    stack: [
      "PHP 8.2",
      "MySQL",
      "Redis",
      "React",
      "TypeScript",
      "MUI",
      "AWS Cognito",
      "Playwright",
    ],
  },
  {
    slug: "true-bearing",
    name: "True Bearing",
    repo: "quizzer",
    tagline:
      "Facilitation tools for teams: one room, one code, one hour — icebreakers, health checks, retros, estimation and quizzes in whatever order the day wants.",
    status: "live",
    platform: "Cloudflare Workers + Durable Objects",
    url: { href: "https://truebear.ing", label: "truebear.ing" },
    summary: [
      "True Bearing started as a team quiz and grew into a suite. A session opens a single live room, and everything a team does in it — a go-round, a health check, a retro board, a pointing round, a quiz — is a step that room runs. Joining needs a code and a name, never an account.",
      "It is one Worker, one database and one sign-in, with each tool a separate module rather than a separate deployment. Durable Objects hold live coordination; D1 holds what a team keeps afterwards, such as its quiz library, retro actions and estimation history.",
    ],
    highlights: [
      {
        title: "A reusable room kernel",
        detail:
          "Codes, identity, hibernatable WebSockets, rosters and per-viewer snapshots live in one base class, proven against a fixture app so it stays general.",
      },
      {
        title: "Privacy by construction",
        detail:
          "Retro anonymity is a load-bearing invariant: each step owns its own data, and nothing is stored in a way that makes \"who wrote what\" a join away.",
      },
      {
        title: "Ownership in every query",
        detail:
          "Every read and write is scoped to an organisation in the WHERE clause, so another team's data is indistinguishable from data that doesn't exist.",
      },
      {
        title: "No framework, one dependency",
        detail:
          "A hand-rolled DOM client with per-app code splitting, a 60 KB join-path budget, and a design system with contrast, radius and button-size gates in CI.",
      },
      {
        title: "Jira integration",
        detail:
          "Estimation rounds can pull tickets from Jira over OAuth, with tokens held in a Durable Object that nothing can enumerate.",
      },
    ],
    stack: [
      "TypeScript",
      "Durable Objects",
      "WebSockets",
      "D1",
      "Better Auth",
      "Vite",
      "Vitest (workerd)",
    ],
  },
  {
    slug: "digital-society",
    name: "Digital Society",
    repo: "vibe-coder",
    tagline:
      "An AI website builder for charities and arts organisations, where the AI writes a validated site spec and never writes code.",
    status: "in development",
    platform: "Cloudflare Workers",
    summary: [
      "Small charities, choirs and arts groups need websites that are correct by default: legal details in the footer, accessibility and privacy statements, events that archive themselves. Digital Society lets them describe their organisation and get a working site, then edit it by chat or by hand.",
      "The model only ever produces JSON that must pass a schema; a fixed, server-rendered block library turns that into pages. Every edit lands in a draft, and the public site changes only when someone presses Publish. The roadmap is driven by a research report on what small sector websites actually need.",
    ],
    highlights: [
      {
        title: "Spec, not code",
        detail:
          "A Zod schema is the contract the AI works to, with validation retries, and owner-only fields such as legal details and branding that the AI can never set.",
      },
      {
        title: "Draft and publish",
        detail:
          "Full version history, restore, a \"coming soon\" page until first publish, and a renderer that only ever reads the published spec.",
      },
      {
        title: "Safe media",
        detail:
          "Images are resized in the browser, type-checked from their bytes and stripped of metadata on the server, and served from the platform's own origin — fonts too.",
      },
      {
        title: "Organisations and roles",
        detail:
          "Magic-link sign-in, invitations and owner/editor roles, with every site, version and photo belonging to an organisation.",
      },
      {
        title: "Evidence-led roadmap",
        detail:
          "Features are ordered by a sector report on small charity and arts websites, from compliance footers to policy packs and events blocks.",
      },
    ],
    stack: [
      "Hono",
      "React",
      "Zod",
      "Claude",
      "D1",
      "R2",
      "Better Auth",
    ],
  },
  {
    slug: "household-finances",
    name: "Household Finances",
    repo: "finances",
    tagline:
      "A household budget built from real bank statements, where every figure on screen drills through to the transactions behind it.",
    status: "live",
    platform: "Cloudflare Workers",
    summary: [
      "What began as a Python pipeline that read CSV exports and regenerated a monthly dashboard became a hosted app: sign in, upload a statement, preview exactly what it would import, review anything uncategorised and read the month — all from a phone.",
      "It is used by one household but built as though thousands might, because retrofitting multi-tenancy onto a finance app costs far more than designing for it. Next on the list are bank feeds through Monzo's API and asking questions about spending in plain English.",
    ],
    highlights: [
      {
        title: "Money is integer pence",
        detail:
          "In every layer and wire format. Pounds exist only in the formatter and the input parser; a float never touches a balance.",
      },
      {
        title: "The model never does arithmetic",
        detail:
          "The planned AI layer emits a declarative query validated against a schema; SQLite computes the answer and the app formats it.",
      },
      {
        title: "Nothing silently restates history",
        detail:
          "A rule change, re-import or recategorisation shows what it will alter before it alters it.",
      },
      {
        title: "Tenancy as an invariant",
        detail:
          "Every row belongs to a household, enforced by the data layer rather than by remembering, with self-serve auth via Better Auth on D1.",
      },
      {
        title: "Budgets as tests",
        detail:
          "CI checks bundle size, Worker size, design-token usage and the CSP hash of the inline theme script alongside the usual suite.",
      },
    ],
    stack: [
      "Hono",
      "React",
      "Vite",
      "Zod",
      "D1",
      "R2",
      "Better Auth",
      "pdf.js",
    ],
  },
  {
    slug: "geo-game",
    name: "Geo Game",
    repo: "geo-game",
    tagline:
      "A treasure-map geography game for children: find the place, tap the map, and learn where it is by being shown.",
    status: "in development",
    platform: "Android (Godot 4)",
    summary: [
      "The player is asked to find a country, a sea or a landmark and taps where they think it is. Captain Emmy, a pirate guide, cheers them on, and a wrong answer is shown on the map rather than just marked wrong. An explore mode drops the questions entirely: tap anywhere to see what's there, with a fact card and a photo.",
      "It is a learning project for mobile game development, so the code favours clarity over cleverness. It runs at 60 fps on a phone, and the Play Store release is being prepared.",
    ],
    highlights: [
      {
        title: "Real map data",
        detail:
          "Natural Earth countries and marine areas in the Natural Earth projection, rebuilt from a pinned commit, with edges densified so the 180° meridian stays curved.",
      },
      {
        title: "Fair taps at any zoom",
        detail:
          "Tolerances are in screen pixels so microstates are findable, enclaves don't count for the country around them, and a near miss zooms in for another go.",
      },
      {
        title: "Difficulty from data",
        detail:
          "Every place has a tier scored from curriculum anchors, Natural Earth ranks and a year of Wikipedia page views, with hand overrides on top.",
      },
      {
        title: "Strokes that don't scale",
        detail:
          "Coastlines and borders are drawn from one mesh widened in a shader, so lines stay the same thickness however far you zoom.",
      },
      {
        title: "Polish",
        detail:
          "Sound effects, a sea shanty, haptics, a flying coin score and a round review that puts every answer back on the map.",
      },
    ],
    stack: ["Godot 4", "GDScript", "Shaders", "Node.js data tools", "Android"],
  },
  {
    slug: "book-match",
    name: "Book Match",
    repo: "bookmatchproject-v2",
    tagline:
      "Tell it a book you loved. Get five worth reading next, each with a reason you'd believe from a well-read friend.",
    status: "prototype",
    platform: "Cloudflare Workers",
    summary: [
      "Book Match does one job: take a book someone liked and hand back a small number of recommendations with an honest reason grounded in the actual book. No account, no shelf to manage, no feed, no streaks — the best outcome is that someone finds a good book and leaves.",
      "The v0 build is a single server-rendered Worker over a hand-picked catalogue, using real content embeddings for similarity. The specification treats the quality of the reason as the central technical risk, not a footnote.",
    ],
    highlights: [
      {
        title: "Semantic similarity",
        detail:
          "Workers AI embeddings with Vectorize nearest-neighbour search, falling back to subject-tag overlap when a book has no embedding yet.",
      },
      {
        title: "Not a bestseller list",
        detail:
          "A diversity re-rank keeps results to one book per author, and the design actively guards against always surfacing the book everyone has heard of.",
      },
      {
        title: "Value before signup",
        detail:
          "An anonymous session cookie and interaction logging stand in for accounts, which are an upgrade path rather than a gate.",
      },
      {
        title: "Quiet admin surface",
        detail:
          "Admin routes answer a plain 404 to anything without the secret, with per-IP rate limiting on failed attempts.",
      },
    ],
    stack: ["Hono JSX", "Workers AI", "Vectorize", "D1"],
  },
];
