import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminContacts from "./pages/admin/AdminContacts";
import ProjectForm from "./pages/admin/ProjectForm";

export default function MainRouter() {

  return (
    <>
      <Layout />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} /> 
      <Route path="/admin/projects" element={<AdminProjects />} />
      <Route path="/admin/contacts" element={<AdminContacts />} />
      <Route path="/admin/projects" element={<AdminProjects />} />
      <Route path="/admin/projects/new" element={<ProjectForm />} />
      <Route path="/admin/projects/edit/:id" element={<ProjectForm />} />
 
      </Routes>
    </>
  );

}
