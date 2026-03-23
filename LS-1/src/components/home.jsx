import Navbar from './navbar';
import '../styles/home.css';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <div>
            <Navbar />
            <div className="bg-container1">
                <div className="c1 d-flex flex-column justify-content-center text-center">
                    <h1>Welcome to <span style={{color:"rgb(0, 217, 255)"}}>MediOrder!</span></h1>
                </div>
                <div className="card1 d-flex">
                    <div className="h-card h-c1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-file-earmark-medical" viewBox="0 0 16 16">
                            <path d="M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                        </svg>
                        <p className='ho-p1'>Looking for a Docter?</p>
                        <h1 className='ho-h1'>Book <br/> an Appointment</h1>
                    </div>
                    <div className="h-card h-c2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
                            <path d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
                        </svg>
                        <p className='ho-p1'>Let Us take care of You!</p>
                        <h1 className='ho-h1'>Request <br/> a Home Service</h1>
                    </div>
                    <div className="h-card h-c3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-chat-right-text" viewBox="0 0 16 16">
                            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                        </svg>
                        <p className='ho-p1'>Have a question?</p>
                        <h1 className='ho-h1'>Free <br/> Consultation</h1>
                    </div>
                    <div className="h-card h-c4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-prescription2" viewBox="0 0 16 16">
                            <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2z"/>
                            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1zm2 3v10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V4zM3 3h10V1H3z"/>
                        </svg>
                        <p className='ho-p1'>Confused about what medicine to use?</p>
                        <h1 className='ho-h1'>Prescribed <br/> Medication provided</h1>
                    </div>                    
                </div>
                {isLoggedIn ? (
                        <Link to='/medicine' className='btn btn-primary m-3 text-dark'>
                            Buy Medicines
                        </Link>
                    ):(
                        <Link to='/login'  className='btn btn-primary m-3 text-dark'>
                            Buy Medicines
                        </Link>
                    )}
            </div>
        </div>
    );
};

export default Home;
