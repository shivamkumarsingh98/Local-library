import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "../Data";

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < count ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function Content() {
  const scrollRef = useRef(null);

  // Auto-scroll bottom to top
  useEffect(() => {
    const box = scrollRef.current;
    if (!box) return;
    let scroll = 0;
    let dir = 1;
    const maxScroll = box.scrollHeight - box.clientHeight;
    const interval = setInterval(() => {
      if (scroll >= maxScroll) dir = -1;
      if (scroll <= 0) dir = 1;
      scroll += dir * 1.5;
      box.scrollTop = scroll;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section className="w-full flex flex-col md:flex-row gap-8 py-12 px-4 md:px-12">
        {/* Left content */}
        <motion.div
          className="flex-1 flex flex-col justify-center mb-8 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            What is Local Library?
          </h2>

          {/* Subcontent */}
          <p className="text-gray-500 text-lg leading-relaxed mb-4">
            We are{" "}
            <span className="font-semibold text-blue-500">
              India's first platform
            </span>{" "}
            that allows students to Easily book{" "}
            <span className="font-semibold text-blue-500">
              verified libraries online
            </span>
            . With{" "}
            <span className="font-semibold text-blue-500">
              3000+ trusted libraries
            </span>
            listed across India, every partner library is{" "}
            <span className="font-semibold text-blue-500">
              verified and genuine
            </span>
            .
          </p>

          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            Every day,{" "}
            <span className="font-semibold text-blue-500">100+ students</span>
            book their seats through our platform. Our libraries provide{" "}
            <span className="font-semibold text-blue-500">
              top-class study facilities
            </span>{" "}
            — including high-speed WiFi, quiet study zones, AC halls, and
            digital resources — everything an aspirant needs for focused
            preparation.
          </p>

          {/* CTA Link */}
          <a
            href="#"
            className="inline-flex items-center text-blue-500 font-medium hover:underline"
          >
            Learn more <span className="ml-1">›</span>
          </a>

          {/* Highlights / Bullet points */}
          {/* <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <span className="font-semibold text-gray-900">
              PAN India presence
            </span>{" "}
            – 3000+ libraries available
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              Daily active users
            </span>{" "}
            – 100+ students booking every day
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              Verified & Trusted
            </span>{" "}
            – 100% genuine libraries only
          </li>
          <li>
            <span className="font-semibold text-gray-900">
              Best Study Facilities
            </span>{" "}
            – WiFi, AC, digital access & more
          </li>
        </ul> */}
        </motion.div>

        {/* Right: review cards box */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
        >
          <div
            ref={scrollRef}
            className="w-full max-w-lg h-96 rounded-xl shadow-lg border border-blue-200 overflow-y-auto flex flex-col gap-4 p-4 bg-blue-50"
            style={{ scrollbarWidth: "none" }}
          >
            <AnimatePresence>
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-lg shadow flex flex-col px-5 py-4 min-h-[70px] max-w-full w-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-700 text-base">
                      {r.name}
                    </span>
                    <StarRow count={r.stars} />
                  </div>
                  <p className="text-gray-500 text-sm">{r.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>
      <section className="w-full flex flex-col md:flex-row gap-8 py-12 px-4 md:px-12">
        <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">
              Select tab
            </label>
            <select
              id="tabs"
              class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Statistics</option>
              <option>Services</option>
              <option>FAQ</option>
            </select>
          </div>
          <ul
            class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
          >
            <li class="w-full">
              <button
                id="stats-tab"
                data-tabs-target="#stats"
                type="button"
                role="tab"
                aria-controls="stats"
                aria-selected="true"
                class="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Statistics
              </button>
            </li>
            <li class="w-full">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="false"
                class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Services
              </button>
            </li>
            <li class="w-full">
              <button
                id="faq-tab"
                data-tabs-target="#faq"
                type="button"
                role="tab"
                aria-controls="faq"
                aria-selected="false"
                class="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                FAQ
              </button>
            </li>
          </ul>
          <div
            id="fullWidthTabContent"
            class="border-t border-gray-200 dark:border-gray-600"
          >
            <div
              class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="stats"
              role="tabpanel"
              aria-labelledby="stats-tab"
            >
              <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                  <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                  <dd class="text-gray-500 dark:text-gray-400">
                    Public repositories
                  </dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                  <dd class="text-gray-500 dark:text-gray-400">
                    Open source projects
                  </dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
                  <dd class="text-gray-500 dark:text-gray-400">Contributors</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                  <dd class="text-gray-500 dark:text-gray-400">
                    Top Forbes companies
                  </dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                  <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                  <dd class="text-gray-500 dark:text-gray-400">
                    Organizations
                  </dd>
                </div>
              </dl>
            </div>
            <div
              class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>
              <ul
                role="list"
                class="space-y-4 text-gray-500 dark:text-gray-400"
              >
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="leading-tight">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="leading-tight">Templates for everyone</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="leading-tight">Development workflow</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                  <svg
                    class="shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="leading-tight">
                    Limitless business automation
                  </span>
                </li>
              </ul>
            </div>
            <div
              class="hidden p-4 bg-white rounded-lg dark:bg-gray-800"
              id="faq"
              role="tabpanel"
              aria-labelledby="faq-tab"
            >
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span>What is Flowbite?</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  class="hidden"
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p class="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to{" "}
                      <a
                        href="/docs/getting-started/introduction/"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        get started
                      </a>{" "}
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-2">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"
                  >
                    <span>Is there a Figma file available?</span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-2"
                  class="hidden"
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                    <p class="text-gray-500 dark:text-gray-400">
                      Check out the{" "}
                      <a
                        href="https://flowbite.com/figma/"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Figma design system
                      </a>{" "}
                      based on the utility classes from Tailwind CSS and
                      components from Flowbite.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span>
                      What are the differences between Flowbite and Tailwind UI?
                    </span>
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-3"
                  class="hidden"
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Flowbite,
                      Flowbite Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                      <li>
                        <a
                          href="https://flowbite.com/pro/"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/"
                          rel="nofollow"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
