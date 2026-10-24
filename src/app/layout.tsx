import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-opensans",
  display: "swap",
});

const defaultTitle = "Prestigious Home Improvements | Port Charlotte Remodeling";
const defaultDescription =
  "Licensed residential general contractor in Port Charlotte, FL. Kitchens, baths, whole-home remodels, impact windows, lanais and storm rebuilds across SWFL.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s` },
  description: defaultDescription,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: defaultDescription },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
};

const contractorSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/icon`,
  image: `${site.url}/opengraph-image`,
  telephone: "+1-941-223-4875",
  email: site.email,
  foundingDate: String(site.founded),
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.address.geo.lat, longitude: site.address.geo.lng },
  areaServed: [
    ...site.serviceAreas.map((name) => ({ "@type": "City", name: `${name}, FL` })),
    ...site.counties.map((name) => ({ "@type": "AdministrativeArea", name: `${name}, FL` })),
  ],
  sameAs: [site.social.facebook, site.social.instagram, site.ratings.yelp.href, site.ratings.bbb.href],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  openingHours: "Mo-Fr 08:00-18:00",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: site.licenseLabel,
  },
  founder: site.owners.map((o) => ({ "@type": "Person", name: o.name, jobTitle: o.role })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="min-h-screen bg-sand-50 font-body text-ink-900 antialiased">
        <Schema data={contractorSchema} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
