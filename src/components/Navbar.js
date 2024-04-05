import './navbar.css';
import {useNavigate} from "react-router-dom";
import { useState  } from 'react';
import Icon from './assets/toggle.svg'
const Navbar = ({value}) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return(
        <header>
            <div className="nav-h">
                <h2 className="roboto-medium">HomeGroom</h2>
            </div>
            <div className="nav-div">
                <nav>
                    <a className={ isOpen ? "nav-link roboto-regular responsive" : "nav-link roboto-regular"} href="#services">Services</a>
                    <a className={ isOpen ? "nav-link roboto-regular responsive" : "nav-link roboto-regular"}  href="#footer">About</a>
                    <button className="btn roboto-regular" onClick={
                        (e) => {
                            if(value == 'Sign-in'){
                            e.preventDefault();
                            navigate('/signin')
                        }
                        }
                        }>{value}</button>

                    <a className='nav-toggle' onClick={
                        () => setIsOpen(true)
                    }>
                        <img className='nav-icon' src={Icon} />
                    </a>
                </nav>
            </div>
                 
            
        </header>
    )
}

export default Navbar;