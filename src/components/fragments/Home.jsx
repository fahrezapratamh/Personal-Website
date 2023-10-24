/* eslint-disable react-hooks/exhaustive-deps */
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Sections } from "../../context/Section";

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
  const { activeNavItem } = useContext(Sections);
  const [isVisible, setIsVisible] = useState(true);
  const [text] = useTypewriter({
    words: ["Front End Devolover "],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 100,
  });

  useEffect(() => {
    {
      activeNavItem === "Home" ? setIsVisible(true) : setIsVisible(false);
    }
  });
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        className="lg:pt-[9rem] py-[4rem] pb-[45vh] lg:pb-0 lg:py-0  md:pb-[55vh]"
        id="Home"
      >
        <div className="lg:flex items-center justify-center w-full ">
          <div className="lg:hidden flex items-center justify-center mt-8 ml-6 ">
            <div
              className="rounded-nyobain overflow-hidden flex items-end justify-center bg-sky-500 
                  w-[10rem] h-[10rem] lg:w-full lg:h-full"
            >
              <motion.img
                src="./public/eza-picsay.png"
                alt="fahrezaImage"
                className="ml-1 object-cover"
              />
            </div>
          </div>
          <div className="lg:hidden flex items-center relative justify-center mt-5 gap-3">
            <a
              href=""
              className="flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="bx bxl-facebook text-2xl text-sky-500"></i>
            </a>
            <a
              href=""
              className="flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="bx bxl-instagram text-2xl text-sky-500"></i>
            </a>
            <a
              href=""
              className="flex items-center justify-center hover:scale-110 transition-transform"
            >
              <i className="bx bxl-linkedin text-2xl text-sky-500"></i>
            </a>
          </div>
          <div className="lg:hidden flex items-center flex-col pt-2 mx-4 ">
            <h2 className="dark:text-white font-bold text-[20px]">
              Fahreza Pratama Hidayat
            </h2>
            <h3 className="text-sky-500 font-semibold pt-1">
              {text}
              <Cursor cursorStyle="|" />
            </h3>
            <div className="flex items-center justify-center pt-1">
              <p className="dark:text-white px-10 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, reprehenderit quia? Fugit provident iste autem
                numquam corrupti, culpa consequatur incidunt!
              </p>
            </div>
          </div>
          <motion.div
            className="flex items-center w-fit pt-3 ml-14 lg:hidden"
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <a
              href=""
              className="dark:text-white font-semibold flex items-center bg-sky-500 py-3 px-3 rounded-lg hover:bg-sky-600 text-white"
            >
              Download Cv
              <i className="bx bx-cloud-download pl-2 text-[22px] text-white"></i>
            </a>
          </motion.div>
          <div className="hidden lg:flex flex-col ">
            <div className="flex flex-col">
              <h2 className="dark:text-white text-bold text-2xl font-Poppins">
                HI I'M
              </h2>
              <h1 className="dark:text-white font-Poppins text-bold text-5xl">
                Fahreza Pratama Hidayat
              </h1>
              <h2 className="h-7 mb-5 text-sky-500 font-serif text-semibold text-5xl relative before:absolute before:contents before:right-0 before:text-white before:bg-red-600 before:w-full flex">
                {text}
                <Cursor cursorStyle="|" />
              </h2>
              <div className="flex items-center lg:mr-[21rem] lg:pt-5">
                <motion.h4 className="dark:text-white font-thin text-[20px] text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, reprehenderit quia? Fugit provident iste autem
                  numquam corrupti, culpa consequatur incidunt!
                </motion.h4>
              </div>
            </div>
            <motion.div
              className="flex items-center w-fit pt-3 w-"
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            >
              <a
                href=""
                className="dark:text-white font-semibold flex items-center bg-sky-500 py-3 px-4 rounded-lg hover:bg-sky-600 text-white"
              >
                Download Cv
                <i className="bx bx-cloud-download pl-2 text-[22px] text-white"></i>
              </a>
            </motion.div>
          </div>
          <motion.div
            className="hidden lg:flex"
            initial={{ y: -100 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ type: "spring", stiffness: 120, damping: 50 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="rounded-nyobain overflow-hidden flex items-end justify-center bg-sky-500 
              w-[160px] h-[160px] lg:w-full lg:h-full "
            >
              <img src="./public/eza-picsay.png" alt="profile-picture" className="" />
            </div>
          </motion.div>
        </div>
        <div className="lg:flex hidden items-center justify-between relative max-w-[120px]  mt-20">
          <a
            href="#"
            className="flex items-center justify-center hover:scale-150 transition-transform"
          >
            <i className="bx bxl-facebook text-3xl text-sky-500"></i>
          </a>
          <a
            href="#"
            className="flex items-center justify-center hover:scale-150 transition-transform"
          >
            <i className="bx bxl-instagram text-3xl text-sky-500"></i>
          </a>
          <a
            href="#"
            className="flex items-center justify-center hover:scale-150 transition-transform"
          >
            <i className="bx bxl-linkedin text-3xl text-sky-500"></i>
          </a>
        </div>
      </motion.section>
    </>
  );
};
export default Home;
