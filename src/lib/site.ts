// Centralized site data — used across nav, footer, schema, CTAs
// Workers Compensation Exemption — WC exemption filing guidance & alternative coverage

export const SITE = {
  name: "Workers Compensation Exemption",
  legalName: "Workers Compensation Exemption (by Contractors Choice Agency)",
  domain: "workerscompensationexemption.com",
  url: "https://workerscompensationexemption.com",
  tagline: "File Your Workers' Comp Exemption the Right Way",
  description:
    "Expert guidance on workers' compensation exemptions for sole proprietors, corporate officers, and LLC members — state-by-state filing help, qualification review, and alternative coverage options when exemptions don't apply. All 50 states. Licensed agency.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "WC Exemption",
  brandSub: "Filing Services",
  nicheShort: "workers comp exemption",
  nicheShortCap: "Workers Comp Exemption",
  nichePlural: "workers comp exemptions",
  nichePluralCap: "Workers Comp Exemptions",
  operator: "business owner",
  operatorCap: "Business Owner",
  industry: "workers compensation exemption",
  industryCap: "Workers Compensation Exemption",
  audience: "sole proprietors, officers, and LLC members",
  audienceCap: "Sole Proprietors, Officers, and LLC Members",
  ownerTitle: "business owner",
  regionPill: "Florida · Arizona · Texas · National",
  serviceSuffix: "Exemption Services",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "exemption-filing",
    title: "Workers' Comp Exemption Filing",
    short: "File your exemption the right way, the first time",
    description:
      "We handle the state exemption filing process from start to finish — correct forms, required documentation, and timely submission so your exemption is approved without delays or rejections.",
    icon: "FileText",
    keywords: ["workers comp exemption filing", "workers compensation exemption form", "how to file workers comp exemption", "workers comp exemption application"],
  },
  {
    slug: "sole-proprietor-exemption",
    title: "Sole Proprietor Exemption Guidance",
    short: "Understand your automatic exemption rights",
    description:
      "Most states automatically exempt sole proprietors from workers' comp requirements — but there are important exceptions. We review your situation and advise whether you're truly exempt or at risk.",
    icon: "User",
    keywords: ["sole proprietor workers comp exemption", "self employed workers compensation", "sole proprietor insurance exemption", "independent contractor workers comp"],
  },
  {
    slug: "corporate-officer-exemption",
    title: "Corporate Officer Exemption",
    short: "Exempt corporate officers from WC requirements",
    description:
      "Corporate officers often qualify to exempt themselves from workers' comp coverage. Requirements vary by state — ownership percentage, officer role, and industry all matter. We guide you through the process.",
    icon: "Briefcase",
    keywords: ["corporate officer workers comp exemption", "executive officer exemption workers compensation", "officer exclusion workers comp", "corporate officer insurance exemption"],
  },
  {
    slug: "llc-member-exemption",
    title: "LLC Member Exemption",
    short: "LLC member and manager exemption filing",
    description:
      "LLC members may qualify for workers' comp exemptions depending on your state, LLC structure, and management type. We sort out the rules and file the right exemption for your situation.",
    icon: "Building2",
    keywords: ["LLC member workers comp exemption", "LLC workers compensation exemption", "LLC manager exemption workers comp", "single member LLC workers comp"],
  },
  {
    slug: "exemption-review",
    title: "Exemption Eligibility Review",
    short: "Find out if you qualify before you file",
    description:
      "Not everyone qualifies for a workers' comp exemption — and filing incorrectly can trigger audits or penalties. We review your business structure, state, and industry to confirm eligibility before you file.",
    icon: "FileSearch",
    keywords: ["workers comp exemption eligibility", "do I qualify for workers comp exemption", "workers comp exemption review", "workers comp exemption requirements"],
  },
  {
    slug: "alternative-coverage",
    title: "Alternative Coverage When Exempt",
    short: "Stay protected even without WC coverage",
    description:
      "Being exempt from workers' comp doesn't mean you should go without protection. We place occupational accident, health, and disability coverage for exempt business owners who still want injury protection.",
    icon: "ShieldCheck",
    keywords: ["workers comp alternative coverage", "occupational accident insurance exempt", "coverage for exempt business owners", "alternative to workers compensation"],
  },
  {
    slug: "ghost-policy",
    title: "Ghost Policy / Minimum WC",
    short: "Get a COI without full workers' comp cost",
    description:
      "A ghost policy (minimum premium workers' comp) lets exempt business owners obtain a certificate of insurance to satisfy contractor or client requirements — at a fraction of standard workers' comp cost.",
    icon: "FileCheck",
    keywords: ["ghost policy workers comp", "minimum premium workers comp", "workers comp certificate of insurance exempt", "ghost policy COI"],
  },
  {
    slug: "state-compliance",
    title: "State Compliance & Certificates",
    short: "Stay compliant with state filing requirements",
    description:
      "Workers' comp exemption rules change. Annual renewals, industry-specific requirements, and state-level updates can catch business owners off guard. We keep you compliant and provide certificates when you need them.",
    icon: "BadgeCheck",
    keywords: ["workers comp exemption renewal", "workers comp exemption certificate", "state workers comp compliance", "workers comp exemption requirements by state"],
  },
] as const;

