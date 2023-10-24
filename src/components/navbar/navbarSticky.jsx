/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import { Sections } from "../../context/Section";
import {motion} from "framer-motion"

const NavbarSticky = () => {
  const [theme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  const { activeNavItem, setActiveNavItem } = useContext(Sections);
  const [showNav,setShowNav] = useState(false)
  

  useEffect(() => {
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      themeToggleDarkIcon.classList.remove("hidden");
      themeToggleLightIcon.classList.add("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      themeToggleDarkIcon.classList.add("hidden");
      themeToggleLightIcon.classList.remove("hidden");
    }
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  const handleSetActive = (to) => {
    setActiveNavItem(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "About", "Skills", "Projects"]; // Add more section IDs if needed
      // Calculate the current scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      // Mencari Active Section Berdasarkan scroll
      const activeSection = sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });
      setActiveNavItem(activeSection);
      if (activeSection === "Home") {
        history.pushState(null, null, "Home");
      } else if (activeSection === "About") {
        history.pushState(null, null, "About");
      } else if (activeSection === "Skills") {
        history.pushState(null, null, "Skills");
      } else if (activeSection === "Projects") {
        history.pushState(null, null, "Projects");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleToggel() {
    setShowNav(!showNav)
  }
  return (
    <>
      <div
        className="fixed z-40 w-full backdrop-blur flex-none 
          transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10
        dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent"
      >
        <div className="max-w-8xl mx-auto">
          <div className="py-4 border-b border-slate-900/10 lg:px-[5rem]  lg:border-0 mx-5 md:px-[2rem]  lg:mx-0">
            <div className="relative flex items-center ">
              <Link
                to="Home"
                className="mr-3 flex-none w-[2.065rem] md:w-auto text-slate-700 text-2xl font-Poppins dark:text-white cursor-pointer"
                smooth={true}
                duration={100}
                spy={true}
              >
                Fahreza
              </Link>
              {/* Navbar Khusus lg Start */}
              <div className="relative hidden md:flex lg:flex items-center justify-center w-full">
                <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-white">
                  <ul className="flex space-x-8">
                    <li
                      className={
                        activeNavItem === "Home"
                          ? "text-sky-500 text-bold border-b border-sky-500"
                          : " border-b-1 border-transparent"
                      }
                    >
                      <Link
                        activeClass="active"
                        to="Home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onSetActive={handleSetActive}
                        className="cursor-pointer hover:text-sky-500"
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      className={
                        activeNavItem === "About"
                          ? "text-sky-500 text-bold border-b border-sky-500"
                          : " border-b-1 border-transparent"
                      }
                    >
                      <Link
                        activeClass="active"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        onSetActive={handleSetActive}
                        className="cursor-pointer hover:text-sky-500"
                      >
                        About
                      </Link>
                    </li>
                    <li
                      className={
                        activeNavItem === "Skills"
                          ? "text-sky-500 text-bold border-b border-sky-500"
                          : " border-b-1 border-transparent"
                      }
                    >
                      <Link
                        activeClass="active"
                        to="Skills"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        onSetActive={handleSetActive}
                        className="cursor-pointer hover:text-sky-500"
                      >
                        Skills
                      </Link>
                    </li>
                    <li
                      className={
                        activeNavItem === "Projects"
                          ? "text-sky-500 text-bold border-b border-sky-500"
                          : " border-b-1 border-transparent"
                      }
                    >
                      <Link
                        activeClass="active"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        onSetActive={handleSetActive}
                        className="cursor-pointer hover:text-sky-500"
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Dark Mode Start */}
              <motion.div
                className="lg:flex items-center hidden "
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
              >
                <button
                  id="theme-toggle"
                  type="button"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 shadow-lg"
                  onClick={handleThemeSwitch}
                >
                  <svg
                    id="theme-toggle-dark-icon"
                    className="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  <svg
                    id="theme-toggle-light-icon"
                    className="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </motion.div>
              {/* Dark Mode End */}
              <motion.button
                type="button"
                id="theme-toggle"
                className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                onClick={handleThemeSwitch}
              >
                <svg
                  id="theme-toggle-dark-icon"
                  className={`${theme === "dark" ? "" : "hidden"} w-5 h-5`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  id="theme-toggle-light-icon"
                  className={`${theme === "light" ? "" : "hidden"} w-5 h-5`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </motion.button>
              <div className="ml-2 -my-1 lg:hidden md:hidden">
                <button className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" onClick={handleToggel}>
                  <i className="bx bx-menu dark:text-white"></i>
                </button>
                <div className={`fixed top-[100%] right-0 h-full min-w-[150px] mx-4 my-1`}>
                  <motion.div 
                  initial={{scale: 0,y: -200}}
                  animate={{scale: showNav ? 1 : 0,y: showNav ? 0 : -200}}
                  className="flex flex-col items-center py-2 bg-slate-700 rounded-lg">
                    <ul className="p-2">
                      <li>
                        <Link
                          activeClass="active"
                          to="Home"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onSetActive={handleSetActive}
                          className="cursor-pointer hover:text-sky-500 text-white py-3"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          to="About"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onSetActive={handleSetActive}
                          className="cursor-pointer hover:text-sky-500 text-white py-3"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          to="Skills"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onSetActive={handleSetActive}
                          className="cursor-pointer hover:text-sky-500 text-white py-3"
                        >
                          Skills
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          to="Projects"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onSetActive={handleSetActive}
                          className="cursor-pointer hover:text-sky-500 text-white py-3"
                        >
                          Projects
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
              {/* Navbar Khusus md Start */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarSticky;
