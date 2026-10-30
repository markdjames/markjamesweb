export type ProjectStatus = "live" | "in development" | "prototype";

export type Project = {
  slug: string;
  name: string;
  repo: string;
  tagline: string;
  status: ProjectStatus;
  platform: string;
  url?: { href: string; label: string };
  screenshots?: string[];
  note?: string;
  published: boolean;
  summary: string[];
  highlights: { title: string; detail: string }[];
  stack: string[];
};

const allProjects: Project[] = [
  {
    slug: "flyerbug",
    name: "Flyerbug",
    repo: "flyerbug",
    tagline:
      "Honest, algorithm-free event discovery and ticketing for the UK grassroots scene. One codebase, three brands.",
    status: "live",
    platform: "Cloudflare Workers",
    published: false,
    url: { href: "https://flyerbug.net", label: "flyerbug.net" },
    screenshots: ["/screenshots/flyerbug.webp"],
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
    published: false,
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
    repo: "true-bearing",
    tagline:
      "Facilitation tools for teams: one room, one code, one hour. Icebreakers, health checks, retros, estimation and quizzes, in whatever order the day wants.",
    note: "Built out of frustration at the lack of good facilitation tools for teams, and to explore agentic workflows.",
    status: "in development",
    platform: "Cloudflare Workers + Durable Objects",
    published: true,
    url: { href: "https://truebear.ing", label: "truebear.ing" },
    screenshots: ["/screenshots/true-bearing.webp"],
    summary: [
      "True Bearing started life as a team quiz and grew into a whole facilitation kit. A session opens one live room, and everything the team does in it (a go-round, a health check, a retro, a pointing round, a quiz) is just the next step that room runs. Joining takes a code and your name. Nobody should have to create an account to take part in a retro.",
      "Under the hood it's one Worker, one database and one sign-in, with each tool a module instead of its own deployment. Durable Objects handle everything live, and D1 keeps whatever the team wants afterwards: its quiz library, retro actions and estimation history.",
    ],
    highlights: [
      {
        title: "Build the room once",
        detail:
          "Every tool needs the same plumbing: join codes, who's who, live connections that sleep when the room goes quiet, and a view of the room that's right for each person in it. All of that lives in one base class, tested against a dummy app with no real features so nothing tool-specific can creep in.",
      },
      {
        title: "Anonymous means anonymous",
        detail:
          "If a retro says it's anonymous, people have to believe it, or they won't say the thing that matters. Each step keeps its own data, and nothing is stored in a way that would let anyone, me included, link a card back to the person who wrote it.",
      },
      {
        title: "Other teams' data doesn't exist",
        detail:
          "Every read and write is filtered by organisation inside the query itself. Ask for another team's quiz and you get exactly what you'd get for a quiz that was never written: nothing at all.",
      },
      {
        title: "Light enough for meeting-room Wi-Fi",
        detail:
          "People join on their phones, mid-meeting, often on a poor connection. So there's no framework: a hand-written client, split per tool, with a hard 60 KB budget on everything needed to get into a room. The design system has CI gates too, failing the build on weak contrast or buttons too small to tap.",
      },
      {
        title: "Estimate the real backlog",
        detail:
          "Estimation rounds pull tickets straight from Jira, so the team points real work instead of copying titles across by hand. OAuth tokens live in a Durable Object that can't be listed, so reaching a token means already knowing exactly where it is.",
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
    repo: "digital-society",
    tagline:
      "An AI website builder for charities and arts organisations, where the AI is never allowed to write code.",
    note: "How can we use AI to build websites without giving it the ability to break them?",
    status: "in development",
    platform: "Cloudflare Workers",
    published: true,
    url: { href: "https://digital-society.uk", label: "digital-society.uk" },
    screenshots: ["/screenshots/digital-society.webp"],
    summary: [
      "Small charities, choirs and arts groups need websites that are correct by default: legal details in the footer, accessibility and privacy statements, events that archive themselves. Digital Society lets them describe their organisation and get a working site, then edit it by chat or by hand.",
      "The model only ever produces a site description that has to pass a schema, and a fixed library of server-rendered blocks turns that into pages. Every edit lands in a draft, and the public site changes only when a person presses Publish.",
    ],
    highlights: [
      {
        title: "The AI fills in a form",
        detail:
          "A model that writes code can write anything, including a broken or inaccessible page. Here it can only fill in a structured description of the site; if that fails validation, it's told why and tries again. Legal details and branding are owner-only, and the AI can't touch them at all.",
      },
      {
        title: "Nothing goes live by accident",
        detail:
          'Chatting with an AI shouldn\'t change a live website mid-sentence. Every edit, by chat or by hand, lands in a draft with full version history and restore. The public site only ever reads the published version, and shows a "coming soon" page until there is one.',
      },
      {
        title: "Photos without the baggage",
        detail:
          "Phone photos are huge and often record exactly where they were taken. Images are resized in the browser before upload, then checked by their actual contents (not their file extension) and stripped of metadata on the server. Images and fonts are served from the platform's own domain, so visitors aren't handed to third parties.",
      },
      {
        title: "Built for volunteers",
        detail:
          "Charity websites tend to outlive whoever set them up. Every site, version and photo belongs to the organisation, not a person. Sign-in is by emailed link, so there's no password to lose, and owners can invite editors so the site doesn't leave when one volunteer does.",
      },
      {
        title: "A roadmap from research",
        detail:
          "What gets built next is decided by a research report on what small charity and arts websites actually need, from compliance footers to policy packs and event listings.",
      },
    ],
    stack: ["Hono", "React", "Zod", "Claude", "D1", "R2", "Better Auth"],
  },
  {
    slug: "squirrel",
    name: "Squirrel",
    repo: "finances",
    tagline:
      "Household finances, in a nutshell. A budget built from real bank statements, where every figure on screen drills through to the transactions behind it.",
    status: "prototype",
    platform: "Cloudflare Workers",
    url: {
      href: "https://finances.markjamesweb.dev",
      label: "finances.markjamesweb.dev",
    },
    note: "A personal project for my own household.",
    screenshots: ["/screenshots/squirrel.webp"],
    published: true,
    summary: [
      "What began as a Python pipeline that read CSV exports and regenerated a monthly dashboard became a hosted app: sign in, upload a statement, preview exactly what it would import, review anything uncategorised and read the month, all from a phone.",
      "It is used by one household but built as though thousands might, because retrofitting multi-tenancy onto a finance app costs far more than designing for it. Next on the list are bank feeds through Monzo's API and asking questions about spending in plain English.",
    ],
    highlights: [
      {
        title: "No rounding errors, ever",
        detail:
          "To a computer, 0.1 + 0.2 isn't quite 0.3, and a finance app that drifts by a penny is one you stop trusting. So every amount is stored and sent as whole pence. Pounds only exist at the moment you read a number or type one in.",
      },
      {
        title: "The AI isn't allowed to do maths",
        detail:
          "Language models are confidently bad at sums. When you can ask Squirrel about your spending in plain English, the AI's only job will be to turn the question into a structured query, checked before it runs. The database does the arithmetic, so the answer is exact and traceable to the same transactions as everything else.",
      },
      {
        title: "Last month stays last month",
        detail:
          "Tweak a categorisation rule and you could quietly rewrite a year of budgets. So any rule change, re-import or recategorisation shows exactly what it's about to alter, and waits for a yes, before it alters anything.",
      },
      {
        title: "No query can forget",
        detail:
          "The classic way a multi-user finance app leaks is one query that forgets to check whose data it's reading. Every row belongs to a household and the data layer adds that check itself, so there's nothing for an individual query to forget.",
      },
      {
        title: "The code has a budget too",
        detail:
          "Fitting, for a budgeting app. CI fails the build if the bundle or the Worker grows past its limit, if a component skips the design tokens, or if the inline theme script changes without its security-policy hash being updated.",
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
    note: "A learning project for mobile game development, exploring Godot 4 and agentic workflows.",
    status: "in development",
    platform: "Android (Godot 4)",
    published: true,
    screenshots: [
      "/screenshots/geo-game-1.webp",
      "/screenshots/geo-game-2.webp",
    ],
    summary: [
      "The player is asked to find a country, a sea or a landmark and taps where they think it is. Captain Emmy, a pirate guide, cheers them on, and a wrong answer is shown on the map rather than just marked wrong. An explore mode drops the questions entirely: tap anywhere to see what's there, with a fact card and a photo.",
      "It is a learning project for mobile game development, so the code favours clarity over cleverness. It runs at 60 fps on a phone, and the Play Store release is being prepared.",
    ],
    highlights: [
      {
        title: "A proper map",
        detail:
          "Countries and seas come from Natural Earth, the open dataset cartographers rely on, rebuilt from a pinned version so the map never shifts between releases. Long edges, like those along the 180° line, get extra points so they curve with the projection instead of cutting straight across it.",
      },
      {
        title: "Fair to small fingers",
        detail:
          "On a phone-sized world map, a fingertip is bigger than a dozen countries. Tap tolerance is measured in screen pixels, not map distance, so the tiny ones are still findable. Tapping an enclave doesn't count for the country around it, and a near miss zooms in for another go.",
      },
      {
        title: "Is Chad harder than Chile?",
        detail:
          "Every place gets a difficulty tier, scored from what the school curriculum expects children to know, how prominent the place is on the map and a year of Wikipedia page views. Hand overrides catch anything the numbers get wrong.",
      },
      {
        title: "Lines that hold their weight",
        detail:
          "Scale a map up naively and its borders get fat and blurry with it. Here coastlines and borders are a single mesh, widened on the GPU every frame, so a line is the same crisp thickness at any zoom.",
      },
      {
        title: "The fun bits",
        detail:
          "A sea shanty, sound effects, haptics, coins that fly into the score, and a round review that puts every answer back on the map so the mistakes become the lesson.",
      },
    ],
    stack: ["Godot 4", "GDScript", "Shaders", "Node.js data tools", "Android"],
  },
  {
    slug: "book-match",
    name: "Book Match",
    repo: "bookmatchproject",
    tagline:
      "Tell it a book you loved. Get five worth reading next, each with a reason you'd believe from a well-read friend.",
    note: "I wanted to find new books to read, so thought I'd build a tool for that!",
    status: "live",
    platform: "Cloudflare Workers",
    published: true,
    summary: [
      "Book Match does one job: take a book someone liked and hand back a small number of recommendations, each with an honest reason grounded in the actual book. No account, no shelf to manage, no feed, no streaks. The best possible outcome is that someone finds a good book and leaves.",
      "The v0 build is a single server-rendered Worker over a hand-picked catalogue, using real content embeddings for similarity. The specification treats the quality of the reason as the central technical risk, not a footnote.",
    ],
    url: {
      href: "https://bookmatchproject.com",
      label: "bookmatchproject.com",
    },
    screenshots: ["/screenshots/book-match.webp"],
    highlights: [
      {
        title: "Matched on what it's about",
        detail:
          "Books are compared on their actual content, using AI embeddings and a nearest-neighbour search, instead of on which shelf a shop would put them on. A book that hasn't been embedded yet falls back to shared subject tags.",
      },
      {
        title: "Not a bestseller list",
        detail:
          "Start from a famous book and most recommenders hand you more famous books. Results are re-ranked to one book per author, and the design actively works against surfacing the one everyone has already read.",
      },
      {
        title: "No sign-up wall",
        detail:
          "You get your recommendations before anything is asked of you. An anonymous session stands in for an account until there's a reason to want one, so accounts can only ever be an upgrade, never a gate.",
      },
      {
        title: "Nothing to see here",
        detail:
          'Without the secret, the admin pages don\'t say "forbidden". They say "not found", exactly like a page that doesn\'t exist, and repeated wrong guesses from one address get rate limited.',
      },
    ],
    stack: ["Hono JSX", "Workers AI", "Vectorize", "D1"],
  },
];

// drafts stay in the file but are not listed or routed until published
export const projects = allProjects.filter((project) => project.published);
