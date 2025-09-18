import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Education from "./education";
import Project from "./projects";
import Contact from "./contact";
import Layout from "../components/Layout";

export default function MainRouter() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
