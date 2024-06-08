// src/components/Projects.js
import React, { useState } from "react";
import { ProjectsSection, Project, ProjectContainer } from "./styleComponent";
import Cards from "../cards/Cards";

const Projects = ({ projects }) => {
  const [filter, setFilter] = useState("All");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });
  return (
    <ProjectContainer
      id="ProjectContainer"
      style={{
        background: "linear-gradient(to right, #00003f, #00002f, #00003f)",
      }}
    >
      {/* Text section */}
      <div className="relative ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-sky-400 to-black/30 w-full transform -skew-y-12"></div>
        </div>
        <div className="relative z-10">
          <p className="text-2xl sm:text-3xl font-bold text-center text-blue-950 ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              My Projects
            </span>
          </p>
        </div>
      </div>
      {/* search project */}
      <div
        id="search-section"
        className="w-full sm:w-1/2 lg:w-1/2 bg-gradient-to-r from-blue-950 via-sky-900  to-sky-950 m-auto grid grid-cols-2 sm:grid-cols-4 max-sm:mt-9 items-center gap-2 p-2  sm:p-6 rounded-lg shadow-lg sm:mt-10 text-white text-center outline outline-offset-0 outline-blue-500 mb-4 shadow-sky-950 "
      >
        <div
          onClick={() => handleFilterChange("All")}
          className={`${
            filter === "All" ? "text-red-600" : ""
          } hover:-translate-y-2 transition duration-150 ease-in-out cursor-pointer rounded-md text-lg  sm:text-xl   font-bold  cursor-nter border-r-2 `}
        >
          All
        </div>
        <div
          onClick={() => handleFilterChange("JS")}
          className={`${
            filter === "JS" ? "text-red-600" : ""
          } hover:-translate-y-2 transition duration-150 ease-in-out cursor-pointer rounded-md text-lg  sm:text-xl   font-bold  cursor-nter border-r-2 `}
        >
          JS
        </div>
        <div
          onClick={() => handleFilterChange("React")}
          className={`${
            filter === "React" ? "text-red-600" : ""
          } hover:-translate-y-2 transition duration-150 ease-in-out cursor-pointer rounded-md text-lg  sm:text-xl   font-bold  cursor-nter border-r-2 `}
        >
          React
        </div>
        <div
          onClick={() => handleFilterChange("Python")}
          className={`${
            filter === "Python" ? "text-red-600" : ""
          } hover:-translate-y-2 transition duration-150 ease-in-out cursor-pointer rounded-md text-lg  sm:text-xl   font-bold  cursor-nter border-r-2 `}
        >
          Python
        </div>
      </div>

      <ProjectsSection id="projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 place-items-center ">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <Cards
                key={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
                img_url={project.img_url}
                language={project.language}
                code={project.code}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 text-lg font-semibold">
              No projects available
            </div>
          )}
        </div>
      </ProjectsSection>
    </ProjectContainer>
  );
};

export default Projects;
