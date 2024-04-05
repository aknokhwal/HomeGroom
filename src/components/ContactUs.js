import './register.css';
import svg from "./assets/contact.svg";

const ContactUs = () => {
    return (
        <div className='contact-div'>
            <div >
                <img className='contact-Img' src={svg} alt='contact-svg'/>
            </div>
                <form className='contact-text'>
                    <h2>Contact us to react Quicker</h2>
                    <div className='form-input-div'>  
                    <label for="name">Full Name</label>
                    <input type="text" id="name" placeholder="Full Name" required/>
                    </div>     
                    <div className='form-input-div'>
                    <lable for="phone">Phone No.</lable>
                    <input type='number' id='phone' placeholder='Phone Number' required/>
                    </div>
                    <div className='form-input-div'>
                    <label for="email">E-mail</label>
                    <input type='email' id='email' placeholder='E-mail' required />
                    </div>
                    <button className='btn btn2'>Submit</button>
                </form>
        </div>
    )
}

export default ContactUs;