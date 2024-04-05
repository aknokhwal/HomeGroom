import Navbar from './Navbar';
import Footer from './Footer';
import { serviceData } from './data';
import './book.css';

const Book = () => {
    return (
        <div>
            <Navbar />
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
            <Footer />
        </div>
    )
}
export default Book;