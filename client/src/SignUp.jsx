import React, { useState } from "react";
import "./SignUp.scss";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");
    const [successMsg, setsuccessMsg] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setsuccessMsg("");
        setIsPending(true);
        const userData = { username, email, password };
        try {
            const user = await fetch("http://localhost:3030/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const data = await user.json();
            if (data.status === "error") throw data;
            setIsPending(false);
            console.log(data.message);
            setsuccessMsg(data.message);
        } catch (error) {
            setIsPending(false);
            console.log(error.message);
            setError(error.message);
            console.log(error);
        }
    };
    return (
        <div className="form-container">
            <div className="container">
                <h1>Sign Up</h1>
                {error && <div className="error">{error}</div>}
                {successMsg && <div className="success-msg">{successMsg}</div>}

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
                    {isPending && (
                        <button disabled type="submit">
                            ...
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
