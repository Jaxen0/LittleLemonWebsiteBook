import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
    return (
        <header className='header'>
           <section>
            <div className='banner'>
               <h2>Little Lemon</h2>
               <h3>chicago</h3>
               <p>we are family owned Meditterian restarurent, focused on traditions recipes served with a modern twist.</p>
               <Link to="/booking"><button aria-label='On Click'>Reserve a table</button></Link>
            </div>

            <div className='banner-img'>
                <img src={bannerImg} alt='' />
            </div>
           </section>
        </header>
    );
};

export default Header;