import React, { useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';



const Home = () => {
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    const header = document.getElementById('header');
    if (window.innerWidth <= 765) {
      header.style.display = 'none';
    } else {
      header.style.display = 'flex';
    }
  };

  return (
    <div className="bo">
      <header id="header">
        <div className="header-info">
          <img src={require("./images/phone.png") }alt="Phone" />
          <p className="contact">91 730 506 5008</p>
          <div className="vertical-line" />
          <img src={require("./images/message.png")} alt="Email" />
          <p className="contact">care@jbrosinfras.com</p>
        </div>
        <div className="header-icons">
          <img src={require("./images/facebook.png")} alt="image_1" />
          <img src={require("./images/twitter.png")} alt="image_2" />
          <img src={require("./images/whatsapp.png")} alt="image_3" />
          <img src={require("./images/instagram.png")} alt="image_4" />
          <img src={require("./images/linkedin.png")} alt="image_5" />
        </div>
      </header>
      <Navbar />

      <div className="col-12 d-flex justify-content-center slider">
        <b>WE &nbsp;</b>
        <b className="strong">
          <span className="slide">
            MAKE<br />
            DESIGN<br />
            SHAPE<br />
            BUILD
          </span>
        </b>
      </div>
      <div className="col-12 d-flex justify-content-center text-wrap">
        <b className="wrap" id="wrap"> We shape our buildings; thereafter, they shape us.</b>
      </div>
    </div>
  );
};

export default Home;
