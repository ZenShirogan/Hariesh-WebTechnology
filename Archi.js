import React, { useEffect } from 'react';
import './architecture.css';
import { ConstructionLink, IndustryLink, InteriorLink, TechnicalLink } from './img_service';
import Navbar from './Navbar';



const Archi = () => {
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
        <div className="box">
      <b style={{ fontSize: '35px' }}>
        <span style={{ color: 'rgba(209, 10, 10, 0.852)' }}>Our </span>Services
      </b>
      <table>
        <tbody>
        
           <th className="column1">
          <InteriorLink />
          <ConstructionLink />
          <TechnicalLink />
          <IndustryLink />   
        </th>
          <th>
            <td style={{ width: '200px' }}></td>
            <td className="data1">
              <span>
                <b style={{ fontSize: '30px', color: 'rgba(209, 10, 10, 0.852)' }}>
                  Architecture
                  <img src={require("./images/red_architecture.jpg")} style={{ width: '100px', height: '100px', float: 'right' }} alt="" />
                </b>
                <br />
                <br />
                <p>
                  Our team of young, creative, and experienced architects can transform your vision into reality through our design services.
                  We are committed to creating spatial experiences that seamlessly blend geometry and nature in our design and development processes.
                </p>
              </span>
            </td>
          </th>
        </tbody>
      </table>
    </div>  
    </div>      
    );
  };
  export default Archi;