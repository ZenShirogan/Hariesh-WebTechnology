import React, { useEffect } from 'react';
import './interior.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const Interior = () => {
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
  <b style={{ fontSize: '35px' }}><span style={{ color: 'rgba(209, 10, 10, 0.852)' }}>Our</span> Services</b>
  <table>
    <th className="column1">
      <Link to="/Archi"><img className="img1" src={require("./images/artitectural.png")} alt="" /></Link>
      <Link to="/Construction"><img className="img1" src={require("./images/construction.png")} alt="" /></Link>
      <Link to="/Techinical"><img className="img1" src={require("./images/techinical.png")} alt="" /></Link>
      <Link to="/Industry"><img className="img1" src={require("./images/industry.png")} alt="" /></Link>
    </th>
    <td style={{ width: '200px' }}></td>
    <td className="data1">
      <span>
        <b style={{ fontSize: '30px', color: 'rgba(209, 10, 10, 0.852)' }}>Architecture
          <img src={require("./images/red_interior.jpg")} style={{ width: '100px', height: '100px', float: 'right' }} alt="" />
        </b>      
        <br />
        <br />
        <p>Our skilled professionals utilize cutting-edge technologies and methodologies to deliver turnkey projects that meet both your budget and timeline requirements. With a strong focus on technical proficiency and construction.</p>
      </span>
    </td> 
  </table>
</div>

</div>
  );};

  export default Interior;
    

    

     
