import { Container } from 'react-bootstrap';
import './whyto.css';

const iconStyle = {
    height: "60px",
    alignSelf: "center",
}

const containerStyle = {
    width: "60vw",
    minWidth: "700px",
    margin: "30px auto",
    display: "flex",
    justifyContent: "space-between",
}

const WhyTo = () => {
    return (
        <Container style={{marginBottom:"50px"}}>
        
            <h1 style={{color: "var(--name-color)", textAlign: "center"
        }}>Why to choose us</h1>
            <div style={containerStyle}>
                <div className='columnDiv'>
                    <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="var(--name-color)" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/></svg>
                    <h4>Safety</h4>
                    <p className="text-muted">We check proper details of every maid because you safety is our first priority</p>
                </div>
                <div className='columnDiv'>
                    <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="var(--name-color)" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
                    <h4>High Quality</h4>
                    <p className="text-muted">Only skilled maids are registererd with us. As maids are personally trained by our team</p>
                </div>
                <div className='columnDiv'>
                    <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="var(--name-color)" d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"/></svg>
                    <h4>Replacement for Free</h4>
                    <p className="text-muted">If the maid leaves for any reason within 6 month of joining, we will replace the maid</p>
                </div>
            </div>
        </Container>
    )
}

export default WhyTo;