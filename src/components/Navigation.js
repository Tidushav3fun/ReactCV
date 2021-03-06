import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/CabaretKevin.png" alt="profil-pic"></img>
                    <h3>Kevin Cabaret</h3>
                </div>
            </div>

            <div className='navigation'>
                <ul>
                    <li>
                    <NavLink exact to="/ReactCV/" activeClassName='navActive'>
                        <i className='fas fa-home'></i>
                        <span>Accueil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/ReactCV/competences" activeClassName='navActive'>
                        <i className='fas fa-mountain'></i>
                        <span>Compétences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/ReactCV/portfolio" activeClassName='navActive'>
                        <i className='fas fa-images'></i>
                        <span>Portfolio</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/ReactCV/contact" activeClassName='navActive'>
                        <i className='fas fa-home'></i>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                </ul>
            </div>

<div className='socialNetwork'>
<ul>
    <li>
        <a href='https://www.linkedin.com/in/kevin-cabaret-394a31194/' target="_blank" rel='noopener noreferrer'> <i className='fab fa-linkedin'></i></a>
    </li>
    <li>
        <a href='https://github.com/Tidushav3fun' target="_blank" rel='noopener noreferrer'> <i className='fab fa-github'></i></a>
    </li>
    <li>
        <a href='https://twitter.com/Tidushav3fun' target="_blank" rel='noopener noreferrer'> <i className='fab fa-twitter'></i></a>
    </li>
</ul>

<div className='signature'>
    <p>Cabaret Kevin - 2022</p>
</div>

</div>

        </div>
    );
};

export default Navigation;