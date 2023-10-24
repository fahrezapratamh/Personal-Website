/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Sections } from "../../context/Section";
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { activeNavItem } = useContext(Sections);

  useEffect(() => {
    {
      activeNavItem === "Projects" ? setIsVisible(true) : setIsVisible(false);
    }
  });

  function ProjectsContent() {
    return (
      <motion.div
        className="flex items-center m-3 flex-col dark:bg-slate-800 bg-white/80 rounded-b-md shadow-lg"
        initial={{ x: -300, opacity: 0 }}
        animate={{
          x: isVisible ? 0 : -500,
          opacity: isVisible ? [0, 0, 1, 1, 1] : 0,
        }}
        transition={{
          type: "tween",
          duration: 1.1,
          times: [0, 0.9, 1], // Mengatur waktu untuk animasi pada 60% dari durasi total
        }}
      >
        <div className="rounded-md shadow-lg relative overflow-hidden group transition duration-1000 transform">
          <img
            src="./public/Project1.png"
            alt="Projects-1"
            className="rounded-md"
          />
          <div className="absolute w-full h-full -bottom-full bg-black/50 backdrop-blur-sm group-hover:bottom-0 cursor-pointer left-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#ffffff"
              width="40"
              height="40"
              className=""
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex items-center flex-col  z-10 w-full pt-3 pb-2">
          <h2 className=" font-Poppins dark:text-white ">Personal Website</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A personal website that I created for myself.
          </p>
          <div className="flex items-center w-full  justify-between px-10 pt-5">
            <button
              type="button"
              className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
            >
              Github
            </button>
            <button
              type="button"
              className="text-gray-900 hover:text-white border border-gray-800 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Preview
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <section
        className="lg:mt-[9.5rem] lg:mb-[5.5rem]  mt-[15rem] pb-[15rem] md:pb-[50vh]"
        id="Projects"
      >
        <motion.h1
          className="font-Poppins dark:text-white font-bold text-center text-3xl cursor-pointer"
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          My Projects
        </motion.h1>
        <div className="flex items-center justify-center w-full mt-10 ">
          <div className="grid lg:grid-cols-3 lg: md:grid-cols-2 rounded-lg">
            <ProjectsContent />
          </div>
        </div>
      </section>
    </>
  );
};
export default Projects;
