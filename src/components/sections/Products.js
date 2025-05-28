"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";

const Products = () => {
  const products = [
    {
      name: "Climint",
      description:
        "A gamified green-action app where users earn rewards by checking in every 8 hours and practicing sustainable habits.",
      features: [
        "Daily check-ins",
        "Sustainable habit tracking",
        "Reward system",
        "Community challenges",
      ],
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
      name: "Coming Soon",
      description:
        "We are working on more innovative solutions to make sustainable living easier and more rewarding.",
      features: [
        "Carbon footprint tracking",
        "Sustainable shopping guide",
        "Community marketplace",
        "Impact analytics",
      ],
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
    <section id="products" className="bg-accent/5 py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-textDark md:text-4xl">
            Our GreenTech Products
          </h2>
          <p className="mt-6 text-lg text-textLight">
            Explore innovations that put climate at the center.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-xl bg-white p-8 shadow-lg"
            >
              <div className="flex items-center space-x-4">
                {product.icon}
                <h3 className="font-heading text-2xl font-semibold text-textDark">
                  {product.name}
                </h3>
              </div>
              <p className="mt-4 text-textLight">{product.description}</p>
              <ul className="mt-6 space-y-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-textLight"
                  >
                    <svg
                      className="mr-2 h-5 w-5 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              {product.name === "Climint" && (
                <div className="mt-8">
                  <Button variant="primary">Learn More</Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
