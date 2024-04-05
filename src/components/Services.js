import './services.css';
import { serviceData } from './data.js';
import Carousel from 'react-bootstrap/Carousel';

  
const Services = () => {
    return (
        <section id="services" >
                <h1>Feature Services Offered</h1>
                <p>We offer best services by providing best professional servent </p>
              
                <Carousel  data-bs-theme="dark">
                {serviceData.map(
                    ({className, src, alt}) => (
                        <Carousel.Item>
                            <div className='img'>
                            <img src={src} className='services-image' alt={alt} />
                            <h4>{alt}</h4>
                            </div>
                        </Carousel.Item>
                    )
                )}
            </Carousel>

            
        </section>
    )
}

export default Services;