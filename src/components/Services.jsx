import React from "react";
import { FaCloud, FaCode, FaTools, FaUserFriends } from "react-icons/fa"; // Importing icons
import { SiGooglecloud, SiMicrosoftazure } from "react-icons/si";
import { motion } from "framer-motion"; // Importing framer-motion for animation

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I provide expertise in IT support, web development, cloud technologies,
        and agile methodologies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 my-10">
        {/* Support IT */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <FaTools className="w-10 h-10 text-purple-500" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Support IT
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            EasyVista, Power BI, VmWare HyperV & Excel
          </p>
          <a href="#" className="flex items-center gap-2 text-sm mt-5">
            Read more <FaUserFriends className="w-4 text-gray-500" />
          </a>
        </motion.div>

        {/* Web Dev */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <FaCode className="w-10 h-10 text-blue-500" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Web Dev
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Scrum, HTML, CSS, JS, Python, Language C & Php
          </p>
          <a href="#" className="flex items-center gap-2 text-sm mt-5">
            Read more <FaUserFriends className="w-4 text-gray-500" />
          </a>
        </motion.div>

        {/* Cloud */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <FaCloud className="w-10 h-10 text-green-500" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">Cloud</h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Windows Azure, Google Cloud, AWS
          </p>
          <a href="#" className="flex items-center gap-2 text-sm mt-5">
            Read more <FaUserFriends className="w-4 text-gray-500" />
          </a>
        </motion.div>

        {/* Intérêts */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
        >
          <FaUserFriends className="w-10 h-10 text-yellow-500" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Intérêts
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Agile, Full Stack Engineering, Cybersecurity
          </p>
          <a href="#" className="flex items-center gap-2 text-sm mt-5">
            Read more <FaUserFriends className="w-4 text-gray-500" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
