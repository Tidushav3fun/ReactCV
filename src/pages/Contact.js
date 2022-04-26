import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                    <div className='contactBox'>
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className='fas fa-map-marker-alt'></i>
                                <span>Auchel</span>
                            </li>
                            <li>
                                <i className='fas fa-mobile-alt'></i>
                                <CopyToClipboard text="0637424739">
                                    <span 
                                    className='clickInput' onClick={() => { alert('Téléphone copié !');}} >06 37 42 47 39</span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className='far fa-envelope'></i>
                                <CopyToClipboard text="cabaret.kevin@gmail.com">
                                    <span 
                                    className='clickInput' onClick={() => { alert('Mail copié !');}} >cabaret.kevin@gmail.com</span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                </div>
                <div className='socialNetwork'>
                    <ul>
                        <a href='https://www.linkedin.com/in/kevin-cabaret-394a31194/' target="_blank" rel='noopener noreferrer'>
                        <h4>LinkedIn</h4>
                        <i className='fab fa-linkedin'></i>
                        </a>
                        <a href='https://github.com/Tidushav3fun' target="_blank" rel='noopener noreferrer'>
                        <h4>Github</h4>
                        <i className='fab fa-github'></i>
                        </a>
                        <a href='https://twitter.com/Tidushav3fun' target="_blank" rel='noopener noreferrer'> 
                        <h4>Twitter</h4>
                        <i className='fab fa-twitter'></i></a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;