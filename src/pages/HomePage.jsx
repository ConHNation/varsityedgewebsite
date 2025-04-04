
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram } from "lucide-react";

const testimonials = [
  {
    name: "Connor H.",
    quote: "Varsity Edge made it easy to host my own camp. They handled everything and I got paid — it was a no-brainer.",
  },
  {
    name: "Maya S.",
    quote: "Having my name on a camp was surreal. Varsity Edge brought in coaches, equipment, and handled all the logistics.",
  },
  {
    name: "Derrick H.",
    quote: "I got to host a camp with my name on it, impact younger athletes, and earn through my NIL — amazing experience.",
  },
  {
    name: "Samantha G.",
    quote: "These camps give you everything: skill, exposure, and a game plan for NIL success.",
  },
  {
    name: "Jalen R.",
    quote: "This camp helped me grow both on and off the field. The exposure through NIL was a game-changer.",
  },
  {
    name: "Avery T.",
    quote: "I got real training from pro-level coaches and learned how to build my brand at the same time.",
  },
];

const instagramLink = "#";

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const testimonialsPerPage = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < testimonialsPerPage; i++) {
      visible.push(testimonials[(current + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <div className="p-6 space-y-12 bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 px-6 bg-gray-800 text-white shadow-md rounded-xl">
        <div className="text-2xl font-bold">Varsity Edge</div>
        <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          <li><a href="/" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          <li><a href="/dashboard" className="hover:text-blue-400">Dashboard</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <motion.section
        className="text-center py-20 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Elevate Your Game. Expand Your Image.
        </h1>
        <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          We help athletes host their own branded camps — you bring the name, we handle the rest.
        </p>
      </motion.section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto overflow-hidden relative">
        <div className="min-h-[200px] relative flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 absolute w-full"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={index} className="rounded-2xl shadow-md bg-gray-800 text-white p-6">
                  <p className="italic">"{testimonial.quote}"</p>
                  <p className="mt-4 font-semibold text-right">— {testimonial.name}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-6 space-x-2 relative z-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                current === index ? "bg-blue-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Sections */}
      <section className="space-y-12" id="about">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">What We Do</h2>
            <p>
              Varsity Edge partners with athletes to create, manage, and operate camps branded in their name.
              We provide the coaches, gear, location, and organization — and you share in the profit.
            </p>
          </div>
          <img src="/1.jpg.webp" alt="What We Do" className="rounded-xl shadow-md w-full h-auto object-cover" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/2.jpg.webp" alt="How It Works" className="rounded-xl shadow-md w-full h-auto object-cover md:order-2" />
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-2">How It Works</h2>
            <p>
              You reach out to us with your camp idea. We set it up using your NIL — think "Connor Hayden Quarterback Camp."
              We run the event, and you get paid a portion of the profits.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <h2 className="text-3xl font-bold mb-2">Why Varsity Edge?</h2>
            <p>
              We make hosting a personal-branded camp effortless. We handle every detail, provide expert coaching staff
              and equipment, and give athletes a new way to benefit from their name.
            </p>
          </div>
          <img src="/3.jpg.webp" alt="Why Varsity Edge" className="rounded-xl shadow-md w-full h-auto object-cover" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center border-t border-gray-700 pt-6 pb-4 text-sm text-gray-400" id="contact">
        <div className="flex justify-center mb-2">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Varsity Edge. All rights reserved.</p>
      </footer>
    </div>
  );
}
