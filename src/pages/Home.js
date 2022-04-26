import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className='homeContent'>
                <div className='content'>
                    <h1>Kevin Cabaret</h1>
                    <h2>Développeur Web Fullstack</h2>
                    <div className='pdf'>
                        <a href='./media/CV.pdf' target='_blank'> Téléchargez mon CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;