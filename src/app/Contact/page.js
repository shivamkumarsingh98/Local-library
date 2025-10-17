import Head from "next/head";

export const metadata = {
  title: "Contact Us | Local Libraries - India's First Library Booking Site",
  description:
    "Get in touch with the Local Libraries team. We're here to help you with inquiries, partnerships, or support related to India's first library booking platform.",
  keywords:
    "Local Libraries contact, contact library booking site, library support India, partner with Local Libraries, book libraries online",
  openGraph: {
    title: "Contact Local Libraries | India's First Library Booking Site",
    description:
      "Reach out to the Local Libraries team for support, feedback, or collaboration opportunities.",
    url: "https://locallibraries.in/contact",
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
          content="Contact Local Libraries for inquiries, partnerships, or customer support. We're here to help."
        />
        <meta
          name="keywords"
          content="contact Local Libraries, library booking support, help, inquiry, library India"
        />
        <meta property="og:title" content="Contact Local Libraries" />
        <meta
          property="og:description"
          content="Get in touch with India's first library booking platform team."
        />
        <meta property="og:image" content="/images/Final Logo.jpg" />
      </Head>

      <section className="min-h-screen bg-white text-gray-900 py-16 px-6 sm:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or want to partner with us? We’d love to
            hear from you! Fill out the form below or reach us directly.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl shadow-md p-8 border border-gray-200">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Other Ways to Connect
          </h2>
          <p className="text-gray-600 mb-6">
            You can also reach us directly through the following channels:
          </p>

          <div className="grid sm:grid-cols-2 gap-8 text-left sm:text-center">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                📍 Office Address
              </h3>
              <p className="text-gray-600">
                Local Libraries Pvt. Ltd.
                <br />
                New Delhi, India
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                📧 Email
              </h3>
              <p className="text-gray-600">
                support@locallibraries.in
                <br />
                partnerships@locallibraries.in
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 export default Page