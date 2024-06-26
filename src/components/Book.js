import Navbar from './Navbar';
import Footer from './Footer';
import WhyTo from './Whyto.js';
import { serviceData } from './data';
import './book.css';

const Book = ({value}) => {
    return (
        <div>
            <Navbar value={value}/>
            <h1 className='service-h'>Book Your Service</h1>
            <div className='service-container'>
                {serviceData.map(
                    ({src, alt, rate}) => (<div className='service-card'>
                        <img src={src} alt ={alt} />
                        <div className='service-detail'>
                            <h5>{alt}</h5>
                            <p>(Rs {rate})</p>
                            <button className='btn' onClick={()=> {
                                alert(`You have booked ${alt} at Rs. ${rate}/hr.`)
                            }}>Book</button>
                        </div>
                    </div>)
                )}
            </div>
            
            <WhyTo />
            <Footer />
        </div>
    )
}
export default Book;