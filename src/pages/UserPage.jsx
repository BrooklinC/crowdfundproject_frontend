import React, { useState } from "react";
import "./UserPage.css";

function UserPage() {
    const [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
    const [registerDetails, setRegisterDetails] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleLoginChange = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    };

    const handleRegisterChange = (e) => {
        setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login Details:", loginDetails);
        // Add your login API call or logic here
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register Details:", registerDetails);
        // Add your registration API call or logic here
    };

    return (
        <div className="user-page">
            <h2>Welcome to The Golden Goose</h2>
            <div className="user-forms">
                {/* Login Form */}
                <form onSubmit={handleLogin} className="user-form">
                    <h3>Existing Users Login</h3>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={loginDetails.username}
                        onChange={handleLoginChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginDetails.password}
                        onChange={handleLoginChange}
                        required
                    />
                    <button type="submit">Login</button>
                </form>

                <div className="divider"></div>

                {/* Registration Form */}
                <form onSubmit={handleRegister} className="user-form">
                    <h3>New Users Register Here</h3>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={registerDetails.username}
                        onChange={handleRegisterChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={registerDetails.email}
                        onChange={handleRegisterChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={registerDetails.password}
                        onChange={handleRegisterChange}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default UserPage;