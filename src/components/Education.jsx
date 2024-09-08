import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations

const Education = () => {
  const education = [
    {
      institution: "BTS en informatique Webitech Paris",
      startDate: "September 2023",
      endDate: "June 2024",
      branch: "Software Engineer",
    },
    {
      institution: "Baccalauréat scientifique AL QALAM",
      startDate: "September 2018",
      endDate: "June 2019",
      branch: "Scientifique",
    },
  ];

  return (
    <div className="w-full px-[5%] py-10">
      <h2 className="text-center text-5xl font-Ovo mb-10">Education</h2>
      <div className="relative">
        {/* Vertical Line (Only on larger screens) */}
        <div className="hidden md:block absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 50,
                duration: 0.5,
                delay: index * 0.2,
              }}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } w-full`}
            >
              {/* Circle Indicator */}
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center z-10 mb-4 md:mb-0">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              </div>

              <div
                className={`w-full md:w-[40%] p-6 border border-gray-400 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 duration-500 ${
                  index % 2 === 0
                    ? "md:ml-8 text-left"
                    : "md:mr-8 text-left md:text-right"
                }`}
              >
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
                  {edu.institution}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className="text-gray-600 text-sm dark:text-white/80 mt-2">
                  Branch: {edu.branch}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
