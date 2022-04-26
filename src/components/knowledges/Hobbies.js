import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li>
                    <i className="fa-solid fa-futbol"></i>
                    <span>Football</span>
                </li>
                <li>
                    <i class="fa-solid fa-car-rear"></i>
                    <span>Voyages</span>
                </li>
                <li>
                    <i className="fa-brands fa-twitch"></i>
                    <span>Twitch</span>
                </li>
                <li>
                    <i class="fa-solid fa-flag"></i>
                    <span>Japon</span>
                </li>

            </ul>
        </div>
    );
};

export default Hobbies;