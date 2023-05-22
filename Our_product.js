import React, { useEffect } from 'react';
import './ourproduct.css';
import Navbar from './Navbar';



const Our_product = () => {
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
    <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
  <div className="box">
    <h2 className="text-center">
      <b> <span style={{ color: 'red' }}>OUR</span> PRODUCT</b>
    </h2>
    <div className="row">
      <div className="col-md-6 order-md-2 carousel-container">
        <img src={require("./images/fly bricks.png")} className="img-fluid" alt="flybrick" />
      </div>
      <div className="col-md-6 order-md-1">
        <p className="text-content">
          <b style={{ fontSize: '25px' }}>Fly Ash Bricks</b><br /><br />
          <span className="text-content">&nbsp; &nbsp;We produce high-quality Fly Ash Bricks using advanced technology to ensure precision and durability, resulting in a superior product that meets industry standards.
            <br /><br /> &nbsp; Our bricks are not only strong but also visually appealing, making them an excellent choice for any building project. Trust us for your construction needs, and we'll help you build a structure that lasts a lifetime.
          </span>
        </p>
      </div>
    </div>
  </div>
</div>
 </div>
  );
};
export default Our_product;