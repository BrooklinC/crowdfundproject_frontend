import React from "react";
import "./HomePage.css";
import ProjectCard from "../components/ProjectCard";
import useProjects from "../hooks/use-projects";
import imagePath from "../img/The_Golden_Goose.png";

function HomePage() {
    const { projects } =useProjects();

    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to The Golden Goose</h1>
            <img src={imagePath} alt="Golden Goose Pic" />
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

export default HomePage;

