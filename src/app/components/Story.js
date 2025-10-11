"use client"; // use client
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Testimonial data (Add images here)
const testimonials = [
  {
    id: 1,
    name: "Ashwani Rai",
    story:
      "This service changed my life! The instructors were patient and the lessons were easy to follow. I remember struggling with parallel parking, but my instructor worked with me until I mastered it. Now, I can park anywhere with confidence!",
    city: "Mirzapur",
    age: 25,
  },
  {
    id: 2,
    name: "Subham Mishra",
    story:
      "I learned to drive in no time! The flexible scheduling was perfect for my busy life. I appreciated being able to book lessons during my lunch breaks. The convenience allowed me to fit driving into my hectic routine without stress.",
    city: "Noida",
    age: 30,
  },
  {
    id: 3,
    name: "Vipin Soni",
    story:
      "Great experience with the instructors. I was able to overcome my fear of driving. After my first few lessons, I felt a sense of accomplishment. The instructors were always encouraging, and they helped me regain my confidence on the road.",
    city: "Varanasi",
    age: 28,
  },
  {
    id: 4,
    name: "Manoj Kumar",
    story:
      "I passed my driving test on the first try thanks to the expert guidance I received. The practice sessions focused on the specific areas I needed help with, making me feel well-prepared on test day. The feeling of driving away with my license was exhilarating!",
    city: "Noida",
    age: 22,
  },
  {
    id: 5,
    name: "Sonu Singh",
    story:
      "The learning process was smooth and hassle-free. I would recommend it to anyone! The instructors were not only knowledgeable but also made every lesson enjoyable. I particularly liked the real-time feedback during my practice drives.",
    city: "Varanasi",
    age: 27,
  },
  {
    id: 6,
    name: "Rahul Bind",
    story:
      "The instructors were incredibly helpful and made the lessons enjoyable. I looked forward to each session because they incorporated fun exercises that made learning easier. I even got to drive on scenic routes, which made practice feel less like a chore!",
    city: "Delhi",
    age: 35,
  },
  {
    id: 7,
    name: "Pinky",
    story:
      "Affordable and flexible! I was able to take lessons after work and on weekends. This was a game changer for me as I have a full-time job. The instructors tailored each lesson to my needs, which helped me learn at my own pace.",
    city: "Delhi",
    age: 29,
  },
  {
    id: 8,
    name: "Sunny",
    story:
      "I was able to learn at my own pace, and the app made everything so convenient. I loved how I could review my lessons on the app anytime, which reinforced what I learned during my sessions. The resources were truly invaluable.",
    city: "varanasi",
    age: 33,
  },
  {
    id: 9,
    name: "Shivam",
    story:
      "The best way to learn how to drive! I now feel confident on the road. The instructors personalized my learning experience, and I felt fully prepared for my driving test. Now I enjoy long drives, exploring new places!",
    city: "Noida",
    age: 24,
  },
  {
    id: 10,
    name: "Amit Kumar",
    story:
      "Excellent service! The flexibility and affordable lessons really helped me. I was impressed by how the instructors adapted to my learning style. They encouraged me to ask questions, which made me feel comfortable and engaged.",
    city: "Noida",
    age: 26,
  },
];

function Story() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the interval time for scrolling (3 seconds here)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-orange-500 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What Our Students Say
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <svg
                className="absolute -left-3 -top-10 w-12 h-15 text-blue-600/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 ">
                {testimonials[currentIndex].story}
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-semibold">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-white">
                  {testimonials[currentIndex].city}, Age{" "}
                  {testimonials[currentIndex].age}
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-white">100+</p>
                  <p className="text-sm text-white">Reviews</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">4.9/5</p>
                  <p className="text-sm text-white">Rating</p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-blue-500 w-8"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <Image
                src="/images/heroimage.jpg" // Update with your image path
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover rounded-2xl"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D13] to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Story;
