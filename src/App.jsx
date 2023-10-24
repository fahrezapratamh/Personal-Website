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

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Router } from 'react-router-dom';

// // Komponen halaman About
// const AboutPage = () => {
//   return <div>About Page</div>;
// };

// const Navbar = () => {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/about">About</a>
//           </li>
//         </ul>

//         <Routes>
//           <Route path="/about" component={AboutPage} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default Navbar;
