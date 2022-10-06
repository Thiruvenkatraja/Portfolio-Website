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
    
   
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_0vwmt3l', 'template_da6ixew', form.current, 'YiYaitATSo9eZOGLT')
      .then((result) => {
          console.log(result.text);
          setdone(true);
          form.reset();
      }, (error) => {
          console.log(error.text);
      });
      setname('');
      setemail('');
      setmobile('');
      setmessage('');

    };
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[mobile,setmobile]=useState('');
    const[message,setmessage]=useState('');

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
                <input type="text" name='user_name' className='user' placeholder='Name' onChange={event=>setname(event.target.value)} value={name}/>
                <input type="email" name='user_email' className='user' placeholder='Email' onChange={event=>setemail(event.target.value)} value={email} />
                <input type="number" name='user_phone' className='user' placeholder='Mobile' onChange={event=>setmobile(event.target.value)} value={mobile} />
                <textarea name="message" className="user" placeholder='Message' onChange={event=>setmessage(event.target.value)} value={message}/>
                <input type="submit" value='Send' className="button c-btn" />
                <span>{done && "Thanks for Contacting me"}</span>
                <div className= 'blur c-blur1' style={{background:"var(--purple)"}}></div>
            </form>
        </div>
    </div>
  );
}
