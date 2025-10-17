import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navebar from "./components/Navbar";
import Footer from "./components/Footer"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Local Libraries | India’s First Library Booking Site",
  description:
    "Book verified study spaces instantly with Local Libraries – India’s first library booking platform. Find nearby study rooms for SSC, UPSC, NEET, JEE, and more competitive exams.",
  keywords: [
    "library booking site",
    "study room booking",
    "reading room near me",
    "Local Libraries",
    "book library online",
    "study space India",
    "focus study area",
    "exam preparation room",
    "India’s first library booking site",
  ],
  authors: [{ name: "Local Libraries Team", url: "https://locallibraries.in" }],
  creator: "Local Libraries",
  publisher: "Local Libraries",
  alternates: {
    canonical: "https://locallibraries.in",
  },
  openGraph: {
    title: "Local Libraries | India’s First Library Booking Site",
    description:
      "Discover and book verified study spaces across India with Local Libraries — the country’s first dedicated library booking platform.",
    url: "https://locallibraries.in",
    siteName: "Local Libraries",
    images: [
      {
        url: "/images/Final Logo.jpg",
        width: 1200,
        height: 630,
        alt: "Local Libraries Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Libraries | India’s First Library Booking Site",
    description:
      "Book study rooms and verified libraries near you with Local Libraries — India’s first library booking platform.",
    images: ["/images/Final Logo.jpg"],
    creator: "@locallibraries",
  },
  icons: {
    icon: "/images/Final Logo.jpg",
    shortcut: "/images/Final Logo.jpg",
    apple: "/images/Final Logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  metadataBase: new URL("https://locallibraries.in"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Schema.org Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Local Libraries",
              url: "https://locallibraries.in",
              logo: "https://locallibraries.in/images/Final Logo.jpg",
              description:
                "Local Libraries is India’s first library booking site helping students and professionals find verified study spaces instantly.",
              sameAs: [
                "https://www.facebook.com/locallibraries",
                "https://twitter.com/locallibraries",
                "https://www.linkedin.com/company/locallibraries",
                "https://instagram.com/locallibraries",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9591907942",
                contactType: "Customer Support",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />

        {/* FAQ Schema (helps in “People Also Ask” on Google) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Local Libraries?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Local Libraries is India’s first online platform to find and book verified study spaces across cities for focused preparation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I book a library seat on Local Libraries?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply sign up, choose your nearby study library, select your preferred time, and confirm your booking instantly through our website.",
                  },
                },
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-[#f9fafb] text-gray-900`}
      >
        <Navebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
