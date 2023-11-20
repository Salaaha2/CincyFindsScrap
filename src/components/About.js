import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// About page

const About = () => {
    return (
        <div>
        <Navbar />
        {/* About Content */}
        <div className='content'>
            <h4>About us</h4>
            <p className='title-content'>
                <blockquote>"Success is best when it's shared" <br /> - Howard Schultz</blockquote>
            </p>
            <hr />

            {/* Info */}
            <div className="container mt-5">
                <div className="card">
                <img src="./imgs/AboutPics/Dennis.png" className='card-img-side' alt="One of our Creators" />
                <div className="card-body">
                    <h5 className="card-title">Dennis</h5>
                    <p className="card-text">
                        Content from Dennis About Page
                    </p>
                </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
};


export default About;