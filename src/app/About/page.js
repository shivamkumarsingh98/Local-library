import Head from "next/head";

export const metadata = {
  title: "About Us | Local Libraries - India's First Library Booking Site",
  description:
    "Learn more about Local Libraries — India's first online platform for discovering and booking libraries near you. Read about our mission, vision, and journey.",
  keywords:
    "Local Libraries, about libraries, library booking, India's first library booking site, online library booking, reading spaces, study rooms",
  openGraph: {
    title: "About Local Libraries | India's First Library Booking Site",
    description:
      "Discover how Local Libraries is revolutionizing the way India reads, learns, and books library spaces online.",
    url: "https://locallibraries.in/about",
    type: "website",
    images: [
      {
        url: "/images/Final Logo.jpg",
        width: 800,
        height: 600,
        alt: "Local Libraries Logo",
      },
    ],
  },
};

function Page() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Local Libraries is India's first online platform for booking and discovering libraries. Learn about our mission and vision."
        />
        <meta
          name="keywords"
          content="Local Libraries, library booking India, study space booking, library platform"
        />
        <meta property="og:title" content="About Local Libraries" />
        <meta
          property="og:description"
          content="Learn more about India's first library booking platform."
        />
        <meta property="og:image" content="/images/Final Logo.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="min-h-screen bg-white text-gray-900 py-16 px-6 sm:px-12 lg:px-24">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Local Libraries is India's first library booking platform — making
            it easy for readers, students, and professionals to discover and
            reserve libraries with ease.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to make libraries more accessible to everyone across
            India. We believe that knowledge should never have barriers, and
            every student or learner deserves a peaceful environment to study,
            learn, and grow. Through technology, we bridge the gap between
            library owners and readers — creating a smarter, more connected
            reading ecosystem.
          </p>
        </div>

        {/* Vision Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a future where every city, town, and village in India
            has digital access to local libraries. Local Libraries aims to
            empower education by creating a network of verified, comfortable,
            and affordable study spaces — available anytime, anywhere.
          </p>
        </div>

        {/* Closing Section */}
        <div className="max-w-5xl mx-auto text-center border-t pt-8 border-gray-200">
          <h3 className="text-2xl font-bold text-blue-700 mb-3">
            Together, Let’s Build a Smarter India 📚
          </h3>
          <p className="text-gray-600">
            From students preparing for exams to professionals seeking a quiet
            corner — Local Libraries is here to make your learning journey
            simpler, smarter, and more accessible.
          </p>
        </div>
      </section>
    </>
  );
}

export default Page
