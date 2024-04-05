import './worker.css';
import { useNavigate } from 'react-router-dom';
const Worker = () => {
    const navigate = useNavigate();
    return (
        <div className="worker-div">
            <h2>HomeGroom</h2>
            <h3>Register With Us</h3>
        <form className="Worker-form" onSubmit={(e) => {
            e.preventDefault();
            navigate('/');
        }}>
            <label className="W-form-label">Name</label>
            <input className="W-form-input" type="text" name="name"/>
            <label className="W-from-label">Phone Number</label>
            <input className="W-form-input" type="number" name="phone-number" />
            <label className="W-form-label">Address</label>
            <input className="w-form-input" type="text" name="address" />
            <p>Occupation: Day Time Worker</p>
            <div className='w-ratio-div'>
            <input type="radio" id="househelp" name="day-worker" />
            <label for="househelp">Househelp</label>
            </div>
            <div className='w-ratio-div'>
            <input type="radio" id="Cook" name="day-worker" />
            <label for="Cook">Cook</label>
            </div>
            <div className='w-ratio-div'>
            <input type="radio" id="Babysitter" name="day-worker" />
            <label for="Babysitter">Babysitter</label>
            </div>

            <p>Occupation: 24hr Live-in Worker</p>
            <div className='w-ratio-div'>
            <input type="radio" id="24hr-Househelp" name="24hr-worker" />
            <label for="24hr-Househelp">Househelp</label>
            </div>
            <div className='w-ratio-div'>
            <input type="radio" id="24hr-Cook" name="24hr-worker" />
            <label for="24hr-Cook">Cook</label>
            </div>
            <div className='w-ratio-div'>
            <input type="radio" id="24hr-Babysitter" name="24hr-worker" />
            <label for="24hr-Babysitter">Babysitter</label>
            </div>
            <button type='submit' className='btn'>Register</button>
        </form>
        </div>
    )
}

export default Worker;