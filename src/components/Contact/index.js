import Loader from 'react-loaders';
import './index.scss';
import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {

    const [letterClass, setLetterClass] = useState(`text-animate`)

    useEffect(() => {
        const timer = setTimeout(() => { 
            setLetterClass('text-animate-hover')
        }, 3000);
    
        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>

                <p>Mobile: +1 (813)-998-4466</p>

                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className = "half">
                                <input type='text' name="name" placeholder='Name' required />
                            </li>

                            <li className = "half">
                                <input 
                                type = "email"
                                name = "email"
                                placeholder = "Email"
                                required
                                />
                            </li>
                            <li>
                                <input 
                                    placeholder="Subject" 
                                    type="text" 
                                    name="subject" 
                                    required
                                />
                            </li>
                            <li>
                                <textarea 
                                    placeholder="Message"
                                    name="message"
                                    required
                                />
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default Contact