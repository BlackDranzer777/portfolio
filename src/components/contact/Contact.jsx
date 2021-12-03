import React, {useContext, useRef, useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { ThemeContext } from '../../context';

export default function Contact() {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const formRef = useRef();
    const [done, setDone] = useState(false); 
    
    const submitHandler = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cbvafpi', 'template_w27zvag', formRef.current, 'user_OWJNgaWt8ILqTlAv8EFNh')
        .then((result) => {
            setDone(true);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    
    return (
        <div className={darkMode ? "contact" : "contact-white"}>
            <div className={darkMode ? "contact-bg" : "contact-bg-white"}></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className={darkMode ? "contact-title" : "contact-title-white"}>Let's discuss your project</h1>
                    <div className="contact-info">
                        <div className={darkMode ? "contact-info-item" : "contact-info-item-white"}>
                            <img src={Phone} alt="" className="contact-icon" />
                            +91 9314132878
                        </div>
                        <div className={darkMode ? "contact-info-item" : "contact-info-item-white"}>
                            <img src={Email} alt="" className="contact-icon" />
                            divyanshjn23@gmail.com
                        </div>
                        <div className={darkMode ? "contact-info-item" : "contact-info-item-white"}>
                            <img src={Address} alt="" className="contact-icon" />
                            SDC Euro Exotica Apartments, New Sanganer Road, Jaipur
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>What's your story?</b> Get in touch. Always ready to develop project
                        if the right project comes along.
                    </p>
                    <form action="" ref={formRef} onSubmit={submitHandler}>
                        <input type="text" placeholder="Name" name="user_name" className={darkMode ? "input-elements" : "input-elements-white"} />
                        <input type="text" placeholder="Subject" name="user_subject" className={darkMode ? "input-elements" : "input-elements-white"} />
                        <input type="text" placeholder="Email" name="user_email" className={darkMode ? "input-elements" : "input-elements-white"} />
                        <textarea name="message" id=""  rows="5" placeholder="Message" className={darkMode ? "textarea" : "textarea-white"}></textarea>
                        <button>Submit</button>
                        {done && "Thank You..."}
                    </form>
                </div>
            </div>
        </div>
    )
}
