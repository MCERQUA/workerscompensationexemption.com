import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { US_STATES, getStateBySlug } from "@/lib/states";
import { getStateExemption } from "@/lib/state-exemptions";
import { ArrowLeft, ArrowRight, MapPin, FileText, Building2, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return US_STATES.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

/** First sentence of a field — used to keep meta descriptions state-specific but short. */
function firstSentence(text: string, max = 155): string {
  const s = text.split(/(?<=\.)\s/)[0] ?? text;
  return s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return {};
  const data = getStateExemption(slug);
  const url = `${SITE.url}/states/${slug}`;
  // State-specific description — a real fact about this state, not a name-swapped template.
  const description = data
    ? firstSentence(data.coverageRequired)
    : `Workers' compensation exemption filing help for ${state.name} business owners.`;
  return {
    title: `${state.name} Workers' Comp Exemption — Rules & Filing | ${SITE.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${state.name} Workers' Comp Exemption`,
      description,
      url,
    },
  };
}

function Block({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-adobe bg-white p-6">
      <h3 className="flex items-center gap-2 font-heading font-bold text-espresso text-lg">
        {icon}
        {title}
      </h3>
      <p className="mt-3 text-mocha leading-relaxed">{body}</p>
    </div>
  );
}

export default async function StatePage({ params }: Props) {
  const { slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();
  const data = getStateExemption(slug);
  const url = `${SITE.url}/states/${slug}`;

  const sorted = [...US_STATES].sort((a, b) => a.name.localeCompare(b.name));
  const pos = sorted.findIndex((s) => s.slug === slug);
  const prev = sorted[(pos - 1 + sorted.length) % sorted.length];
  const next = sorted[(pos + 1) % sorted.length];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "States", item: `${SITE.url}/states` },
      { "@type": "ListItem", position: 3, name: state.name, item: url },
    ],
  };

  const faq = data && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `When is workers' compensation coverage required in ${state.name}?`,
        acceptedAnswer: { "@type": "Answer", text: data.coverageRequired },
      },
      {
        "@type": "Question",
        name: `Can a sole proprietor be exempt from workers' comp in ${state.name}?`,
        acceptedAnswer: { "@type": "Answer", text: data.soleProprietor },
      },
      {
        "@type": "Question",
        name: `How do you file for a workers' comp exemption in ${state.name}?`,
        acceptedAnswer: { "@type": "Answer", text: data.howToFile },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faq && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      )}
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-14 md:pt-40 md:pb-16">
          <div className="container-tight">
            <FadeIn>
              <Link href="/states" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-clay hover:text-clay-dark transition-colors">
                <ArrowLeft className="h-4 w-4" />All states
              </Link>
              <span className="mt-6 pill-clay inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />{state.abbr}
              </span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                {state.name} Workers&rsquo; Comp Exemption
              </h1>
              <p className="mt-6 lead max-w-2xl">
                We file workers&rsquo; compensation exemptions for {state.name} sole proprietors,
                LLC members, and corporate officers. Send us your details and we&rsquo;ll confirm
                whether you qualify and handle the filing.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20">
          <div className="container-tight">
            {data ? (
              <>
                <FadeIn>
                  <div className="rounded-3xl border border-adobe bg-sonoran-sand p-8 md:p-10">
                    <h2 className="font-heading font-extrabold text-espresso text-2xl">
                      When coverage is required in {state.name}
                    </h2>
                    <p className="mt-4 text-mocha leading-relaxed">{data.coverageRequired}</p>
                  </div>
                </FadeIn>

                <FadeIn className="mt-10">
                  <h2 className="font-heading font-extrabold text-espresso text-2xl">
                    Who can be excluded in {state.name}
                  </h2>
                  <div className="mt-6 grid gap-5 md:grid-cols-2">
                    <Block title="Sole proprietors" body={data.soleProprietor} />
                    {data.partners && <Block title="Partners" body={data.partners} />}
                    <Block title="LLC members" body={data.llcMembers} />
                    <Block title="Corporate officers" body={data.corporateOfficers} />
                  </div>
                </FadeIn>

                {data.construction && (
                  <FadeIn className="mt-10">
                    <div className="rounded-2xl border border-clay/30 bg-clay/5 p-6 md:p-8">
                      <h2 className="flex items-center gap-2 font-heading font-extrabold text-espresso text-xl">
                        <Building2 className="h-5 w-5 text-clay" />
                        Construction rules in {state.name}
                      </h2>
                      <p className="mt-3 text-mocha leading-relaxed">{data.construction}</p>
                    </div>
                  </FadeIn>
                )}

                <FadeIn className="mt-10">
                  <div className="rounded-3xl border border-adobe bg-white p-8 md:p-10">
                    <h2 className="flex items-center gap-2 font-heading font-extrabold text-espresso text-2xl">
                      <FileText className="h-5 w-5 text-clay" />
                      How the exemption is filed
                    </h2>
                    <p className="mt-4 text-mocha leading-relaxed">{data.howToFile}</p>

                    <dl className="mt-7 grid gap-4 sm:grid-cols-2 border-t border-adobe pt-6">
                      <div>
                        <dt className="text-xs font-heading font-bold uppercase tracking-wider text-clay">Agency</dt>
                        <dd className="mt-1 text-mocha">
                          <a href={data.agencyUrl} target="_blank" rel="noopener noreferrer"
                             className="inline-flex items-center gap-1.5 font-semibold text-espresso underline decoration-clay/40 underline-offset-2 hover:decoration-clay">
                            {data.agencyName}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-heading font-bold uppercase tracking-wider text-clay">Form</dt>
                        <dd className="mt-1 text-mocha">
                          {data.formName ? (
                            data.formUrl ? (
                              <a href={data.formUrl} target="_blank" rel="noopener noreferrer"
                                 className="inline-flex items-center gap-1.5 font-semibold text-espresso underline decoration-clay/40 underline-offset-2 hover:decoration-clay">
                                {data.formName}
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            ) : (
                              data.formName
                            )
                          ) : (
                            <span className="text-mocha/70">No state exemption form — see above</span>
                          )}
                        </dd>
                      </div>
                      {data.statuteCite && (
                        <div>
                          <dt className="text-xs font-heading font-bold uppercase tracking-wider text-clay">Statute</dt>
                          <dd className="mt-1 text-mocha">{data.statuteCite}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-xs font-heading font-bold uppercase tracking-wider text-clay">Market</dt>
                        <dd className="mt-1 text-mocha">
                          {data.monopolistic
                            ? `Monopolistic — coverage is bought only from the ${state.name} state fund, not a private carrier.`
                            : "Competitive — coverage is bought from a private carrier."}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </FadeIn>

                {data.notes && (
                  <FadeIn className="mt-10">
                    <div className="rounded-2xl border border-adobe bg-sonoran-sand p-6 md:p-8">
                      <h2 className="font-heading font-extrabold text-espresso text-xl">
                        Notes and open questions
                      </h2>
                      <p className="mt-3 text-mocha leading-relaxed">{data.notes}</p>
                    </div>
                  </FadeIn>
                )}

                <FadeIn className="mt-10">
                  <div className="border-t border-adobe pt-6">
                    <h2 className="font-heading font-bold text-espresso text-sm uppercase tracking-wider">
                      Sources
                    </h2>
                    <ul className="mt-3 space-y-1.5">
                      {data.sources.map((src) => (
                        <li key={src}>
                          <a href={src} target="_blank" rel="noopener noreferrer"
                             className="text-sm text-mocha underline decoration-adobe underline-offset-2 hover:text-clay break-all">
                            {src}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-mocha/70 leading-relaxed">
                      Source material dated {data.asOf}. Compiled from official {state.name} sources
                      as a starting point, not legal advice — rules change, and your situation may
                      turn on facts this page cannot see. Confirm with{" "}
                      <a href={data.agencyUrl} target="_blank" rel="noopener noreferrer" className="underline">
                        {data.agencyName}
                      </a>{" "}
                      or ask us and we&rsquo;ll check it for you.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn className="mt-8">
                  <Link href="/quote" className="btn-primary">
                    Request {state.name} exemption help<ArrowRight className="h-4 w-4" />
                  </Link>
                </FadeIn>
              </>
            ) : (
              <FadeIn>
                <div className="rounded-3xl border border-adobe bg-sonoran-sand p-8 md:p-10 max-w-3xl">
                  <h2 className="font-heading font-extrabold text-espresso text-2xl">
                    {state.name} exemption details
                  </h2>
                  <p className="mt-4 text-mocha">
                    We can answer {state.name} exemption questions directly while this page is
                    being completed.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href="/quote" className="btn-primary">
                      Request {state.name} exemption help<ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            )}

            <FadeIn className="mt-12">
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-adobe pt-8">
                <Link href={`/states/${prev.slug}`} className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-mocha hover:text-clay transition-colors">
                  <ArrowLeft className="h-4 w-4" />{prev.name}
                </Link>
                <span className="text-xs text-mocha/60">
                  State {pos + 1} of {sorted.length}
                </span>
                <Link href={`/states/${next.slug}`} className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-mocha hover:text-clay transition-colors">
                  {next.name}<ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <CTABand
          title={`Workers' comp exemption filing in ${state.name}`}
          description={`Tell us about your ${state.name} business and we'll confirm whether you qualify for an exemption.`}
        />
      </main>
      <Footer />
    </>
  );
}
