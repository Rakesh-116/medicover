import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../styles/signup.css';

function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordAgainError, setPasswordAgainError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            setNameError("Enter your Name");
            return;
        }else{
            setNameError("");
        }
        if(!email){
            setEmailError("Enter your Email");
            return;
        }else{
            setEmailError("");
        }
        if(!password){
            setPasswordError("This field cannot be empty");
            return;
        }else{
            setPasswordError("");
        }
        if(!passwordAgain){
            setPasswordAgainError("This field cannot be empty");
            return;
        }else{
            setPasswordAgainError("");
        }
        axios.post('http://localhost:3009/register', {name, email, password, passwordAgain})
        .then((result)=>{
            if(result.data === 'Passwords must be at least 6 characters.'){
                setPasswordError('Passwords must be at least 6 characters.');
                return;
            }else{
                setPasswordError('');
            }
            if(result.data === 'Passwords do not match.'){
                setPasswordAgainError('Passwords do not match.');
                return;
            }else{
                setPasswordAgainError('');
            }
            console.log(result);
            navigate('/login');
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    const hideShow = (input, n) => {
        const pw = document.getElementById(input);
        const eyeIcon = document.getElementById(("eyeIcon" + n));
    
        if (pw.type === "password") {
            eyeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/></svg>';
            pw.type = "text";
        } else {
            eyeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-eye-slash" viewBox="0 0 16 16"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/><path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/></svg>';
            pw.type = "password";
        }
    };

    return (
        <div className="bg-container d-flex justify-content-center align-items-center vh-100">
            <div>
                <div className="b1 text-center">
                    <h2>Register</h2>
                </div>
                <div className="card p-3 bg-white">
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label htmlFor="name">
                                <strong className='s-p1'>Your Name</strong>
                            </label>
                            <input type="text" placeholder='First and last name' autoComplete='off' name="name" 
                            className='form-control rounded-0' onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        {nameError != '' && (
                            <p style={{color:"red"}}>{nameError}</p>
                        )}

                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong className='s-p1'>Email</strong>
                            </label>
                            <input type="email" autoComplete='off' name="email"
                            className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        {emailError != '' && (
                            <p style={{color:"red"}}>{emailError}</p>
                        )}

                        <div className="mb-3">
                            <label htmlFor="passwordInput">
                                <strong className='s-p1'>Password</strong>
                            </label>
                            <div className="d-flex">
                                <input id="passwordInput" type="password" placeholder='At least 6 characters' autoComplete='off' name="password"
                                className='form-control rounded-0' onChange={(e)=>setPassword(e.target.value)}/>
                                <button type="button" onClick={() => hideShow('passwordInput', 1)} className="border-0 bg-white text-dark">
                                    <span id="eyeIcon1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <p className='s-p2'>Password must be atleast 6 characters.</p>
                        </div>
                        {passwordError != '' && (
                            <p style={{color:"red"}}>{passwordError}</p>
                        )}

                        <div className="mb-3">
                            <label htmlFor="passwordAgainInput">
                                <strong className='s-p1'>Password again</strong>
                            </label>
                            <div className="d-flex">
                                <input id="passwordAgainInput" type="password" autoComplete='off' name="passwordAgain"
                                className='form-control rounded-0' onChange={(e)=>setPasswordAgain(e.target.value)}/>                        
                                <button type="button" onClick={() => hideShow('passwordAgainInput', 2)} className="border-0 bg-white text-dark">
                                    <span id="eyeIcon2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                                            <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        {passwordAgainError != '' && (
                            <p style={{color:"red"}}>{passwordAgainError}</p>
                        )}

                        <button type="submit" className='btn1 w-100'>
                            Create your MediOrder account
                        </button>

                    </form>
                    <br/>
                    <div className="d-flex">
                        <p className='s-p1'>Already have an account?</p>
                        <Link to="/login" className='text-decoration-none'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Signup;