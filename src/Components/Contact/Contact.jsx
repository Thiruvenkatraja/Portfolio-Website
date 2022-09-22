import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef,useState } from 'react';
import {themeContext} from '../../Context'; 
import {useContext} from 'react';

export default function Contact() {
  const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0vwmt3l', 'template_da6ixew', form.current, 'YiYaitATSo9eZOGLT')
      .then((result) => {
          console.log(result.text);
          setdone(true);
      }, (error) => {
          console.log(error.text);
      });
    };
    const[done, setdone] = useState(false);
  return (
    <div className='contact-form' id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Get in Touch</span>
                <span>Contact Me</span>
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className="user" placeholder='Message'/>
                <input type="submit" value='send' className="button" />
                <span>{done && "Thanks for Contacting me"}</span>
                <div className= 'blur c-blur1' style={{background:"var(--purple)"}}></div>
            </form>
        </div>
    </div>
  );
}