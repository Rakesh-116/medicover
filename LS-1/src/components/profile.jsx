import { useState, useEffect } from 'react';
import Navbar from './navbar';
import axios from 'axios';
import '../styles/profile.css';

const Profile = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get('http://localhost:3009/profile')
        .then(user => setUser(user.data))
        .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <Navbar />            
            {user ? 
            (
                <div className="bg-container1 p-5 d-flex justify-content-center">
                    <div className='text-center pt-5 mt-5'>
                        <img src="https://i.pinimg.com/736x/54/72/d1/5472d1b09d3d724228109d381d617326.jpg" className='img'/>
                        <h1>Name: <span style={{color:"rgb(0, 217, 255)"}}>{user.name}</span></h1>
                        <h1>Email: <span style={{color:"rgb(0, 217, 255)"}}>{user.email}</span></h1>
                    </div>
                </div>
            ) : (
                <div className="bg-container1 p-5" id="spinner">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
