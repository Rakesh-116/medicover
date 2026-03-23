import Navbar from './navbar';
import '../styles/about.css';
import pic from '../assets/profile-pic-1.png';

function About(){
    return (
        <div>
            <Navbar />
            <div className="a-wrapper ">
                <h1 className="a-h1">Welcome to MediOrder – Your Trusted Medical Delivery Partner</h1>
                <p>At MediOrder, we believe in the power of accessible healthcare. Our mission is to ensure that vital medical supplies and prescriptions reach those who need them, when they need them, with convenience and reliability at the forefront of our service.</p>
                <p>Founded with the vision of bridging the gap between patients and essential medical supplies, MediOrder is revolutionizing the way healthcare is delivered. With the rise of digital technology, we recognized the opportunity to streamline the process of obtaining prescriptions, medical equipment, and supplies, empowering individuals to prioritize their health without unnecessary hassle or delay.</p>
                <p>What sets MediOrder apart is our unwavering commitment to quality, safety, and efficiency. Every step of our delivery process is meticulously designed to uphold the highest standards, from the moment an order is placed to its timely delivery at your doorstep. We collaborate with trusted pharmacies, healthcare providers, and delivery partners to ensure that every interaction with MediOrder is seamless and reliable.</p>
                <p>Our team comprises dedicated professionals who share a passion for healthcare and a dedication to improving the lives of our customers. With expertise in logistics, technology, and healthcare, we work tirelessly to innovate and optimize our platform, ensuring that you receive the best possible experience with every order.</p>
                <h1 className='a-h1'>Our Team</h1>
                <div className="d-flex justify-content-around">
                    <div className="a-card">
                        <img src={pic} className='a-img'/>
                        <h1 className="a-h2">T. V. SREE VAATSAVA</h1>
                        <p>FrontEnd & UI/UX Developer</p>
                    </div>
                    <div className="a-card">
                        <img src={pic} className='a-img'/>
                        <h1 className="a-h2">B. HEMA NAGA CHAND</h1>
                        <p>BackEnd & Database Developer</p>
                    </div>
                    <div className="a-card">
                        <img src={pic} className='a-img'/>
                        <h1 className="a-h2">K. VARUN</h1>
                        <p>FrontEnd & bootstrap Developer</p>
                    </div>
                    <div className="a-card">
                        <img src={pic} className='a-img'/>
                        <h1 className="a-h2">P. RAKESH</h1>
                        <p>BackEnd Developer & Server-API Accessing</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;