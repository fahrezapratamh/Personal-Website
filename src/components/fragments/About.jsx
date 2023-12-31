/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Sections } from "../../context/Section";
/* eslint-disable react/no-unescaped-entities */
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { activeNavItem } = useContext(Sections);

  useEffect(() => {
    {
      activeNavItem === "About" ? setIsVisible(true) : setIsVisible(false);
    }
  });

  return (
    <>
      <motion.section
        className="lg:mt-[7rem] lg:mb-[5.5rem] md:pb-[40vh] md:mt-[4rem] mt-5 pb-3 md:py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        id="About"
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          className="dark:text-white font-bold text-center text-3xl cursor-pointer font-Poppins"
        >
          About Me
        </motion.h1>
        <div className="flex items-center  flex-col lg:flex-row pt-10 ">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{
              type: "spring", // Menggunakan tipe animasi spring untuk efek lebih halus
              damping: 50, // Menyesuaikan damping untuk animasi yang lebih halus
              stiffness: 120, // Menyesuaikan kekakuan untuk animasi yang lebih halus
              delay: 0.1 * 2,
            }}
            src="/foto.jpg"
            className="rounded-[40px] hover:rotate-1 lg:w-[320px] lg:h-[320px]  w-[200px] h-[200px] lg:ml-5 md:ml-5 transition-transform cursor-pointer"
            alt="profile picture"
          />
          <div className="flex flex-col items-center lg:mx-[5rem] md:mx-7">
            <div className="mx-7 py-5 lg:mx-9 md:px-8">
            <motion.p
              className="dark:text-white font-Poppins  lg:text-justify md:text-justify text-justify"
              initial={{ y: 500, opacity: 0 }}
              animate={{
                y: isVisible ? [300, 200, 100, 0] : -500,

                opacity: isVisible ? [0, 0, 1, 1, 1] : 0,
              }}
              transition={{
                type: "tween",
                duration: 2,
                delay: 0.1 * 1,
                times: [0, 0.9, 1], // Mengatur waktu untuk animasi pada 60% dari durasi total
              }}
            >
              <span className="text-sky-500 font-Poppins font-bold">
                Hello Everyone!{" "}
              </span>
              I am a FrontEndDeveloper who is still new to the world of website
              programming, which I have only been studying in the world of
              programming for about 6 months since sitting in college semester 2
              with an informatics engineering major. and I hope I will always
              learn new things to be able to become a quality FrontEndDevolover.
            </motion.p>
            </div>
            <div className="flex items-center justify-around w-full flex-col lg:flex-row ">
              <motion.div
                className="flex md:flex-row flex-col lg:flex-row gap-5 items-center justify-center "
                initial={{ scale: 0 }} // Animasi awal (dapat disesuaikan)
                animate={{ scale: isVisible ? 1 : 0 }} // Animasi saat muncul
                transition={{ duration: 1, delay: 0.1 * 3, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center justify-center px-5 py-5 rounded-lg lg:w-[300px] w-[300px]  dark:bg-slate-800 shadow-lg">
                  <i className="bx bxs-medal text-2xl dark:text-white"></i>
                  <h2 className="dark:text-white font-semibold ">Experience</h2>
                  <h4 className="text-slate-500 ">6 + Months</h4>
                  <p className="text-slate-500">Front End Devolover</p>
                </div>
                <motion.div
                  className="flex flex-col items-center justify-center px-5 py-5 rounded-lg drop lg:w-[300px] w-[300px] dark:bg-slate-800 shadow-lg"
                  initial={{ scale: 0 }} // Animasi awal (dapat disesuaikan)
                  animate={{ scale: isVisible ? 1 : 0 }} // Animasi saat muncul
                  transition={{ duration: 1, delay: 0.1 * 6, ease: "easeOut" }}
                >
                  <i className="bx bxs-graduation text-2xl dark:text-white"></i>
                  <h2 className="dark:text-white font-semibold ">Education</h2>
                  <h4 className="text-slate-500 ">Institut Teknologi Garut</h4>
                  <p className="text-slate-500">SMAN 18 GARUT</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
export default About;
