/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

import Home from "./components/fragments/Home";
import Test from "./components/navbar/test";
import NavbarSticky from "./components/navbar/navbarSticky";
import About from "./components/fragments/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./components/fragments/Experience";
import Projects from "./components/fragments/Projects";
import './App.css'

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 transition duration-300 lg:pb-[1rem]">
        <NavbarSticky />
        <div className="max-w-8xl lg:px-[5rem]">
          <Home />
          <About/>
          <Experience/>
          <Projects/>
        </div>
      </div>
    </>
  );
}
export default App;