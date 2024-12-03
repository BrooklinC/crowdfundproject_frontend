import "./UserDashboard.css";
import postPledge from "../api/post-pledge.js";
import postProject from "../api/post-project.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
    const navigate = useNavigate();
    // Handler for submitting a pledge
    const [pledgeDetails, setPledgeDetails] = useState({ amount: 0, comment: "" , project: "", anonymous: false});
    const handlePledgeDetailsChange = (e) => {
        setPledgeDetails({ ...pledgeDetails, [e.target.name]: e.target.value, [id]: type === "checkbox" ? checked : value, });
    };
    const handlePledgeSubmit = (e) => {
        e.preventDefault();
        console.log("Pledge Details:", pledgeDetails);
        // if (pledgeDetails.project && pledgeDetails.comment && pledgeDetails.amount && pledgeDetails.anonymous) {
            postPledge(
                pledgeDetails.project,
                pledgeDetails.comment,
                pledgeDetails.amount,
                pledgeDetails.anonymous,
            ).then((response) => {
            });
        // }
    };

    const [projectDetails, setProjectDetails] = useState({ title: "", description: "" , goal: 0, image: ""});
    const handleProjectDetailsChange = (e) => {
        setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
    };
    const handleProjectSubmit = (e) => {
        e.preventDefault();
        console.log("Project Details:", projectDetails);
        if (projectDetails.title && projectDetails.description && projectDetails.image && projectDetails.goal) {
            postProject(
                projectDetails.title,
                projectDetails.description,
                projectDetails.goal,
                projectDetails.image,
            ).then((response) => {
                const projectId=response.id;
                navigate(`/project/${projectId}`)
            });
        }
    };

    return (
        <div className="user-dashboard-container">
            {/* Header Section */}
            <div className="user-dashboard-header">
                <h1>User Dashboard</h1>
            </div>

            {/* User Info Section */}
            <div className="user-dashboard-info">
                <img src="placeholder.jpg" alt="User Photo" />
                <h2>User's First Name, User's Surname</h2>
            </div>

            {/* Actions Section */}
            <div className="user-dashboard-actions">
                <button>Update Your Details</button>
                <button>Manage a Project</button>
                <button>Submit new Athlete Project</button>
                <button>Pledge to an Athlete</button>
            </div>

            {/* Divider */}
            <div className="user-dashboard-divider"></div>

            {/* Supported Projects Section */}
            <div className="user-dashboard-projects">
                <h3>Current Projects</h3>
                <div className="user-dashboard-card">
                    <img src="athlete1.jpg" alt="Athlete's Photo" />
                    <h3>Athlete's Name: Project Title</h3>
                    <p>Goal: Funding Goal</p>
                    <p>Pledge Status: Gold</p>
                </div>
            </div>

            {/* Submit a New Pledge Section */}
            <div className="user-pledge-submit">
                <h3>Pledge to an Athlete</h3>
                <form onSubmit={handlePledgeSubmit}>
                    <input
                        type="text"
                        name="project"
                        placeholder="Project"
                        value={pledgeDetails.project}
                        onChange={handlePledgeDetailsChange}
                        required
                    />
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={pledgeDetails.amount}
                        onChange={handlePledgeDetailsChange}
                        required
                    />
                    <input
                        type="text"
                        name="comment"
                        placeholder="Comment"
                        value={pledgeDetails.comment}
                        onChange={handlePledgeDetailsChange}
                        required
                    />
                    <input
                        type="checkbox"
                        name="anonymous"
                        placeholder="Anonymous"
                        value={pledgeDetails.anonymous}
                        onChange={handlePledgeDetailsChange}
                    />
                    <button type="submit">Submit Pledge</button>
                </form>
            </div>

            {/* Submit New Project Section */}
            <div className="user-dashboard-divider"></div>
            <section className="user-dashboard-submit">
                <h3>Submit a New Project</h3>
                <form onSubmit={handleProjectSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Project Title"
                        value={projectDetails.title}
                        onChange={handleProjectDetailsChange}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Project Description"
                        value={projectDetails.description}
                        onChange={handleProjectDetailsChange}
                        required
                    />
                    <input
                        type="number"
                        name="goal"
                        placeholder="Funding Goal"
                        value={projectDetails.goal}
                        onChange={handleProjectDetailsChange}
                        required
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Athlete's Image"
                        value={projectDetails.image}
                        onChange={handleProjectDetailsChange}
                        required
                    />
                    <button type="submit">Submit Project</button>
                </form>
            </section>
        </div>
    );
}

export default UserDashboard;

