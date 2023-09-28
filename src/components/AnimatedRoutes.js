import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About} />
        <Route path="/projects" exact Component={Projects} />
        <Route path="/contact" exact Component={Contact} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
