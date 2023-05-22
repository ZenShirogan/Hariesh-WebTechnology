import React, { useEffect } from 'react';
import './industry.css';
import Navbar from './Navbar';
import { ArchitecturalDesignLink, ConstructionLink, InteriorLink, TechnicalLink } from './img_service';



const Industry = () => {
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
            <tr>
              <th className="column1">
               
                <ArchitecturalDesignLink />
                  <ConstructionLink />
                  <TechnicalLink />
                  <InteriorLink />
              </th>
              <td style={{ width: '200px' }}></td>
              <td className="data1">
                <p className="data2">
                <b style={{ fontSize: '30px', color: 'rgba(209, 10, 10, 0.852)' }}>
                  Industrial Infrastructure Development
                </b>
                  <img src={require("./images/red_iid.jpg")}className="img2" alt="" />
                </p>
                <p>
                  Our skilled professionals utilize cutting-edge technologies and methodologies to deliver turnkey projects that meet both your budget and timeline requirements. With a strong focus on technical proficiency and construction know-how, we ensure successful execution of your projects, providing you with a seamless experience.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>);
}
export default Industry;

