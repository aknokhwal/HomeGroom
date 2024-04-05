import './register.css';
import svg from './assets/join.svg'

const Register = () => {
    return (
        <div className="register-div">
            <div className="register-text">
                <h2>Register as Worker</h2>
                <p className="text-muted">Register with HomeGroom by filling the from and we will reach you.</p>
                <button class="btn">Fill the Details</button>
            </div>
            <div>
            <img  className="register-img" src={svg} alt="registrred" />
            </div>
        </div>
    )
}

export default Register