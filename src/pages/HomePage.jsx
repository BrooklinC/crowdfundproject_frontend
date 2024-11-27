import React from "react";
import "./HomePage.css";
import ProjectCard from "../components/ProjectCard";
import { allProjects } from "../data";

function HomePage() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to The Golden Goose</h1>
            <p className="home-description">
                Discover and support amazing athletes as they chase the Golden Goose towards the 2032 Olympics!
            </p>
            <p className ="home-call-to-action">
            Scroll through and read all about each Athlete and their goals that you can help them reach    
            </p>
        <div className="project-grid">
                {allProjects.map((project, index) => (
                    <ProjectCard key={index} projectData={project} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;

