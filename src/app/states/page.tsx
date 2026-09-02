import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FiftyStateMap } from "@/components/sections/FiftyStateMap";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { US_STATES } from "@/lib/states";

export const metadata: Metadata = {
  title: `Workers' Comp Exemption by State — All 50 States | ${SITE.name}`,
  description:
    "Workers' compensation exemption filing help in all 50 states. Pick your state for its exemption details.",
  alternates: { canonical: `${SITE.url}/states` },
};

export default function StatesIndexPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Workers' comp exemption by state",
    numberOfItems: US_STATES.length,
    itemListElement: [...US_STATES]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: `${SITE.url}/states/${s.slug}`,
      })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-14 md:pt-40 md:pb-16">
          <div className="container-tight text-center">
            <FadeIn>
              <span className="pill-clay">All 50 states</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Workers&rsquo; Comp Exemption{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">
                  by State
                </span>
              </h1>
              <p className="mt-6 lead max-w-2xl mx-auto">
                Exemption rules are set state by state. Choose yours below.
              </p>
            </FadeIn>
          </div>
        </section>

        <FiftyStateMap
          eyebrow="Choose your state"
          title="Every state, one page each"
          lead="Select a state on the map or from the list for its exemption details."
        />

        <CTABand
          title="Not sure which rules apply to you?"
          description="Tell us your state and business structure and we'll confirm whether you qualify."
        />
      </main>
      <Footer />
    </>
  );
}
