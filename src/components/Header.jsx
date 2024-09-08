import React from "react";
import profile_img from "../assets/samia.jpg";
import right_arrow_white from "../assets/right-arrow-white.png";
import resume_pdf from "../assets/resume.pdf"; // Correct path to your resume

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Move image slightly down with margin-top */}
      <img
        src={profile_img}
        alt="Profile"
        className="rounded-full w-32 mt-40"
      />

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'am Samia Boutezrout{" "}
        <img src="./assets/hand-icon.png" alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Support Engineer & Web Developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Etudiante en BTS Informatique en recherche d’une alternance d’un rythme
        de 1 semaine en entreprise, 1 semaine en école à partir de Septembre
        2024
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          Contact me <img src={right_arrow_white} alt="Arrow" className="w-4" />
        </a>

        <a
          href={resume_pdf} // Correctly linking to the resume PDF
          download="Samia_Boutezrout_Resume.pdf" // Setting a proper download name
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          My resume{" "}
          <img src={right_arrow_white} alt="Download icon" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
