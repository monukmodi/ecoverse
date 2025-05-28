"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-primary/5 py-20 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-textDark md:text-4xl">
            Be the First to Try Our Apps
          </h2>
          <p className="mt-6 text-lg text-textLight">
            Join our waitlist to get early access to our climate-positive
            products and exclusive updates.
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Joining..." : "Join the Waitlist"}
              </Button>
            </div>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-primary"
              >
                Thanks for joining! We'll be in touch soon.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-red-500"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </form>

          <p className="mt-4 text-sm text-textLight">
            By joining, you agree to receive updates about our products and
            services. You can unsubscribe at any time.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default Newsletter;
