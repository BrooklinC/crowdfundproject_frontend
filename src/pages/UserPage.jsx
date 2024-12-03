import React, { useState } from "react";
import "./UserPage.css";
import postLogin from "../api/post-login.js";
import postUser from "../api/post-user.js";
import { useNavigate } from "react-router-dom";

function UserPage() {
    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({ 
        username: "", 
        password: "" 
    });
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
        if (loginDetails.username && loginDetails.password) {
            postLogin(
                loginDetails.username,
                loginDetails.password
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                navigate("/dashboard");
            });
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register Details:", registerDetails);
    
        if (registerDetails.username && registerDetails.email && registerDetails.password) {
            postUser(
                registerDetails.username,
                registerDetails.email,
                registerDetails.password
            ).then((response) => {
                postLogin(
                    response.username,
                    registerDetails.password
                ).then((response) => {
                    window.localStorage.setItem("token", response.token);
                    navigate("/dashboard");
                });
            })
        }
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