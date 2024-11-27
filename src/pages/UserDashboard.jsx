import "./UserDashboard.css";

function UserDashboard() {
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
                <button>Submit a New Project</button>
            </div>

            {/* Divider */}
            <div className="user-dashboard-divider"></div>

            {/* Supported Projects Section */}
            <div className="user-dashboard-projects">
                <div className="user-dashboard-card">
                    <img src="athlete1.jpg" alt="Athlete's Photo" />
                    <h3>Athlete's Name: Project Title</h3>
                    <p>Goal: Funding Goal</p>
                    <p>Pledge Status: Gold</p>
                </div>
                <div className="user-dashboard-card">
                    <img src="athlete2.jpg" alt="Athlete's Photo" />
                    <h3>Athlete's Name: Project Title</h3>
                    <p>Goal: Funding Goal</p>
                    <p>Pledge Status: Gold</p>
                </div>
                {/* Add more project cards as needed */}
            </div>

            {/* Submit New Project Section */}
            <div className="user-dashboard-divider"></div>
            <section className="user-dashboard-submit">
                <h3>Submit a New Project</h3>
                <form>
                    <input type="text" placeholder="Project Title" required />
                    <textarea placeholder="Project Description" required></textarea>
                    <input type="number" placeholder="Funding Goal" required />
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default UserDashboard;
