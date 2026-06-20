import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "workers compensation exemption",
    "workers comp exemption filing",
    "sole proprietor workers comp exemption",
    "corporate officer exemption",
    "LLC workers comp exemption",
    "Florida workers comp exemption",
    "Arizona workers comp exemption",
    "Texas workers comp exemption",
    "workers comp exemption form",
    "workers comp exemption requirements",
    "independent contractor exemption",
    "ghost policy workers comp",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Expert guidance on workers' comp exemptions — sole proprietor exemptions, corporate officer exclusions, LLC member filings, ghost policies, and alternative coverage. All 50 states. Licensed agency. 15-minute consultations.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — workers comp exemption filing` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Expert workers' comp exemption guidance — sole proprietors, corporate officers, LLC members. Ghost policies, alternative coverage, state compliance. All 50 states. 15-minute consultations.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Workers' Comp Exemption Filing",
      "Sole Proprietor Exemption Guidance",
      "Corporate Officer Exemption",
      "LLC Member Exemption",
      "Exemption Eligibility Review",
      "Alternative Coverage for Exempt Business Owners",
      "Ghost Policy / Minimum Workers Comp",
      "State Compliance & Certificates",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
