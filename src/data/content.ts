export const CAREER_EPOCH = new Date("2005-10-01T00:00:00Z");

export const profile = {
  name: "Mark James",
  role: "Web Engineer & Engineering Manager",
  location: "UK",
  summary: [
    "I'm a Web Engineer with nearly 20 years of professional experience, spanning a broad range of web paradigms, technologies, and roles. As an Engineering Manager, I prioritise people over process - focusing on building trust, creating a supportive environment, helping teams adopt AI effectively, and ensuring each team member finds purpose and fulfilment in their work. I believe happy teams are high-performing teams.",
    "My roots are in full-stack web development, and I take pride in being able to navigate the entire stack, from UI to infrastructure and DevOps. Outside of work, I've been deep in agentic coding and AI-assisted development, building several personal projects — including a fully multi-tenant event discovery platform, which keeps me ahead of the curve on tools and workflows I bring back to my teams.",
    "Over the course of my career, I've developed deep expertise in building and scaling complex web applications and the engineering teams behind them - from event-driven, distributed architectures built to absorb heavy load on constrained downstream systems, to authentication and identity systems, and the operational rigor that keeps high-traffic platforms reliable.",
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
      "Ran the online desk for a regional publisher — early lessons in shipping to a public audience daily.",
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
      "Progressed from maintaining the website and small microsites to leading a large-scale orchestral administration system used across the organisation, from admin staff to musicians. Contributed to immersive interactive experiences performed at venues worldwide, including a residency at the Science Museum, London. Redeveloped the public-facing website and line-managed a Junior Developer.",
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
      "Identified a systemic inefficiency in how the team built and integrated third-party systems, and led development of a multi-tenant internal platform — using Auth0 for authentication and tenant isolation — to standardise and speed up future projects. It grew into a core, revenue-generating product maintained by the whole team, and helped win high-profile clients including Co-op Live, Southbank Centre, Old Vic Theatre and The Roundhouse. As Head of Development, led a team of six.",
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
      "Brought back to modernise a large-scale administration platform originally built over a decade earlier: migrating to the cloud, moving authentication to AWS Cognito, improving resilience and security, and rebuilding the frontend in React.",
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
      "Manage two full engineering teams (12 engineers, distributed across timezones) spanning the core customer journey across critical, high-traffic domains — hiring, coaching and performance management included. An event-driven architecture built to absorb heavy load spikes on top of downstream systems that can only support a fraction of that traffic. Founded and run a cross-team monitoring and alerting guild, and own the department’s on-call rotas and policies. Coach engineers on adopting AI coding assistants and new agentic workflows.",
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
    ],
  },
  {
    name: "paradigms",
    status: "OPERATIONAL",
    items: ["Multi-tenant", "Ticketing", "CRM", "CMS", "E-commerce"],
  },
  {
    name: "auth-identity",
    status: "OPERATIONAL",
    items: ["Auth0", "AWS Cognito"],
  },
  {
    name: "reliability",
    status: "OPERATIONAL",
    items: ["Monitoring & alerting", "On-call ownership", "Incident response"],
  },
  {
    name: "languages",
    status: "OPERATIONAL",
    items: [
      "JavaScript / TypeScript",
      "Node.js",
      "React / Next.js",
      "PHP",
      "MySQL",
    ],
  },
  {
    name: "apis",
    status: "OPERATIONAL",
    items: ["REST", "GraphQL", "MCP", "Webhooks", "WebSockets"],
  },
  {
    name: "infrastructure",
    status: "OPERATIONAL",
    items: ["Cloudflare", "AWS (serverless)", "Terraform / IaC"],
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
  { year: "2022", title: "BiMA 100 — Tech Innovator" },
  {
    year: "2013",
    title:
      "Classical Music Website of the Year — International Classical Music Awards",
  },
];

export const processes = [
  "internet-subcultures.study — BA (Hons) Sociology, University of Derby, 2:1, 2002–2005",
  "music.listen().create()",
  "snowboarding.descend()",
  "hiking.ascend()",
];
