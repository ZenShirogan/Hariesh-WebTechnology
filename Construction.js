import React, { useEffect } from 'react';
import './construction.css';
import Navbar from './Navbar';
import { ArchitecturalDesignLink, IndustryLink, InteriorLink, TechnicalLink } from './img_service';


const Construction = () => {
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
        <div className="box">
  <b style={{ fontSize: '35px' }}>
    <span style={{ color: 'rgba(209, 10, 10, 0.852)' }}>Our </span>Services
  </b>
  <table>
    <tbody>
      <tr>
        <th className="column1">
          <ArchitecturalDesignLink />
          <InteriorLink />
          <TechnicalLink />
          <IndustryLink />       
        </th>
        <td style={{ width: '200px' }}></td>
        <td className="data1">
          <span style={{ padding: '10px' }}>
            <b style={{ fontSize: '30px', color: 'rgba(209, 10, 10, 0.852)' }}>
              Construction
              <img src={require("./images/red_construction.png")} style={{ width: '100px', height: '100px', float: 'right' }} alt="" />
            </b>
          </span>
          <br />
          <br />
          <p>
            We are a team of experienced professionals specializing in delivering cost-effective construction services for residential and commercial properties in Coimbatore, Erode, Tirupur, Namakkal, Nilgiris, and Mysore. Our focus is on providing exceptional quality and ensuring complete client satisfaction.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>
  );};
  export default Construction;
