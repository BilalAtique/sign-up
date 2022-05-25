import React, { useState } from "react";
import "./SignUp.scss";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        const userData = { username, email, password };
        fetch("http://localhost:3030/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then(() => {
                console.log("User is added");
                setIsPending(false);
            })
            .catch((err) => {
                console.error(err);
                setIsPending(false);
            });
    };
    return (
        <div className="form-container">
            <div className="container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        className="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {!isPending && <button type="submit">Register</button>}
                    {isPending && <button disabled type="submit">...</button>}
                </form>
            </div>
        </div>
    );
}
