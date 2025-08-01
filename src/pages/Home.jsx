import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-3xl bg-white shadow-xl rounded-3xl p-8 sm:p-10 text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-4">
          Welcome to App
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Discover key events, visualize progress, and track impactful milestones—all in one intuitive view.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Get started with the app"
          >
            Get Started
          </button>
          <button
            className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Learn more about the app"
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
