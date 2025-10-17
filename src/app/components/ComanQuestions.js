"use client";
import { useState } from "react";

function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Local Library?",
      answer:
        "Local Library helps students find verified and peaceful study spaces with great facilities for focused preparation.",
    },
    {
      question: "How can I book a study space?",
      answer:
        "You can browse available libraries, select your preferred location, and book instantly through our platform.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, our mobile app is available for Android and iOS for easy access and on-the-go bookings.",
    },
    {
      question: "Do I need to create an account to book?",
      answer:
        "Yes, signing up allows you to manage your bookings and access exclusive offers.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes, bookings can be canceled up to 24 hours before the reserved time slot.",
    },
    {
      question: "Are there any discounts for students?",
      answer:
        "Absolutely! We provide student discounts and membership programs for frequent users.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach us via email at contact@locallibraries.in or call +91 9591 907 942.",
    },
    {
      question: "Is payment secure on your website?",
      answer:
        "Yes, we use encrypted payment gateways to ensure complete security of your transactions.",
    },
    {
      question: "Can I suggest a new library to be added?",
      answer:
        "Of course! You can suggest a new library via the feedback section on our website.",
    },
    {
      question: "What are the operating hours?",
      answer:
        "Most libraries operate from 7 AM to 10 PM, but hours may vary depending on location.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 py-12 px-2 sm:px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-600">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-5 py-4 bg-gray-100 hover:bg-gray-200 transition-all flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-xl text-gray-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 py-4 text-gray-700 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
