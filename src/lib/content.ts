// Rich, niche-accurate content blocks + centralized COPY for Workers Compensation Exemption.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Building2, FileText, User, Briefcase, FileCheck, BadgeCheck,
} from "lucide-react";

/* ============================================================
   COPY — centralized display strings consumed by components/pages.
   ============================================================ */
export const COPY = {
  hero: {
    h1Lead: "Workers' comp exemptions filed",
    h1Highlight: "the right way, in every state",
    subcopy:
      "Sole proprietor exemptions, corporate officer exclusions, LLC member filings, ghost policies, and alternative coverage — purpose-built guidance for business owners who need to get this right. Licensed all 50 states. 15-minute consultations.",
    statValue: "2,000+",
    statLabel: "Exemptions filed — sole proprietors, corporate officers, and LLC members nationwide",
    imageAlt: "Business owner reviewing workers compensation exemption paperwork at a professional desk",
  },
  nav: { ariaLabel: "Workers Compensation Exemption home" },
  footer: {
    ctaTitle: "Ready to file your workers' comp exemption?",
    ctaSubcopy: "15-minute consultations. Expert guidance. Exemption filing services for sole proprietors, corporate officers, and LLC members — all 50 states.",
    description:
      "Expert guidance on workers' compensation exemptions — sole proprietor exemptions, corporate officer exclusions, LLC member filings, ghost policies, and alternative coverage for exempt business owners. A division of Contractors Choice Agency — founded 2005, licensed all 50 states.",
  },
  servicesGrid: {
    h2Lead: "Services built specifically for",
    h2Highlight: "workers' comp exemptions",
    lead: "Standard agents don't specialize in exemptions. We do — filing, eligibility reviews, ghost policies, and alternative coverage for business owners who need to get their exemption status right.",
  },
  why: {
    eyebrow: "Why business owners choose us",
    h2Lead: "The exemption mistakes that",
    h2Highlight: "cost business owners the most",
    lead: "Most agents either file the wrong exemption or don't know the rules changed. Then an audit hits and the penalties stack up. We specialize in exemptions — knowing every state's rules, deadlines, and construction-specific requirements.",
    sidebarTitle: "Run by people who understand the system",
    sidebarBody:
      "Contractors Choice Agency was founded in 2005 by Josh Cotner. We've filed thousands of exemptions across all 50 states and know what happens when the wrong box gets checked or a renewal deadline gets missed.",
  },
  coverage: {
    eyebrow: "Where we file",
    h2Lead: "Exemption filing services.",
    h2Highlight: "All 50 states.",
    lead: "From Florida's construction exemption rules to Texas's non-subscriber system, Contractors Choice Agency handles workers' comp exemptions in every state where business owners need guidance.",
    imageAlt: "Workers comp exemption filing assistance in key states across the US",
    badgeTitle: "Nationwide exemption filing services.",
    badgeSub: "Filing workers' comp exemptions in all 50 states since 2005.",
  },
  process: {
    lead: "No guessing and no forms filled out wrong. A real conversation, the right guidance, and a filing your state will approve — built around your business structure and industry.",
  },
  testimonials: {
    eyebrow: "From business owners",
    h2Lead: "Business owners who got",
    h2Highlight: "their exemptions filed right",
  },
  finalCta: {
    h2Lead: "File Your Workers' Comp Exemption",
    h2Highlight: "with guidance that gets it right.",
    lead: "Whether you need an exemption filed today or a full review of your compliance situation — sole proprietor, corporate officer, LLC member, ghost policy, or alternative coverage — one call gets you real guidance from specialists who know the rules in your state.",
  },
  ctaBand: {
    defaultTitle: "Ready to file your workers' comp exemption?",
    defaultDescription:
      "Get guidance in 15 minutes from specialists who know your state's exemption rules — sole proprietors, corporate officers, LLC members, and ghost policies.",
  },
  faq: {
    defaultTitleLead: "Workers' comp exemptions,",
    defaultTitleHighlight: "in plain English",
  },
  servicesPage: {
    metaTitle: "Workers' Comp Exemption Filing Services",
    metaDescription:
      "Eight exemption services for sole proprietors, corporate officers, and LLC members: exemption filing, eligibility review, ghost policies, state compliance, and alternative coverage. Licensed all 50 states.",
    h1Lead: "Exemption services built line-by-line for",
    h1Highlight: "business owners",
    lead: "Each service below addresses a specific workers' comp exemption situation — from the sole proprietor who needs a basic filing to the corporate officer navigating state-specific ownership requirements.",
    ogTitle: "Workers' Comp Exemption Services | Contractors Choice Agency",
    ogDescription:
      "Exemption filing, eligibility review, sole proprietor guidance, corporate officer exclusions, LLC member filings, ghost policies, alternative coverage, and state compliance — for business owners in all 50 states.",
    ctaTitle: "Not sure which exemption service you need?",
    ctaDescription:
      "Most business owners need an eligibility review first, then the right exemption filing. We'll figure out your situation in one call and get you compliant.",
  },
  blogPage: {
    metaTitle: "Workers' Comp Exemption Blog — Guides & Insights",
    metaDescription:
      "Practical guidance on workers' comp exemptions: sole proprietor rules, corporate officer exclusions, LLC member filings, ghost policies, and state-specific filing requirements.",
    h1Lead: "Workers' comp exemptions,",
    h1Highlight: "decoded",
    lead: "Plain-English guides on exemption filing, eligibility, ghost policies, and state-specific rules — for sole proprietors, corporate officers, and LLC members.",
    ogTitle: "Workers' Comp Exemption Blog | Contractors Choice Agency",
    ogDescription:
      "Practical guidance on workers' comp exemptions: sole proprietor rules, corporate officer exclusions, LLC member filings, ghost policies, and state-specific filing requirements.",
  },
  serviceDetail: {
    h1Suffix: "for business owners",
    imageAltSuffix: "workers comp exemption filing",
    category: "Workers Compensation Exemption",
  },
  about: {
    metaTitle: "About Workers Compensation Exemption | Contractors Choice Agency",
    metaDescription:
      "Workers Compensation Exemption is the exemption-focused division of Contractors Choice Agency, founded in 2005 by Josh Cotner. Sole proprietor exemptions, corporate officer exclusions, LLC filings, ghost policies, and alternative coverage. Licensed all 50 states.",
    h1Lead: "Built by people who know the system,",
    h1Highlight: "for business owners who need it right",
    lead: "Workers Compensation Exemption is the exemption-focused division of Contractors Choice Agency — founded in 2005 by Josh Cotner, who knows exactly what happens when the wrong exemption form gets filed or a state deadline gets missed.",
    imageAlt: "Licensed insurance professional specializing in workers comp exemptions",
    storyEyebrow: "Our story",
    storyTitle: "From the trades to the agency.",
    storyLead:
      "Josh Cotner worked in the trades and filed his own exemptions before founding CCA in 2005. That background is why we understand what's at stake when an exemption is denied, a ghost policy gets audited, or an officer exclusion triggers a state investigation.",
    valuesTitle: "Four things we won't compromise on.",
    timeline: [
      { year: "2005", title: "Contractors Choice Agency founded", desc: "Josh Cotner opens CCA in Chandler, AZ, after years working in the trades — built to insure and advise contractors and operators the right way." },
      { year: "15 yrs", title: "Expanded to exemption specialization", desc: "After placing programs for dozens of contractor categories, CCA deepens expertise in workers' comp exemptions — sole proprietors, officers, and LLC members." },
      { year: "Today", title: "Dedicated exemption division", desc: "Workers Compensation Exemption focuses CCA's expertise on business owners navigating exemption filing, ghost policies, and alternative coverage across all 50 states." },
    ],
    values: [
      { icon: "FileText", title: "Exemption-first, always", desc: "Josh spent years in the trades before starting the agency. We speak the language of contractors and business owners because we know what happens when an exemption is filed wrong." },
      { icon: "ShieldCheck", title: "Guidance that closes the gaps", desc: "Wrong exemption forms, missed renewals, and state-specific construction rules — we address the risks standard agents miss." },
      { icon: "Award", title: "A-rated markets only", desc: "When exemptions don't apply, we place alternative coverage with carriers that have the financial strength and specialty experience business owners need." },
      { icon: "Handshake", title: "Honest, no-pressure advice", desc: "If you don't need a ghost policy, we'll tell you. We earn trust by being straight about what your exemption situation actually requires." },
    ],
  },
  quote: {
    h1Lead: "Get your",
    h1Highlight: "workers' comp exemption consultation",
    lead: "Tell us about your business structure and state. We'll review your eligibility and come back with real guidance in about 15 minutes — no obligation.",
    businessPlaceholder: "ABC Contracting LLC",
    emailPlaceholder: "owner@abccontracting.com",
    phonePlaceholder: "(602) 555-0100",
    messagePlaceholder:
      "Business type (sole prop, LLC, corporation), state, industry, number of owners, whether you have employees, current exemption status, or anything else that helps us advise you correctly…",
    errorMessage: "Something went wrong. Please call us at 844-967-5247 or try again.",
    trustNicheTitle: "Built for exempt business owners",
    trustNicheDesc: "Guidance written for workers' comp exemptions — not generic insurance advice.",
  },
  contact: {
    h1Lead: "Let's talk about your",
    h1Highlight: "workers' comp exemption",
    lead: "Questions, a filing, or a compliance review — reach a specialist who knows exemption rules, not a queue.",
    errorMessage: "Something went wrong. Please call us at 844-967-5247.",
  },
  coveragePage: {
    metaTitle: "Workers' Comp Exemption Filing — All 50 States",
    metaDescription:
      "Contractors Choice Agency files workers' comp exemptions in all 50 states — Florida, Arizona, Texas, Georgia, North Carolina, Ohio, Illinois, California, and everywhere business owners need guidance.",
    h1Lead: "National reach.",
    h1Highlight: "All 50 states, every exemption filing.",
    lead: "Contractors Choice Agency handles workers' comp exemptions in all 50 states — from Florida's construction exemption rules to Texas's non-subscriber system and California's strict enforcement.",
    sectionTitle: "Key exemption filing states we serve.",
    nationwideLead:
      "Whether your business is in Florida, Arizona, Texas, Georgia, or anywhere in between — one agent, one correct filing. NPN #8608479.",
    faqs: [
      { q: "Do you only file exemptions in certain states?", a: "No. Contractors Choice Agency is licensed in all 50 states and files workers' comp exemptions for business owners anywhere in the country — Florida, Arizona, Texas, Georgia, North Carolina, Ohio, Illinois, California, and everywhere else." },
      { q: "Can you help if I operate in multiple states?", a: "Yes. If your business operates across state lines, we review the rules in each state and file the appropriate exemption or alternative coverage so you're compliant everywhere you work." },
      { q: "Do you understand my state's specific construction exemption rules?", a: "Yes. We work with state-specific exemption requirements — Florida's 10-officer construction cap, Texas's non-subscriber rules, California's strict enforcement, and the unique rules in every other state." },
      { q: "Can you coordinate exemptions across multiple business entities?", a: "Yes. If you own multiple LLCs, corporations, or sole proprietorships, we review each entity and file the appropriate exemptions so there are no gaps in your compliance posture." },
    ],
  },
} as const;

