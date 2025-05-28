"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const About = () => {
  const points = [
    {
      title: "Why Climate Action?",
      description:
        "Climate change is the defining challenge of our time. We believe technology can be a powerful force for positive environmental impact.",
    },
    {
      title: "Tech as a Behavioral Change Tool",
      description:
        "By combining behavioral science with innovative technology, we create engaging solutions that make sustainable choices easier and more rewarding.",
    },
    {
      title: "UN SDGs Alignment",
      description:
        "Our mission aligns with the United Nations Sustainable Development Goals, particularly focusing on climate action and responsible consumption.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-textDark md:text-4xl">
            Our Vision
          </h2>
          <p className="mt-6 text-lg text-textLight">
            Ecoverse creates gamified, tech-powered solutions that inspire and
            reward climate-friendly choices.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
              className="rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"
            >
              <h3 className="font-heading text-xl font-semibold text-textDark">
                {point.title}
              </h3>
              <p className="mt-4 text-textLight">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative h-64 w-full max-w-2xl">
            {/* Placeholder for team illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 w-48 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="h-24 w-24 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
