import { useState } from 'react';
import axios from 'axios';
import '../styles/medicine.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Digene from '../assets/digene.png';
import Solvin from '../assets/paracetamol.png';
import Volini from '../assets/volini.png';
import Saridon from '../assets/saridon.png';
import DrReddy from '../assets/Levodropropizine.png';
import Cetiri from '../assets/cetirizine.png';
import Para from '../assets/dolo-65.png';

const Medicine = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([[]]);
    const [loading, setLoading] = useState(false);
    const [enter, setEnter] = useState(0);

    const search = async () => {
        if(searchTerm!=="")
            setEnter(1);
        else
            setEnter(0);
        setSearchResult([[]]);
        try {
            setLoading(true);
                const response = await axios.get('https://real-time-product-search.p.rapidapi.com/search', {
                params: {
                    q: searchTerm,
                    country: 'us',
                    language: 'en'
                },
                headers: {
                    'X-RapidAPI-Key': '4ab5daa93dmshe577449bebfc395p1036b8jsnbb4024f5df0d',
                    'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
                }
            });
            setSearchResult(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="bg-container2">
                <div className="up-card d-flex justify-content-center align-items-center">
                        <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter search term" className='m-search' id="input-search" />

                        <button onClick={search} className='btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </button>
                </div>

                { enter == 1 ?(
                    <div className=''>
                        {loading ? (
                            <div className="p-5">
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                </div>
                            </div>
                        ):(
                        <div className="container">
                            <div className="row">
                                {searchResult.map((product, index) => (
                                    <div key={index} className='col-6'>
                                        <div className="m-card">
                                            <div className="d-flex">
                                                {product.product_photos && product.product_photos.length > 0 &&
                                                    <img src={product.product_photos[0]} className='m-img' alt="Product" />
                                                }
                                                <div className="m-sub-card ">
                                                    <h2 className='m-h1'>{product.product_title}</h2>
                                                    <p className='m-p1'>{product.product_description}</p>
                                                </div>
                                            </div>
                                            <div className="pt-5 d-flex justify-content-around">
                                                <div className="mt-2">
                                                    {product.offer && (
                                                        <h1 className='m-p2'>Price: {product.offer.price}</h1>
                                                    )}
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    {/* <button className='m-btn1'>Add to Cart</button> */}
                                                    <Link to="/payment" className='m-btn2'>
                                                        Buy Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}
                    </div>
                ):(
                    <div className="container">
                        <div className="row">
                            <div className='col-6'>
                                <div className="m-card">
                                    <div className="d-flex">
                                        <img src={Digene} className='m-img'/>
                                        <div className="m-sub-card ">
                                            <h2 className='m-h1'>Digene tablets</h2>
                                            <p className='m-p1'>Digene tablets are antacid tablets commonly used to relieve symptoms of indigestion, heartburn, acid reflux, and stomach upset. They are formulated to neutralize excess stomach acid, providing quick relief from discomfort associated with these conditions.</p>
                                        </div>
                                    </div>
                                    <div className="pt-5 d-flex justify-content-around">
                                        <div className="mt-2">
                                            <h1 className='m-p2'>Price: $2.99</h1>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            {/* <button className='m-btn1'>Add to Cart</button> */}
                                            <Link to="/payment" className='m-btn2'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="m-card">
                                    <div className="d-flex">
                                        <img src={Solvin} className='m-img'/>
                                        <div className="m-sub-card ">
                                            <h2 className='m-h1'>Paracetamol 500MG, SolvinCold</h2>
                                            <p className='m-p1'>Solvin Cold is a medication used to relieve symptoms associated with the common cold, such as nasal congestion, runny nose, sneezing, and coughing. It is typically available in the form of tablets or syrup and is designed to provide temporary relief from cold-related discomfort.</p>
                                        </div>
                                    </div>
                                    <div className="pt-5 d-flex justify-content-around">
                                        <div className="mt-2">
                                            <h1 className='m-p2'>Price: $0.40</h1>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            {/* <button className='m-btn1'>Add to Cart</button> */}
                                            <Link to="/payment" className='m-btn2'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="m-card">
                                    <div className="d-flex">
                                        <img src={DrReddy} className='m-img'/>
                                        <div className="m-sub-card ">
                                            <h2 className='m-h1'>Dr. Reddys Reswas Syrup</h2>
                                            <p className='m-p1'>Reswas Syrup is a medication or supplement, its important to note that I can provide general information about commonly known medications and their categories, but I may not have details about specific brand names or formulations that have emerged after my last update.</p>
                                        </div>
                                    </div>
                                    <div className="pt-5 d-flex justify-content-around">
                                        <div className="mt-2">
                                            <h1 className='m-p2'>Price: $1.75</h1>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            {/* <button className='m-btn1'>Add to Cart</button> */}
                                            <Link to="/payment" className='m-btn2'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="m-card">
                                    <div className="d-flex">
                                        <img src={Volini} className='m-img'/>
                                        <div className="m-sub-card">
                                            <h2 className='m-h1'>Volini Spray</h2>
                                            <p className='m-p1'>Volini Spray is a topical pain relief spray used to alleviate pain and inflammation associated with musculoskeletal conditions such as arthritis, sprains, strains, and sports injuries. It is designed for external use and is applied directly to the affected area of the skin.
                                            The active ingredient in Volini Spray is usually Diclofenac, which is a nonsteroidal anti-inflammatory drug (NSAID). Diclofenac works by inhibiting the production of prostaglandins, substances in the body that contribute to pain and inflammation.</p>
                                        </div>
                                    </div>
                                    <div className="pt-5 d-flex justify-content-around">
                                        <div className="mt-2">
                                            <h1 className='m-p2'>Price: $2.60</h1>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            {/* <button className='m-btn1'>Add to Cart</button> */}
                                            <Link to="/payment" className='m-btn2'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="m-card">
                                    <div className="d-flex">
                                        <img src={Saridon} className='m-img'/>
                                        <div className="m-sub-card ">
                                            <h2 className='m-h1'>Saridon for Headache</h2>
                                            <p className='m-p1'>Saridon is a popular over-the-counter medication used for the relief of mild to moderate pain, including headaches, toothaches, menstrual cramps, and muscle aches. Its commonly used as a quick remedy for various types of pain.</p>
                                        </div>
                                    </div>
                                    <div className="pt-5 d-flex justify-content-around">
                                        <div className="mt-2">
                                            <h1 className='m-p2'>Price: $3.09</h1>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            {/* <button className='m-btn1'>Add to Cart</button> */}
                                            <Link to="/payment" className='m-btn2'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="m-card">
                                    <div className="d-flex">
                                        <img src={Cetiri} className='m-img'/>
                                        <div className="m-sub-card ">
                                            <h2 className='m-h1'>Cetirizine, 10MG</h2>
                                            <p className='m-p1'>Cetirizine is an antihistamine medication commonly used to relieve symptoms of allergic reactions, such as hay fever, allergic rhinitis, hives (urticaria), and other allergic conditions. It belongs to the second-generation antihistamines, which are known for their effectiveness and reduced sedative effects compared to first-generation antihistamines.</p>
                                        </div>
                                    </div>
                                    <div className="pt-5 d-flex justify-content-around">
                                        <div className="mt-2">
                                            <h1 className='m-p2'>Price: $1.09</h1>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            {/* <button className='m-btn1'>Add to Cart</button> */}
                                            <Link to="/payment" className='m-btn2'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="m-card">
                                    <div className="d-flex">
                                        <img src={Para} className='m-img'/>
                                        <div className="m-sub-card ">
                                            <h2 className='m-h1'>Paracetamol, Dolo-65</h2>
                                            <p className='m-p1'>Paracetamol, also known as acetaminophen in some regions, is a widely used over-the-counter medication known for its pain-relieving (analgesic) and fever-reducing (antipyretic) properties. Its one of the most commonly used medications for managing mild to moderate pain and fever, and its available in various forms such as tablets, capsules, syrups, and suppositories.</p>
                                        </div>
                                    </div>
                                    <div className="pt-5 d-flex justify-content-around">
                                        <div className="mt-2">
                                            <h1 className='m-p2'>Price: $1.50</h1>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            {/* <button className='m-btn1'>Add to Cart</button> */}
                                            <Link to="/payment" className='m-btn2'>Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Medicine;
