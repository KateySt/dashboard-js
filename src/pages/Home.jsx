import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-8 text-center"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to App</h1>
        <p className="text-gray-600 text-lg mb-6">
          Discover key events, visualize progress, and track impactful milestones in one intuitive view.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full transition">
            Get Started
          </button>
          <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-2 rounded-full transition">
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
