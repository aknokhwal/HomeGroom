import './footer.css';
import { serviceData } from './data';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
    return (
        <section style={{paddingTop: "100px"}} id='footer'>
        <footer className='footer'>
            <div className="b-example-divider"></div>
            <Container>
                <Col>
                    <Row>
                        <Col>
                            <h2>Get The App</h2>
                            <p className="text-muted">Get the HomeGroom App</p>
                        </Col>
                        <Col>
                        <a href="#" className=" p-0 text-body-secondary">
                        <svg style={{width: "60px", marginRight: "20px"}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#00000" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"/></svg></a>
                        <a href="#" className=" p-0 text-body-secondary">
                        <svg style={{width: "60px"}}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg></a>
                        </Col>
                    </Row>
                    
                    <Row>
                            <h5>Our Services</h5>
                            <Col>
                                <ul className="nav flex-column">
                                    {serviceData.map(({ alt }) => (
                                        <li className="nav-item mb-2" key={alt}><a href="#" className="nav-link p-0 text-body-secondary">{alt}</a></li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul className='nav flex-column'>
                                    {serviceData.map(({ alt }) => (
                                        <li className="nav-item mb-2" key={alt}><a href="#" className="nav-link p-0 text-body-secondary">{alt} in Mohali</a></li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <ul className='nav flex-column'>
                                    {serviceData.map(({ alt }) => (
                                        <li className="nav-item mb-2" key={alt}><a href="#" className="nav-link p-0 text-body-secondary">{alt} in Ludhiana</a></li>
                                    ))}
                                </ul>
                            </Col>
                            <Col>
                                <h5>Follow us</h5>
                                <ul className='nav flex-column'>
                                    <li className="nav-item mb-2" ><a href="" className="nav-link p-0 text-body-secondary">Instagram</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Twitter</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Facebook</a></li>
                                </ul>
                            </Col>
                    </Row>
                        
                    <Col style={{margin: "20px 0"}}>
                        <h5>About Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our Mission</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our Team</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Our Blog</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </Col>
                </Col>
            </Container>
            <div className="text-center py-3 border-top">
                <p>&copy; {new Date().getFullYear()} HomeGroom. All rights reserved.</p>
            </div>
        </footer>
        </section>
    );
}

export default Footer;