import React, { useEffect } from 'react';
import './technical.css';
import Navbar from './Navbar';
import { ArchitecturalDesignLink, ConstructionLink, InteriorLink, IndustryLink } from './img_service';



const Techinical = () => {
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
            <img src={require("./images/facebook.png")} alt="1" />
            <img src={require("./images/twitter.png")} alt="2" />
            <img src={require("./images/whatsapp.png")} alt="3" />
            <img src={require("./images/instagram.png")} alt="4" />
            <img src={require("./images/linkedin.png")} alt="5" />
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
                  <InteriorLink />
                  <IndustryLink />
            </th>
            <td style={{ width: '200px' }}></td>
            <td className="data1">
              <p className="data2">
                <b style={{ fontSize: '30px', color: 'rgba(209, 10, 10, 0.852)' }}>
                  Techinical Consultation <br />
                  & Digital Survey
                </b>
                <img src={require("./images/red_tech.jpg")} className="img2" alt="" />
              </p>
              <p>
                We are looking for all types of Digital Survey Work Type:
                <br />
                <div className="contain">
                  <ul>
                    <li>Road survey</li>
                    <li>All types of alignments</li>
                    <li>All types of setting out</li>
                    <li>Contour survey</li>
                  </ul>
                  <ul className="right-list">
                    <li>Building survey</li>
                    <li>Traverse survey</li>
                    <li>Topographic survey</li>
                  </ul>
                </div>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
  );
};

export default Techinical;