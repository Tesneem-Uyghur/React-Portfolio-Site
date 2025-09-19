import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/home"
import About from "./pages/about"
import Education from "./pages/education"
import Projects from "./pages/projects"
import Contact from "./pages/contact"


export default function MainRouter() {

  return (
    <>
      <Layout />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );

}