/* ============================================================
   PROCESS
   ============================================================ */
export const PROCESS = [
  { step: "01", icon: PhoneCall, title: "Tell us about your business", description: "15-min call or form. Business structure, state, industry, number of owners, and whether you have employees — everything we need to advise you correctly." },
  { step: "02", icon: FileSearch, title: "We review your eligibility", description: "We check your state's specific rules for your business type — sole proprietor, corporate officer, or LLC member — and confirm whether you qualify before filing." },
  { step: "03", icon: FileSignature, title: "We file the right exemption", description: "Correct forms, required documentation, and timely submission so your exemption is approved without delays, rejections, or state follow-up requests." },
  { step: "04", icon: ShieldCheck, title: "Ongoing compliance support", description: "Annual renewals, rule changes, and state-specific updates — we keep you compliant and provide certificates when your clients or contractors ask for them." },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  { icon: ShieldCheck, title: "State-specific exemption knowledge", description: "Florida's construction cap, Texas's non-subscriber rules, California's strict enforcement — we know the rules in every state and file accordingly." },
  { icon: FileText, title: "Ghost policies and COIs for exempt owners", description: "If you need a certificate of insurance while exempt, we place ghost policies (minimum premium WC) so you can satisfy contractor and client requirements without full coverage cost." },
  { icon: User, title: "Sole proprietor exemption guidance", description: "Most states automatically exempt sole proprietors — but construction industry exceptions and subcontractor rules can change your status. We review your situation before advising." },
  { icon: Building2, title: "LLC and corporate officer filings", description: "Officer exemptions and LLC member exclusions have state-specific ownership and role requirements. We handle the filing correctly the first time." },
  { icon: FileSearch, title: "Eligibility review before you file", description: "Filing the wrong exemption — or filing when you don't qualify — can trigger audits and penalties. We confirm eligibility first." },
  { icon: BadgeCheck, title: "Run by a former contractor", description: "Josh Cotner worked in the trades and understands exactly why exemption status matters when a workers' comp audit arrives on your doorstep." },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS = [
  { q: "Who qualifies for a workers' comp exemption in Florida?", a: "In Florida, corporate officers and LLC members in construction can file an exemption through the Division of Workers' Compensation — but there's a 10-officer cap per corporation and annual renewal is required. Sole proprietors in construction are NOT automatically exempt in Florida and generally must carry coverage." },
  { q: "How do I file a workers' comp exemption in Arizona?", a: "In Arizona, sole proprietors and corporate officers can typically exempt themselves from workers' comp requirements. The filing process involves submitting the appropriate exemption form with the Industrial Commission of Arizona and documenting your ownership interest. We handle the full filing process." },
  { q: "Does Texas require workers' comp insurance?", a: "No — Texas is the only state where workers' comp is optional for most private employers. Texas operates a non-subscriber system where employers can opt out entirely. However, opting out has significant legal exposure, and many Texas contractors use ghost policies to satisfy COI requirements from clients." },
  { q: "Who qualifies for a workers' comp exemption?", a: "Eligibility depends on your state, business structure, and industry. Sole proprietors are automatically exempt in most states (with exceptions in construction). Corporate officers can often file exemptions if they meet ownership percentage requirements. LLC members may qualify depending on state rules and whether the LLC is member-managed or manager-managed." },
  { q: "How do I file a workers' comp exemption?", a: "The filing process varies by state — most require a specific state form, documentation of ownership, and sometimes a filing fee. In Florida, for example, exemptions are filed with the Division of Workers' Compensation and require annual renewal. We manage the entire process to ensure correct and timely filing." },
  { q: "Do workers' comp exemptions need to be renewed annually?", a: "In many states, yes. Florida is a notable example — exemptions must be renewed every two years (biennially). Missing a renewal deadline means your exemption lapses and you may be required to carry coverage immediately. We track renewal deadlines and handle renewals on your behalf." },
  { q: "What are the risks of going without workers' comp when you're not properly exempt?", a: "If you're required to carry workers' comp but don't have it — and haven't properly filed an exemption — you can face stop-work orders, fines, and personal liability for injured worker claims. State enforcement agencies actively audit and penalize non-compliant businesses, especially in construction." },
  { q: "What happens if I'm audited and my exemption is questioned?", a: "If your exemption is challenged, the state will review your filing, ownership documentation, and whether you met the eligibility requirements at the time of filing. Improperly filed exemptions can result in retroactive premium assessments and penalties. Having a properly filed exemption with correct documentation is your best defense." },
  { q: "What's the difference between a sole proprietor, LLC member, and corporate officer exemption?", a: "Each involves a different business structure and different state rules. Sole proprietors may be automatically exempt (with industry exceptions). LLC members need a state-specific filing based on their ownership and management role. Corporate officers need to meet ownership percentage requirements and file the appropriate exclusion form with their state's workers' comp regulator." },
  { q: "Can family members use a workers' comp exemption?", a: "In some states, family members of business owners (spouse, children, parents) can be excluded from workers' comp coverage under a family exemption. Rules vary significantly by state. We review your specific situation and advise whether a family exclusion applies and how to document it correctly." },
  { q: "Does my workers' comp exemption cover my subcontractors?", a: "No — your exemption only applies to you as an owner. If you hire subcontractors, you need to verify that each subcontractor either has their own workers' comp coverage or has a valid exemption on file. If a subcontractor without coverage is injured on your job, you may be liable for their workers' comp costs." },
  { q: "What is a ghost policy and when should I use it?", a: "A ghost policy is a workers' comp policy where the owner is listed but excluded from coverage via an officer exemption — providing a certificate of insurance without the cost of full coverage. It's commonly used when contractors need a COI to satisfy client or general contractor requirements but are otherwise exempt. Costs typically run $800–$2,500 per year." },
  { q: "Can I get a certificate of insurance (COI) if I have a workers' comp exemption?", a: "You can get a COI through a ghost policy — a minimum premium workers' comp policy where you're listed as exempt. This lets you provide a COI to clients or GCs who require proof of workers' comp without paying for full coverage. We arrange ghost policies specifically for this purpose." },
  { q: "What are the penalties for improperly filing a workers' comp exemption?", a: "Penalties vary by state but can include stop-work orders, fines calculated per day of non-compliance, retroactive premium assessments for the period without coverage, and personal liability for injured worker claims. Florida, for example, assesses penalties of 2x the premium that should have been paid for the period of non-compliance." },
  { q: "Are construction workers' comp exemption rules different from other industries?", a: "Yes — significantly. Most states apply stricter rules to construction industry workers. In Florida, sole proprietors in construction are NOT automatically exempt (unlike in most other industries). Many states cap the number of exempt officers per construction firm. If you're in construction, standard exemption guidance often doesn't apply to you." },
  { q: "Are there state-specific filing deadlines I should know about?", a: "Yes. Each state has different filing windows, renewal cycles, and deadline rules. Florida requires biennial renewal. Some states require filing before the work begins. Missing a deadline can leave you without a valid exemption and exposed to penalties. We track deadlines and file proactively so you don't miss a window." },
  { q: "Do LLC members in Florida qualify for a workers' comp exemption?", a: "Yes — LLC members in Florida can file an exemption through the Division of Workers' Compensation, subject to the same 10-member cap per company that applies to corporate officers in construction. Non-construction LLC members have different rules. We review your Florida LLC structure and file the correct exemption." },
  { q: "Do you file workers' comp exemptions in all 50 states?", a: "Yes. Contractors Choice Agency is licensed in all 50 states and files workers' comp exemptions for sole proprietors, corporate officers, and LLC members in every state. Rules vary significantly by state, which is why state-specific expertise matters." },
  { q: "How fast can I get a workers' comp exemption consultation?", a: "Typically 15 minutes by phone or online form. We review your business structure and state, confirm eligibility, and advise you on the exact filing needed. For more complex multi-state situations, we may need a follow-up, but we move fast." },
  { q: "Should I get alternative coverage if I'm exempt from workers' comp?", a: "Often yes. Being exempt from workers' comp means you have no coverage if you're injured on the job. Occupational accident insurance, health coverage, and disability insurance can fill that gap for exempt business owners. We advise on the right combination based on your situation and risk tolerance." },
];

/* ============================================================
   GENERAL FAQ — pads service & location pages to 20.
   ============================================================ */
export const GENERAL_FAQS = [
  { q: "How much does workers' comp exemption filing cost?", a: "Our filing fees vary by state and complexity. State filing fees (if any) are typically $50–$100. We charge a service fee for handling the paperwork, documentation, and submission. Call us for current pricing — it's far less than the cost of a workers' comp policy." },
  { q: "Do you file exemptions in all 50 states?", a: "Yes. Contractors Choice Agency is licensed in all 50 states and files workers' comp exemptions for sole proprietors, corporate officers, and LLC members nationwide." },
  { q: "How fast can we get an exemption filed?", a: "Typically we can complete the filing within 1–3 business days of receiving your documentation. State processing times vary — Florida, for example, typically approves exemptions within a few weeks." },
  { q: "What if my exemption is denied?", a: "We review the denial reason, advise whether you have grounds to appeal or correct the filing, and help you pursue the right path — whether that's refiling, appealing, or placing a ghost policy in the interim." },
  { q: "Should I use a ghost policy instead of an exemption?", a: "A ghost policy and an exemption serve different purposes. An exemption removes you from WC requirements. A ghost policy gives you a COI while maintaining your exempt status. Many business owners use both — an exemption plus a ghost policy for COI purposes." },
  { q: "What does an A-rated carrier mean and why does it matter?", a: "A.M. Best ratings reflect a carrier's financial strength. When we place alternative coverage or ghost policies for exempt business owners, we use A-rated carriers so the coverage is real and the COI will be accepted by general contractors and clients." },
  { q: "Do you help with occupational accident insurance for exempt owners?", a: "Yes. Occupational accident insurance is one of the primary alternatives for exempt business owners who want injury protection without workers' comp. We place occupational accident policies with carriers that specialize in this coverage." },
  { q: "How do I know if my current exemption is still valid?", a: "We can review your current exemption status, confirm the filing is on record with your state, and check the renewal date. Many business owners discover their exemption lapsed when they get audited — we prevent that proactively." },
  { q: "What information do you need to file my exemption?", a: "Typically: your business name and EIN, state of operation, business structure (sole prop, LLC, corporation), ownership percentage, industry/work type, and the names and ownership percentages of all owners being exempted." },
  { q: "Do exemptions cover out-of-state work?", a: "Generally no — your exemption is valid in the state where it was filed. If you work in multiple states, you may need exemptions in each state, or we may recommend a ghost policy that provides multi-state COI coverage." },
  { q: "Are there any industries where exemptions aren't allowed?", a: "Yes. Construction is the most common restricted industry — many states have stricter rules or exclusions for construction work. Some states also restrict exemptions in healthcare, staffing, and other high-hazard industries." },
  { q: "What happens if I hire employees after filing an exemption?", a: "If you hire W-2 employees after filing an exemption, your exemption may no longer cover you — and workers' comp becomes required for your employees. We advise you on how to structure coverage when your workforce changes." },
  { q: "Can I cancel my workers' comp policy once my exemption is approved?", a: "Once your exemption is approved and in effect, you can typically cancel the underlying workers' comp policy (if you had one). We advise on the correct timing and help you avoid lapses or penalties during the transition." },
  { q: "Do you offer coverage review consultations even if I'm already exempt?", a: "Yes. We review your current exemption, assess whether you have the right alternative coverage in place, and advise on any changes to state rules that may affect your status. An annual compliance review is a best practice for exempt business owners." },
];

/* ============================================================
   SERVICE DETAIL
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "exemption-filing": {
    heroBlurb: "We handle the state exemption filing process from start to finish — correct forms, required documentation, and timely submission so your exemption is approved without delays, rejections, or costly state follow-ups.",
    whatsCovered: ["Complete exemption form preparation and state submission", "Ownership documentation review and compilation", "State filing fee coordination", "Approval confirmation and record keeping", "Annual renewal tracking and re-filing", "Certificate of exemption issuance"],
    whoItsFor: ["Sole proprietors in states requiring formal exemption filing", "Corporate officers who want to exclude themselves from WC coverage", "LLC members filing member or manager exemptions", "Business owners whose previous exemption was denied or lapsed", "Contractors needing exemptions before starting a new project"],
    whyCca: ["We know your state's specific exemption forms and requirements", "We confirm eligibility before filing so you don't get a denial", "We track renewal deadlines so your exemption never lapses"],
    faqs: [
      { q: "What does the exemption filing process look like?", a: "We start with an eligibility review — confirming you qualify under your state's rules for your business type and industry. Then we prepare the correct state forms, compile required documentation, submit the filing, and track approval. We notify you when your exemption is confirmed." },
      { q: "How long does it take to get an exemption approved?", a: "Processing times vary by state. Florida typically approves exemptions within a few weeks. Some states are faster. We file promptly after your documentation is ready and follow up with the state if processing takes longer than expected." },
      { q: "What documentation do I need to provide?", a: "Typically: your business name, EIN, state of incorporation or registration, proof of ownership (percentage), industry type, and officer or member information. We'll tell you exactly what's needed for your specific state and situation." },
      { q: "What if my exemption is denied?", a: "We review the denial reason and advise whether you have grounds to correct and refile or appeal. Most denials result from documentation issues rather than eligibility problems — we help you fix and resubmit." },
      { q: "Do exemptions need to be renewed?", a: "In many states, yes. Florida requires biennial renewal. We track your renewal date and proactively handle the refiling so your exemption stays valid without interruption." },
      { q: "Can I file my own exemption without using your service?", a: "Yes — most states have online filing portals. However, filing errors, missing documentation, and incorrect form selection are common pitfalls that lead to denials or delays. Our service eliminates that risk and ensures the filing is done correctly." },
      { q: "Is there a filing fee?", a: "Some states charge a nominal filing fee ($50–$100). We coordinate the payment and handle all submission logistics on your behalf." },
    ],
  },
  "sole-proprietor-exemption": {
    heroBlurb: "Most states automatically exempt sole proprietors from workers' comp requirements — but construction industry exceptions and subcontractor rules can change your status. We review your specific situation before advising.",
    whatsCovered: ["Automatic exemption verification for your state and industry", "Construction-industry exception analysis", "Subcontractor rule review when hiring others", "Formal exemption filing where your state requires it", "Documentation for client or GC verification requests", "Alternative coverage review for going-bare risks"],
    whoItsFor: ["Self-employed sole proprietors in non-construction industries", "Solo contractors in construction needing state-specific guidance", "Business owners unsure whether their 'automatic' exemption is valid", "Sole proprietors hiring subcontractors who need COI proof"],
    whyCca: ["We know which states require formal filing even for sole proprietors", "We flag construction exceptions before they become compliance problems", "We advise on occupational accident coverage for injury risk management"],
    faqs: [
      { q: "Are sole proprietors automatically exempt from workers' comp?", a: "In most states, yes — sole proprietors are excluded from the workers' comp requirement for themselves. However, this varies by state and industry. Construction is the most common exception: many states require sole proprietors in construction to either carry coverage or formally file an exemption." },
      { q: "Does my exemption cover my subcontractors?", a: "No. Your sole proprietor exemption only applies to you as the business owner. If you hire subcontractors, each must have their own workers' comp coverage or a valid exemption. If a subcontractor without coverage is injured on your job, you may be liable for their workers' comp costs." },
      { q: "What if I'm a sole proprietor in Florida doing construction work?", a: "Florida is one of the states where sole proprietors in construction are NOT automatically exempt — unlike in most other industries. You'll need to either carry workers' comp or file a formal exemption through the Florida Division of Workers' Compensation. We handle that filing for you." },
      { q: "Do I need a COI if I'm exempt as a sole proprietor?", a: "If a client or general contractor requires proof of workers' comp, you'll need a certificate of insurance — which a sole proprietor exemption alone doesn't provide. A ghost policy (minimum premium WC) gives you a COI while maintaining your exempt status. We arrange ghost policies specifically for this." },
      { q: "What are the risks of being a sole proprietor without workers' comp?", a: "If you're injured on the job, you have no coverage for medical bills or lost income. Occupational accident and disability insurance can fill that gap for exempt sole proprietors — we advise on the right combination based on your risk tolerance." },
    ],
  },
  "corporate-officer-exemption": {
    heroBlurb: "Corporate officers often qualify to exempt themselves from workers' comp coverage — but the rules vary widely by state. Ownership percentage, officer title, industry, and the number of officers per company all matter.",
    whatsCovered: ["Officer exemption eligibility review by state", "Ownership percentage verification and documentation", "Multi-officer exemption coordination (respecting state caps)", "Construction-industry officer exemption filing", "Exemption certificate issuance", "Alternative coverage for exempt officers"],
    whoItsFor: ["Corporate officers (president, VP, secretary, treasurer) in qualifying states", "Small business owners operating as S-corps or C-corps", "Construction company officers needing to reduce WC costs", "Officers in states with 10-officer or similar caps"],
    whyCca: ["We know ownership percentage requirements for every state", "We coordinate multi-officer filings respecting state caps", "We file correctly the first time so exemptions aren't rejected"],
    faqs: [
      { q: "What is a corporate officer workers' comp exemption?", a: "It's a formal exclusion filed with your state's workers' comp regulator that removes a qualifying corporate officer from the company's WC policy. Once approved, the officer is not counted in payroll for premium purposes and is not covered by the policy — reducing premium cost." },
      { q: "Who qualifies as an 'executive officer' for exemption purposes?", a: "State definitions vary, but typically include the president, CEO, vice president, secretary, treasurer, and sometimes directors who also hold officer titles. Simply having a title may not be enough — most states require a minimum ownership percentage (often 10–25%)." },
      { q: "Are there limits on how many officers can be exempt?", a: "Yes — many states cap the number of exempt officers per company. Florida, for example, caps corporate officer exemptions at 10 per company in the construction industry. We check your state's cap before filing and coordinate accordingly." },
      { q: "What if I don't meet the ownership percentage requirement?", a: "If you don't meet the threshold, you generally can't file an officer exemption — you'd be covered under the company's WC policy. We advise on whether restructuring ownership is appropriate or whether ghost policy alternatives make more sense." },
      { q: "Does an officer exemption protect me if I'm injured at work?", a: "No — an officer exemption removes you from WC coverage. If you're injured on the job, you have no WC benefits. We recommend pairing an officer exemption with occupational accident or disability coverage so you're not going completely bare." },
      { q: "Can I be rejected for an officer exemption even if I qualify?", a: "Processing errors, missing documentation, and form selection mistakes can all lead to denials even when you genuinely qualify. That's why professional filing matters — we ensure the submission is complete and correct before it goes to the state." },
    ],
  },
  "llc-member-exemption": {
    heroBlurb: "LLC members may qualify for workers' comp exemptions, but the rules depend on your state, your LLC structure, and whether the LLC is member-managed or manager-managed. We sort out the details and file correctly.",
    whatsCovered: ["LLC member exemption eligibility review", "Member-managed vs. manager-managed LLC analysis", "Single-member and multi-member LLC exemption filing", "State-specific LLC exemption form preparation", "Ownership documentation compilation", "Alternative coverage advice for exempt LLC members"],
    whoItsFor: ["LLC members who want to exempt themselves from WC requirements", "Single-member LLCs unsure of their automatic exemption status", "Multi-member LLCs with varying ownership percentages", "LLC members in construction needing state-specific filings"],
    whyCca: ["We know which states treat LLC members as employees vs. self-employed", "We handle member-managed and manager-managed LLC distinctions", "We file the right form for your LLC type — not a one-size-fits-all submission"],
    faqs: [
      { q: "Are LLC members automatically exempt from workers' comp?", a: "It depends on the state. Some states treat LLC members as self-employed (and therefore exempt); others treat them as employees of the LLC (and therefore required to be covered). The member-managed vs. manager-managed distinction matters in many states." },
      { q: "What's the difference between a member-managed and manager-managed LLC?", a: "In a member-managed LLC, all members participate in running the business. In a manager-managed LLC, designated managers (who may or may not be members) run operations while other members are passive investors. Many states apply different exemption rules to these two structures." },
      { q: "Do single-member LLC owners need to file a workers' comp exemption?", a: "In many states, single-member LLCs are treated like sole proprietors — the owner may be automatically exempt or may need to file a formal exemption depending on the state and industry. Florida and California, for example, have different rules for single-member LLCs." },
      { q: "What are Florida's LLC member exemption rules?", a: "Florida allows LLC members to file an exemption through the Division of Workers' Compensation, subject to a 10-member cap per company in construction industries. Non-construction LLC members have different rules. We review your Florida LLC structure and file the correct exemption." },
      { q: "What are California's rules for LLC members and workers' comp?", a: "California is one of the stricter states — LLC members are often required to carry workers' comp or be properly excluded through the appropriate state process. California's enforcement is aggressive, making correct filing especially important." },
      { q: "What if I have both employees and LLC members in my company?", a: "Your LLC members may be exempt while your W-2 employees are required to be covered. We help you structure the exemptions correctly so members are excluded and employees are properly covered — avoiding audit problems." },
    ],
  },
  "exemption-review": {
    heroBlurb: "Not everyone qualifies for a workers' comp exemption — and filing incorrectly can trigger audits or penalties. We review your business structure, state, and industry to confirm eligibility before you file.",
    whatsCovered: ["Business structure analysis (sole prop, LLC, corporation)", "State-specific exemption rule review", "Industry classification and exemption eligibility check", "Ownership percentage verification", "Current exemption status audit", "Compliance gap identification and recommendations"],
    whoItsFor: ["Business owners unsure whether they qualify for an exemption", "Companies that filed exemptions in the past and aren't sure they're still valid", "Businesses that changed structure (converted from sole prop to LLC, etc.)", "Contractors about to be audited who want to verify their exemption status"],
    whyCca: ["We review your full compliance picture — not just one filing", "We identify gaps before an auditor does", "We give you a clear action plan, not just a yes or no"],
    faqs: [
      { q: "Why do I need an exemption eligibility review?", a: "Exemption rules change, businesses evolve, and what qualified 3 years ago may not qualify today. An eligibility review confirms your current status is valid — catching problems before an audit or penalty rather than after." },
      { q: "What does the eligibility review cover?", a: "We review your business structure, ownership percentages, industry classification, state of operation, current exemption filings (if any), and renewal status. We identify any gaps and advise on what needs to be corrected or updated." },
      { q: "How long does an eligibility review take?", a: "Most reviews are completed in one call or within 24 hours. Complex multi-entity or multi-state situations may take a bit longer, but we move quickly and give you clear answers rather than vague guidance." },
      { q: "What if the review reveals I'm not properly exempt?", a: "We advise on your options — whether that's filing the correct exemption, placing a ghost policy in the interim, or obtaining workers' comp coverage to close the gap immediately. We help you get compliant without penalty if possible." },
      { q: "Is a review worth it if I've had an exemption for years?", a: "Yes — especially if your business has changed (added owners, changed structure, entered construction work, added employees). Long-standing exemptions that no longer meet current requirements are one of the most common audit triggers." },
    ],
  },
  "alternative-coverage": {
    heroBlurb: "Being exempt from workers' comp doesn't mean you should go without injury protection. We place occupational accident, health, and disability coverage for exempt business owners who want to manage their injury risk.",
    whatsCovered: ["Occupational accident insurance for exempt business owners", "Short-term and long-term disability coverage", "Health insurance coordination", "Accident medical expense coverage", "Death and dismemberment benefits", "Coverage that coordinates with your exemption status"],
    whoItsFor: ["Sole proprietors exempt from workers' comp who want injury protection", "Corporate officers and LLC members who filed exemptions", "Business owners who want a safety net without full workers' comp cost", "Contractors in high-injury-risk trades who understand the exposure"],
    whyCca: ["We specialize in the coverage gap that exemptions create", "Occupational accident policies placed with specialty carriers", "Coverage designed to work alongside your exempt status"],
    faqs: [
      { q: "Why do I need coverage if I'm exempt from workers' comp?", a: "A workers' comp exemption means you're not required to carry workers' comp — but it doesn't protect you if you're injured. Medical bills, lost income, and rehabilitation costs come out of your pocket. Occupational accident and disability insurance fill that gap at a fraction of the cost of a full WC policy." },
      { q: "What is occupational accident insurance?", a: "Occupational accident insurance is a type of policy that covers medical expenses, disability benefits, and accidental death benefits for injuries that happen while working. It's commonly used by exempt business owners as an alternative to workers' comp." },
      { q: "How does occupational accident insurance differ from workers' comp?", a: "Workers' comp is a state-mandated benefit system with no-fault coverage and specific benefit formulas. Occupational accident is a private insurance policy with coverage limits you choose and benefit terms defined in the policy — generally less expensive and more flexible than workers' comp." },
      { q: "What trades or industries benefit most from alternative coverage?", a: "High-injury-risk trades: roofing, framing, electrical, plumbing, HVAC, general contracting, landscaping, and similar physical trades. Even if you're exempt, the injury risk is real and the financial exposure without coverage can be significant." },
      { q: "Can I combine a ghost policy with occupational accident coverage?", a: "Yes — and we recommend it for many exempt business owners. The ghost policy provides a COI to satisfy contractor requirements; the occupational accident policy provides actual injury protection. Together they give you compliance and personal protection." },
    ],
  },
  "ghost-policy": {
    heroBlurb: "A ghost policy is a workers' comp policy where the owner is listed but excluded via an exemption — providing a certificate of insurance without the cost of full coverage. Commonly used when clients or GCs require proof of WC.",
    whatsCovered: ["Minimum premium workers' comp policy issuance", "Certificate of insurance (COI) generation", "Owner listed but excluded from coverage", "State-compliant policy structure", "Annual policy management and renewal", "COI delivery to clients and general contractors"],
    whoItsFor: ["Exempt business owners who need a COI to satisfy client or GC requirements", "Sole proprietors and LLC members in construction needing proof of WC", "Corporate officers who need project-specific COI documentation", "Business owners in Florida, Texas, Arizona, and Georgia where ghost policies are most common"],
    whyCca: ["We place ghost policies quickly so you don't lose contracts waiting for a COI", "Policies placed with A-rated carriers whose COIs are accepted everywhere", "We coordinate the ghost policy with your exemption filing so both are in order"],
    faqs: [
      { q: "What exactly is a ghost policy?", a: "A ghost policy is a workers' comp insurance policy where the only covered person (the business owner) is excluded via an officer or member exemption — so the policy exists and issues a COI, but provides no actual benefit payments because the only person is exempt. It's used to satisfy COI requirements from clients or general contractors." },
      { q: "How much does a ghost policy cost?", a: "Ghost policies typically cost $800–$2,500 per year depending on your state, business classification, and carrier. That's far less than the cost of a full workers' comp policy for an active workforce, making it an economical way to maintain COI access while staying exempt." },
      { q: "When should I use a ghost policy vs. a full workers' comp policy?", a: "Use a ghost policy when: you're a legitimate exempt owner who needs a COI for client requirements. Use a full WC policy when: you have employees or subcontractors who need coverage, or your state requires coverage regardless of exemption status. We advise on the right choice for your situation." },
      { q: "Are ghost policies subject to audit?", a: "Yes — like all WC policies, ghost policies can be audited. Because the owner is exempt and there's no payroll to audit, most audits confirm the policy was correctly structured. The key is having a valid exemption on file that matches the officer exclusion on the policy — we ensure both are in order." },
      { q: "In which states are ghost policies most common?", a: "Florida, Texas, Arizona, and Georgia have the highest concentration of ghost policy usage — largely because construction industry activity is high in those states and COI requirements are common. Ghost policies are available in all 50 states." },
      { q: "Will my ghost policy COI be accepted by general contractors?", a: "COIs from ghost policies placed with A-rated carriers are generally accepted by general contractors. Occasionally a GC has specific carrier requirements — we check those in advance and place with an acceptable carrier." },
    ],
  },
  "state-compliance": {
    heroBlurb: "Workers' comp exemption rules change. Annual renewals, industry-specific requirement updates, and state enforcement sweeps can catch business owners off guard. We keep you compliant and provide certificates when you need them.",
    whatsCovered: ["Exemption renewal tracking and timely refiling", "State rule change monitoring for your industry", "Compliance certificate issuance", "Multi-state compliance coordination", "Stop-work order response and remediation", "Audit support and documentation"],
    whoItsFor: ["Business owners with existing exemptions who want ongoing compliance assurance", "Multi-state contractors with exemptions in several jurisdictions", "Companies that have received stop-work orders or audit notices", "Business owners approaching exemption renewal deadlines"],
    whyCca: ["We track renewal deadlines across all 50 states — you don't have to", "We respond to state inquiries and audits on your behalf", "We know when states change their rules and notify you proactively"],
    faqs: [
      { q: "How often do workers' comp exemption rules change?", a: "State legislatures and workers' comp regulators update exemption rules periodically — sometimes annually. Florida, for example, has changed construction industry exemption rules multiple times in the past decade. We track updates in all 50 states and notify you when changes affect your exemption." },
      { q: "What happens if I miss an exemption renewal deadline?", a: "Your exemption lapses immediately — meaning you may be in non-compliance until you refile and get re-approved. Some states assess penalties for the lapse period. We track renewal dates and file proactively, typically 60–90 days before your deadline." },
      { q: "What is a stop-work order and how do I respond?", a: "A stop-work order is issued by state regulators when a business is found operating without required workers' comp coverage. It halts your work until coverage or a valid exemption is in place. We help you respond quickly — getting the correct filing or coverage in place to lift the order." },
      { q: "Can you help if I'm being audited?", a: "Yes. We assist with audit documentation, exemption verification, and communication with state auditors. Having a properly filed and documented exemption is your best defense — we make sure yours is in order before and during an audit." },
      { q: "How do you handle multi-state compliance?", a: "We track exemption status, renewal dates, and rule changes in each state where you operate. For business owners working in multiple states, we coordinate filings so there are no gaps in your exemption coverage across jurisdictions." },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — coverage page
   (export name stays AZ_REGIONS for template compatibility)
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Florida", note: "Construction exemption capital — 10-officer cap, annual renewal, strict rules" },
  { name: "Arizona", note: "Sole prop and corporate officer exemptions common among AZ contractors" },
  { name: "Texas", note: "Non-subscriber state — largest employer opt-out system in the US" },
  { name: "Georgia", note: "LLC member exemptions, sole proprietor rules, construction industry compliance" },
  { name: "North Carolina", note: "Strict construction exemption rules, subcontractor coverage requirements" },
  { name: "Ohio", note: "State-fund WC system, self-insured options, corporate officer exemption rules" },
  { name: "Illinois", note: "Construction subcontractor exemption challenges, LLC member rules" },
  { name: "California", note: "Officer exemptions for corporations, LLC rules, strict enforcement" },
];

export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

export const QUOTE_SERVICE_TYPES = [
  "Workers' Comp Exemption Filing",
  "Sole Proprietor Exemption Guidance",
  "Corporate Officer Exemption",
  "LLC Member Exemption",
  "Exemption Eligibility Review",
  "Alternative Coverage When Exempt",
  "Ghost Policy / Minimum WC",
  "State Compliance & Certificates",
  "Full review / not sure what I need",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
