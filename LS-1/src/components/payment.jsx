import Navbar from '../components/navbar';
import '../styles/payment.css';
import QR from '../assets/payment2.jpg';

function Payment() {

    return (
        <div>
            <Navbar />
            <div className="p-wrapper">
                <div className="p-card d-flex flex-column justify-content-center">
                    <div className='d-flex justify-content-center'>
                        <img src={QR} alt="QR Code" className='p-img'/>
                        {/* <h1 className='p-p1'>Total Price: $29.99</h1> */}
                    </div>
                    <h1 className='p-h1'>Dolo-65</h1>
                    <h1 className='p-p1'>Total Price: $29.99</h1>
                </div>
            </div>
        </div>
    );
}

export default Payment;
