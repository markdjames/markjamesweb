export const CAREER_EPOCH = new Date("2005-10-01T00:00:00Z");

export const profile = {
  name: "Mark James",
  role: "Web Engineer & Engineering Manager",
  location: "UK",
  summary: [
    "I've spent over 20 years building for the web, and a good part of that leading the teams who build it. As an Engineering Manager I put people before process: my job is to build trust, make it safe to raise problems early, help the team get real value out of AI, and make sure everyone can see why their work matters. Happy teams are high-performing teams.",
    "I started out full-stack and I still am, comfortable anywhere from the UI down to the infrastructure and the deploy pipeline. I've gone deep on agentic coding both at work and in my personal projects, and used it to build several products of my own, including a multi-tenant event discovery platform. That's where I find out which tools and workflows actually hold up before I bring them to my teams.",
    "Most of my career has gone into the hard parts of busy web platforms: event-driven systems that soak up huge traffic spikes in front of downstream services that can only handle a fraction of the load, authentication and identity across many tenants, and the monitoring, alerting and on-call habits that keep everything up when it matters most.",
  ],
};

export type Deploy = {
  version: string;
  role: string;
  org: string;
  start: string;
  end: string | null;
  status: "active" | "archived";
  lane: "primary" | "secondary";
  detail: string;
  tags: string[];
};

export const deploys: Deploy[] = [
  {
    version: "v1.0.0",
    role: "Content Administrator",
    org: "AND (Associated Northcliffe Digital)",
    start: "Oct 2005",
    end: "Oct 2006",
    status: "archived",
    lane: "primary",
    detail:
      "First commit. Cut teeth on day-to-day content operations for a regional digital publisher.",
    tags: ["CMS", "Ops"],
  },
  {
    version: "v1.1.0",
    role: "Online Co-ordinator",
    org: "Gloucestershire Media",
    start: "Nov 2006",
    end: "Sep 2007",
    status: "archived",
    lane: "primary",
    detail:
      "Ran the online desk for a regional publisher. Early lessons in shipping something to a public audience every single day.",
    tags: ["CMS", "Editorial"],
  },
  {
    version: "v2.0.0",
    role: "Developer → Senior Developer",
    org: "Philharmonia Orchestra",
    start: "Sep 2007",
    end: "Mar 2014",
    status: "archived",
    lane: "primary",
    detail:
      "Joined to look after the website and a handful of microsites, and left having led the build of the system that runs the orchestra, used by everyone from the admin team to the musicians. Along the way: immersive interactive experiences performed at venues worldwide, including a residency at the Science Museum in London, a rebuilt public website, and my first direct report.",
    tags: ["PHP", "MySQL", "Interactive"],
  },
  {
    version: "v3.0.0",
    role: "Developer → Senior Developer → Head of Development",
    org: "After Digital",
    start: "Mar 2014",
    end: "Oct 2022",
    status: "archived",
    lane: "primary",
    detail:
      "Spotted that we were solving the same third-party integration problems over and over, project by project, and led the build of a multi-tenant platform (Auth0 for authentication and tenant isolation) so we only had to solve them once. It grew into a core, revenue-generating product the whole team worked on, and helped win clients including Co-op Live, Southbank Centre, the Old Vic and the Roundhouse. As Head of Development, led a team of six.",
    tags: ["Auth0", "Multi-tenant", "Leadership"],
  },
  {
    version: "v4.0.0",
    role: "Freelance Developer",
    org: "Philharmonia Orchestra",
    start: "Feb 2023",
    end: null,
    status: "active",
    lane: "secondary",
    detail:
      "Brought back, a decade on, to modernise the administration platform I'd led the build of: moving it to the cloud and its authentication to AWS Cognito, hardening its security and resilience, and rebuilding the frontend in React one page at a time while the orchestra keeps using it.",
    tags: ["AWS Cognito", "React", "Cloud migration"],
  },
  {
    version: "v4.0.1",
    role: "Engineering Manager",
    org: "ATG Entertainment",
    start: "Oct 2022",
    end: null,
    status: "active",
    lane: "primary",
    detail:
      "Manage two engineering teams (12 engineers across several timezones) who own the core customer journey, including hiring, coaching and performance management. When a big show goes on sale, traffic arrives at many times what the downstream systems can take, so the platform is event-driven and built to absorb the spike instead of passing it on. Founded and run a cross-team monitoring and alerting guild, own the department’s on-call rotas and policies, and coach engineers on adopting AI coding assistants and agentic workflows.",
    tags: ["Event-driven", "Reliability", "On-call", "Management"],
  },
];

export type ServiceGroup = {
  name: string;
  status: string;
  items: string[];
};

export const services: ServiceGroup[] = [
  {
    name: "distributed-systems",
    status: "OPERATIONAL",
    items: [
      "Event-driven architecture",
      "Distributed systems",
      "High-load ingestion",
      "Queue-driven pipelines",
      "Real-time coordination",
    ],
  },
  {
    name: "paradigms",
    status: "OPERATIONAL",
    items: [
      "Multi-tenant",
      "Multi-brand",
      "Ticketing & payments",
      "CRM",
      "CMS",
      "E-commerce",
    ],
  },
  {
    name: "auth-identity",
    status: "OPERATIONAL",
    items: [
      "Auth0",
      "AWS Cognito",
      "Better Auth",
      "OAuth",
      "Magic-link sign-in",
    ],
  },
  {
    name: "ai-engineering",
    status: "OPERATIONAL",
    items: [
      "LLM integration (Claude)",
      "Schema-constrained output",
      "Embeddings & vector search",
      "Agentic coding workflows",
    ],
  },
  {
    name: "reliability",
    status: "OPERATIONAL",
    items: [
      "Monitoring & alerting",
      "On-call ownership",
      "Incident response",
      "Vitest / Playwright / PHPUnit",
      "Performance budgets in CI",
    ],
  },
  {
    name: "languages",
    status: "OPERATIONAL",
    items: [
      "JavaScript / TypeScript",
      "Node.js / Hono",
      "React / Next.js",
      "PHP",
      "MySQL / SQLite",
      "GDScript (Godot)",
    ],
  },
  {
    name: "apis",
    status: "OPERATIONAL",
    items: ["REST", "OpenAPI", "GraphQL", "MCP", "Webhooks", "WebSockets"],
  },
  {
    name: "infrastructure",
    status: "OPERATIONAL",
    items: [
      "Cloudflare Workers",
      "Durable Objects",
      "D1 / KV / R2 / Queues",
      "AWS (serverless)",
      "Redis",
      "Terraform / IaC",
    ],
  },
  {
    name: "leadership",
    status: "OPERATIONAL",
    items: [
      "Communication",
      "Planning & delegation",
      "Enablement",
      "Delivery",
      "Coaching",
    ],
  },
];

export const milestones = [
  { year: "2022", title: "BiMA 100: Tech Innovator" },
  {
    year: "2013",
    title:
      "Classical Music Website of the Year, International Classical Music Awards",
  },
];

export const processes = [
  "internet-subcultures.study() // BA (Hons) Sociology, University of Derby, 2:1, 2002–2005",
  "music.listen().create()",
  "snowboarding.descend()",
  "hiking.ascend()",
];
