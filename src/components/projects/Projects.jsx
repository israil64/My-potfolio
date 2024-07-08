import React, { useState } from "react";
import { ProjectsSection, ProjectContainer } from "./styleComponent";
import Cards from "../cards/Cards";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      className="bg-white dark:bg-custom-gradient text-black/50 dark:text-white"
    >
      {/* Text section */}
      <div className="relative ">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-1 bg-gradient-to-r from-sky-400 to-black/30 w-full transform -skew-y-12"></div>
        </div>
        <div className="relative z-10">
          <p className="text-2xl sm:text-3xl font-bold text-center ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              My Projects
            </span>
          </p>
        </div>
      </div>

      {/* start search project */}

      <div
        id="search-section"
        className="w-full lg:w-1/2 bg-gradient-to-r from-blue-950 via-sky-900  to-sky-950 m-auto grid grid-cols-2 sm:grid-cols-4 sm:p-6 rounded-lg shadow-lg sm:mt-10 text-white text-center outline outline-offset-0 outline-blue-500 mb-4 shadow-sky-950 max-sm:hidden"
      >
        <div
          onClick={() => handleFilterChange("All")}
          className={`${
            filter === "All" ? "text-red-600" : ""
          } hover:cursor-pointer rounded-md text-lg  sm:text-xl   font-bold  cursor-nter  `}
          title="All"
        >
          All
        </div>
        <div
          onClick={() => handleFilterChange("JS")}
          className={`${
            filter === "JS" ? "text-red-600" : ""
          } hover:cursor-pointer rounded-md text-lg  sm:text-xl   font-bold  cursor-nter  `}
          title="JavaScript"
        >
          JS
        </div>
        <div
          onClick={() => handleFilterChange("React")}
          className={`${
            filter === "React" ? "text-red-600" : ""
          } hover:cursor-pointer rounded-md text-lg  sm:text-xl   font-bold  cursor-nter  `}
          title="React"
        >
          React
        </div>
        <div
          onClick={() => handleFilterChange("Python")}
          className={`${
            filter === "Python" ? "text-red-600" : ""
          } hover:cursor-pointer rounded-md text-lg  sm:text-xl   font-bold  cursor-nter  `}
          title="FullStack"
        >
          Full-Stack
        </div>
      </div>

      <div className="max-sm:flex justify-center items-center mt-12  lg:hidden">
        <Select>
          <SelectTrigger className="w-[180px] ">
            <SelectValue placeholder="Filters" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filter</SelectLabel>
              <SelectItem
                value="All"
                onClick={() => handleFilterChange("All")}
                className={`${
                  filter === "All" ? "text-red-600" : ""
                }cursor-pointer rounded-md text-lg  sm:text-xl  font-bold`}
              >
                All
              </SelectItem>
              <SelectItem
                value="JS"
                onClick={() => handleFilterChange("JS")}
                className={`${
                  filter === "JS" ? "text-red-600" : ""
                }cursor-pointer rounded-md text-lg  sm:text-xl   font-bold   `}
              >
                JavaScript
              </SelectItem>
              <SelectItem
                value="React"
                onClick={() => handleFilterChange("React")}
                className={`${
                  filter === "React" ? "text-red-600" : ""
                }cursor-pointer rounded-md text-lg  sm:text-xl   font-bold   `}
              >
                React
              </SelectItem>
              <SelectItem
                value="Python"
                onClick={() => handleFilterChange("Python")}
                className={`${
                  filter === "Python" ? "text-red-600" : ""
                }cursor-pointer rounded-md text-lg  sm:text-xl   font-bold   `}
              >
                Full Stack
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* End search project */}

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
