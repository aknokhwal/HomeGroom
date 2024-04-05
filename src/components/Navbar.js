import './navbar.css';
import {useNavigate} from "react-router-dom";
import Icon from './assets/toggle.svg'
const Navbar = () => {
    const navigate = useNavigate();
    return(
        <header>
            <div className="nav-h">
                <h2 className="roboto-medium">HomeGroom</h2>
            </div>
            <div className="nav-div">
                <nav>
                    <a className="nav-link roboto-regular" href="#services">Services</a>
                    <a className="nav-link roboto-regular" href="#footer">About</a>
                    <button className="btn roboto-regular" onClick={
                        (e) => {
                            e.preventDefault();
                            navigate('/signin')
                        }
                        }>SignIn</button>
                    
                </nav>
            </div>
                 
            
        </header>
    )
}

export default Navbar;