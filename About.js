import React, { useEffect } from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const About = () => {
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
            <img src={require("./images/facebook.png")} alt="Image 1" />
            <img src={require("./images/twitter.png")} alt="Image 2" />
            <img src={require("./images/whatsapp.png")} alt="Image 3" />
            <img src={require("./images/instagram.png")} alt="Image 4" />
            <img src={require("./images/linkedin.png")} alt="Image 5" />
          </div>
        </header>

        <Navbar />
        <div className="container">
            <div className="box">
              <h2 className="text-center">
                <b> <span style={{ color: 'red' }}>About</span> Us</b>
              </h2>
              <div className="row">
                <div className="col-md-6 order-md-2 carousel-container">
                  <div className="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={require("./images/carosal_1.png")} alt="Image 1" />
                      </div>
                      <div className="carousel-item">
                        <img src={require("./images/carosal_2.png")} alt="Image 2" />
                      </div>
                      <div className="carousel-item">
                        <img src={require("./images/carosal_3.png")} alt="Image 3" />
                      </div>
                      <div className="carousel-item">
                        <img src={require("./images/carosal_4.png")} alt="Image 4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-md-1">
                  <p className="text-order">
                    <b>JBROS INFRAS</b> is an Engineering and Construction firm with the capacity to execute infrastructure development projects in domestic, commercial, and industrial areas. We have a great team of seasoned experts and technicians capable of designing, executing, and building high-quality constructions on time.
                    <br /> We also manufacture and supply strong and premium quality Fly Ash Bricks from our own factory.
                  </p>
                </div>
              </div>
              <div>
                <h2><b><span style={{ fontSize: '18px' }}>We Believe in</span></b></h2>
                <div className="corner-img">
                  <div className="custom-column">
                    <img src={require("./images/honest.png")} alt="Image 1" /><br />
                    <b>Honest</b>
                  </div>
                  <div className="custom-column">
                    <img src={require("./images/dedication.jpg")} alt="Image 2" /><br />
                    <b>Dedication</b>
                  </div>
                  <div className="custom-column">
                    <img src={require("./images/passion.jpg")} alt="Image 3" /><br />
                    <b>Passion</b>
                  </div>
                  <div className="custom-column">
                    <img src={require("./images/perfection.jpg")} alt="Image 4" /><br />
                    <b>Perfection</b>
                  </div>
                  <div className="custom-column">
                    <img src={require("./images/sprint.jpg")} alt="Image 5" /><br />
                    <b>Sprint</b>
                  </div>
                </div>
              </div>
            </div>
          </div>  
      </div>
    );
  };
  export default About;