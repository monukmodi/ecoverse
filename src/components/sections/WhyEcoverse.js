"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const WhyEcoverse = () => {
  const benefits = [
    {
      title: "Sustainable by Design",
      description:
        "Every feature and decision is made with environmental impact in mind, ensuring our products contribute positively to the planet.",
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Behavioral Science-Driven",
      description:
        "We leverage proven behavioral science principles to create engaging experiences that encourage sustainable habits.",
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Tech That Rewards Good Habits",
      description:
        "Our innovative reward system makes sustainable choices more appealing and satisfying for users.",
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-ecoverse" className="py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-textDark md:text-4xl">
            Why Choose Ecoverse?
          </h2>
          <p className="mt-6 text-lg text-textLight">
            We combine cutting-edge technology with environmental consciousness
            to create meaningful impact.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative rounded-xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -top-4 left-8 rounded-lg bg-primary p-3 text-white transition-transform group-hover:scale-110">
                {benefit.icon}
              </div>
              <div className="mt-4">
                <h3 className="font-heading text-xl font-semibold text-textDark">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-textLight">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 rounded-xl bg-primary/5 p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10K+</div>
              <div className="mt-2 text-textLight">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50K+</div>
              <div className="mt-2 text-textLight">Green Actions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="mt-2 text-textLight">Partner Brands</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyEcoverse;
