import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import { AuthContext } from "../context/authContext";
import Navbar from "./navbar";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setEmailError("Enter your Email");
            return;
        } else {
            setEmailError("");
        }
        if (!password) {
            setPasswordError("Enter your Password");
            return;
        } else {
            setPasswordError("");
        }
        axios
            .post("http://localhost:3009/login", { email, password })
            .then((result) => {
                console.log(result);
                if (result.data === "Success") {
                    navigate("/");
                    setIsLoggedIn(true);
                }
                if (result.data === "No record Existed") {
                    setEmailError("No User Found");
                } else {
                    setEmailError("");
                }
                if (result.data === "the password is incorrect") {
                    setPasswordError("Wrong Password");
                } else {
                    setPasswordError("");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let flag = 0;
    const hideShow = () => {
        const pw = document.getElementById("passwordInput");
        const eyeIcon = document.getElementById("eyeIcon");

        if (flag === 0) {
            eyeIcon.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/></svg>';
            pw.type = "text";
            flag = 1;
        } else {
            eyeIcon.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-eye-slash" viewBox="0 0 16 16"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/><path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/></svg>';
            pw.type = "password";
            flag = 0;
        }
    };

    return (
        <div className="bg-container d-flex justify-content-center align-items-center vh-100">
            <Navbar />
            <div>
                <div className="b1 text-center">
                    <h2>Rakesh</h2>
                </div>
                <div className="card p-3 bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <div htmlFor="email">
                                <strong className="l-p1">Email</strong>
                            </div>
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                className="form-control rounded-0"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {emailError != "" && <p style={{ color: "red" }}>{emailError}</p>}
                        <div className="mb-3">
                            <div htmlFor="email">
                                <strong className="l-p1">Password</strong>
                            </div>
                            <div className="d-flex">
                                <input
                                    id="passwordInput"
                                    type="password"
                                    placeholder="Enter Password"
                                    autoComplete="off"
                                    name="epassword"
                                    className="form-control rounded-0"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="button" onClick={hideShow} className="border-0 bg-white text-dark">
                                    <span id="eyeIcon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            fill="black"
                                            className="bi bi-eye-slash"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                                            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        {passwordError != "" && <p style={{ color: "red" }}>{passwordError}</p>}
                        <button type="submit" className="btn1 w-100">
                            Login
                        </button>
                    </form>
                    <br />
                    <p className="l-p1 text-center">New to MediOrder?</p>
                    <Link
                        to="/register"
                        style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1" }}
                        className="btn btn-default border rounded-3 text-decoration-none"
                    >
                        Create your MediOrder account
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
