import React from "react";
import PageLayout from "../components/pageLayout";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Cover from "../components/sections/cover";
import Projects from "../components/sections/projects";

export default function MainPage() {
  return (
    <div>
      {/* adding childern component to main page layout */}
      <PageLayout>
        <Cover />
        <About />
        <Projects />
        <Contact />
      </PageLayout>
    </div>
  );
}
