export interface ImpactMetric {
  value: string;
  description: string;
  href?: string;
  /** dot diameter in px — encodes weight, template uses 10–16 */
  size: number;
  /** percentage position on the desktop constellation, 0–100 */
  x: number;
  y: number;
}

export interface ImpactCluster {
  cluster: string;
  color: string;
  /** hub dot position, percentage */
  hubX: number;
  hubY: number;
  metrics: ImpactMetric[];
}

export const impactClusters: ImpactCluster[] = [
  {
    cluster: "Agent Reliability",
    color: "#22d3ee",
    hubX: 76,
    hubY: 28,
    metrics: [
      { value: "95%", description: "approved emails sent in under 30s", href: "/projects/personal-ai-employee", size: 16, x: 68, y: 14 },
      { value: "~90%", description: "sensitive actions routed to human approval", href: "/projects/personal-ai-employee", size: 14, x: 86, y: 16 },
      { value: "99%", description: "LinkedIn post reliability in testing", href: "/projects/personal-ai-employee", size: 12, x: 88, y: 40 },
    ],
  },
  {
    cluster: "Automation & Ops",
    color: "#a78bfa",
    hubX: 24,
    hubY: 30,
    metrics: [
      { value: "24h+", description: "stable unattended operation", href: "/projects/personal-ai-employee", size: 16, x: 12, y: 16 },
      { value: "3", description: "concurrent watchers — Gmail, WhatsApp, filesystem", href: "/projects/personal-ai-employee", size: 12, x: 32, y: 13 },
      { value: "<2min", description: "from email arrival to structured action file", href: "/projects/personal-ai-employee", size: 14, x: 10, y: 44 },
    ],
  },
  {
    cluster: "Shipping & Scale",
    color: "#10b981",
    hubX: 30,
    hubY: 74,
    metrics: [
      { value: "120+", description: "public GitHub repositories", size: 14, x: 16, y: 86 },
      { value: "10+", description: "projects deployed to production", size: 14, x: 36, y: 90 },
      { value: "4", description: "AI agent systems built end to end", href: "/projects/room-matcher-ai", size: 12, x: 44, y: 70 },
    ],
  },
  {
    cluster: "Experience",
    color: "#f5ca40",
    hubX: 74,
    hubY: 72,
    metrics: [
      { value: "2+", description: "years building web apps and agents", size: 14, x: 62, y: 88 },
      { value: "2", description: "production roles — Scope Inspect App, TelGates", size: 12, x: 84, y: 88 },
      { value: "168h/wk", description: "digital-FTE availability target", href: "/projects/personal-ai-employee", size: 10, x: 90, y: 66 },
    ],
  },
];
