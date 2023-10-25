/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Sections } from "../../context/Section";
/* eslint-disable react/no-unescaped-entities */
const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {activeNavItem} = useContext(Sections)

  useEffect(() => {
    {activeNavItem === "About" ? setIsVisible(true) : setIsVisible(false)}
  });

  return (
    <>
      <motion.section
        className="lg:mt-[7rem] lg:mb-[5.5rem] md:pb-[40vh] "
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        id="About"
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          className="font-Poppins dark:text-white font-bold text-center text-3xl cursor-pointer"
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
            className="rounded-[40px] hover:rotate-1 lg:w-[320px] lg:h-[320px]  w-[200px] h-[200px] ml-5 transition-transform cursor-pointer"
            alt="profile picture"
          />
          <div className="flex flex-col items-center lg:mx-[5rem] md:mx-7">
            <motion.p
              className="dark:text-white font-roboto px-11 py-5 text-justify md:px-[5rem]"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              culpa? Incidunt accusantium maiores sit assumenda. Voluptatibus
              perspiciatis adipisci ut dolore at quam reprehenderit doloribus
              illum aperiam repudiandae, a aspernatur laboriosam.
            </motion.p>
            <div className="flex items-center justify-around w-full flex-col lg:flex-row ">
              <motion.div
                className="flex md:flex-row flex-col lg:flex-row gap-5 items-center justify-center "
                initial={{ scale: 0 }} // Animasi awal (dapat disesuaikan)
                animate={{ scale: isVisible ? 1 : 0 }} // Animasi saat muncul
                transition={{ duration: 1, delay: 0.1 * 3, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center justify-center px-20 py-5 rounded-lg lg:w-1/2 dark:bg-slate-800 shadow-lg">
                  <i className="bx bxs-medal text-2xl dark:text-white"></i>
                  <h2 className="dark:text-white font-semibold ">Experience</h2>
                  <h4 className="text-slate-500 ">6 + Months</h4>
                  <p className="text-slate-500">Front End Devolover</p>
                </div>
                <motion.div
                  className="flex flex-col items-center justify-center px-20 py-5 rounded-lg drop lg:w-1/2 dark:bg-slate-800 shadow-lg"
                  initial={{ scale: 0 }} // Animasi awal (dapat disesuaikan)
                  animate={{ scale: isVisible ? 1 : 0 }} // Animasi saat muncul
                  transition={{ duration: 1, delay: 0.1 * 6, ease: "easeOut" }}
                >
                  <i className="bx bxs-medal text-2xl dark:text-white"></i>
                  <h2 className="dark:text-white font-semibold ">Experience</h2>
                  <h4 className="text-slate-500 ">6 + Months</h4>
                  <p className="text-slate-500">Front End Devolover</p>
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