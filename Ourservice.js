import React, { useEffect } from 'react';
import './ourservice.css';

import Navbar from './Navbar';
import { ArchitecturalDesignlik, Constructionlik, Interiorlik, Technicallik,Industrylik } from './services';

const  Ourservice = () => {
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
            <img src={require("./images/facebook.png")} alt="" />
            <img src={require("./images/twitter.png")} alt="" />
            <img src={require("./images/whatsapp.png")} alt="" />
            <img src={require("./images/instagram.png")} alt="" />
            <img src={require("./images/linkedin.png")} alt="" />
            </div>
        </header>
        
    <Navbar />
    
    <div className="box">
  <b style={{ fontSize: '35px' }}><span style={{ color: 'rgba(209, 10, 10, 0.852)' }}>Our </span>Services</b>
  <table>
    <tr className="row1">
      <th className="column1">
        
        <Constructionlik />
        <ArchitecturalDesignlik /> 
        <Technicallik />
        <Interiorlik />
        <Industrylik />
      </th>
    </tr>
  </table>
</div>
</div>);
};

export default Ourservice;

    

 
