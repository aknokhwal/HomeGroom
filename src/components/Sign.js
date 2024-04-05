
import { Link } from 'react-router-dom';
import './sign.css';


export const CreateAccount = () => {
    return (
        <div className='sign'>
            <div>
                <img className='sign-img' src='https://img.freepik.com/free-photo/young-woman-cleaning-kitchen-looking-camera_23-2148222223.jpg' />
            </div>
            <div className='sign-div'>
            <h3 className='sign-div-h'>CreateAccount</h3>
            <p className='sign-div-p'>We suggest using email address you use at work</p>

            <form className='sign-div-form'>
                <label className='roboto-medium'>Email address</label>
                <input type='email' placeholder='eg.johndoe@gmail.com' required className='roboto-lighter'/>
                <label className='roboto-medium'>Set Password</label>
                <input type='password' placeholder='At least 6 characters' required className='roboto-lighter' />

                <button className='btn sign-btn'>CreateAccount</button>
            </form>
            <p>Already Login? <Link to='/signin'>Sign in</Link></p>
            </div>
        </div>
    )
}


export const Signin = () => {
     return (
        <div className='sign'>
            <div>
                <img className='sign-img' src='https://i.pinimg.com/736x/fb/c4/9f/fbc49f15676a17711afc8dc4eac5832c.jpg' />
            </div>
            <div className='sign-div'>
            <h3 className='sign-div-h'>Sign-in</h3>
            <p className='sign-div-p'>Please fill in your information below to continue</p>

            <form className='sign-div-form'>
                <label className='roboto-medium'>Email address</label>
                <input type='email' placeholder='eg.johndoe@gmail.com' required className='roboto-lighter'/>
                <label className='roboto-medium'>Enter Password</label>
                <input type='password' placeholder='At least 6 characters' required className='roboto-lighter' />

                <button className='btn sign-btn'>Sign in</button>
            </form>
            
            <p>New to HomeGroom? <Link to='/signup'>Create Account</Link></p>
        </div>
        </div>
    )

}