import React from "react";
import "./ProjectsPage.css";
import ProjectCard from "../components/ProjectCard";
import useProjects from "../hooks/use-projects";

function ProjectsPage() {
    const { projects } =useProjects();

    return (
        <div className="home-container">
            <h1 className="home-title">Athlete Projects</h1>
            <p className="home-description">
                Discover and support amazing athletes as they chase the Golden Goose towards the 2032 Olympics!
            </p>
            <p className ="home-call-to-action">
            Scroll through and read about each Athlete, their goals and how you can help them reach them   
            </p>
        <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} projectData={project} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