export const LOCATIONS = [
  { slug: "florida", name: "Florida", region: "FL — Exemption Capital", blurb: "Florida has one of the most active workers' comp exemption systems in the country — especially for the construction industry. With a 10-officer cap, annual renewal requirements, and strict construction rules, FL exemptions require careful handling." },
  { slug: "arizona", name: "Arizona", region: "AZ — Southwest", blurb: "Arizona sole proprietors and corporate officers frequently use exemptions to reduce overhead. We help AZ contractors, subcontractors, and small business owners navigate the exemption process and maintain compliance." },
  { slug: "texas", name: "Texas", region: "TX — Non-Subscriber State", blurb: "Texas is the only state where workers' comp is optional for most employers — making it the largest non-subscriber state in the U.S. We help TX business owners understand the non-subscriber system, exemption options, and ghost policy alternatives." },
  { slug: "georgia", name: "Georgia", region: "GA — Southeast", blurb: "Georgia LLC members, sole proprietors, and corporate officers can often exempt themselves from workers' comp requirements. Construction industry rules and subcontractor coverage requirements make expert guidance especially valuable in GA." },
  { slug: "north-carolina", name: "North Carolina", region: "NC — Southeast", blurb: "North Carolina has strict construction exemption rules and subcontractor coverage requirements. We guide NC contractors through the exemption process and help avoid the common pitfalls that lead to penalties." },
  { slug: "ohio", name: "Ohio", region: "OH — Midwest", blurb: "Ohio runs a state-fund workers' comp system with unique self-insured options and corporate officer exemption rules. We help OH business owners navigate the state-fund system and file exemptions correctly." },
  { slug: "illinois", name: "Illinois", region: "IL — Midwest", blurb: "Illinois construction subcontractors face exemption challenges and LLC member rules that differ from other industries. We help IL business owners understand their options and stay compliant." },
  { slug: "california", name: "California", region: "CA — West Coast", blurb: "California has strict enforcement of workers' comp requirements but allows officer exemptions for qualifying corporations and LLC rules that vary by structure. We help CA business owners file correctly and avoid costly penalties." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "WC exemption specialists", icon: "FileText" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2,000+ exemptions filed", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 2000, suffix: "+", label: "Exemptions filed nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years helping business owners", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "I had no idea Florida had a 10-officer cap on construction exemptions. These folks walked me through the entire process, filed everything correctly, and my exemption was approved in days. Saved me thousands in workers' comp premiums.", name: "Marcus T.", role: "General Contractor", location: "Florida" },
  { quote: "As a single-member LLC in Arizona, I wasn't sure if I qualified for an exemption. They reviewed my situation, confirmed I was eligible, and handled the filing. Now I have a ghost policy for my COI and I'm set.", name: "Sandra L.", role: "LLC Owner", location: "Arizona" },
  { quote: "Texas non-subscriber rules are confusing. I thought I was covered until they explained what 'opt out' actually means for my corporate officers. Got us properly set up with alternative coverage and a clear compliance plan.", name: "Derek W.", role: "Corporate Officer", location: "Texas" },
] as const;
