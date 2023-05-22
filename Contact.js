import React, { useState,useEffect } from 'react';
import './contact.css';
import Navbar from './Navbar';
import axios from 'axios';



const Contact = () => {
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


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the form data to the server
      const response = await axios.post('/api/contact', formData);
      console.log(response.data);

      // Reset the form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }

    setIsSubmitting(false);
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
            <h2 className="text-center">
                <b> <span style={{ color: 'red' }}>Contact</span> Us</b>
            </h2>
            <div className="row">
                <div className="col-md-6 order-md-2 contact-container">
                              <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message">Message:</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                </div>
                <div className="col-md-6 order-md-1">
                <div style={{ textAlign: 'left' }}>
                    <div className="contact-details">
                    <img src={require("./images/contact_us_phone.jpg")} alt="" /><h5>+91 730 506 5008</h5>
                    </div>
                    <br />
                    <div className="contact-details">
                    <img src={require("./images/contact_us_mail.jpg")} alt="" /><h5>care@jbrosinfras.com </h5>
                    </div>
                    <br />
                    <div className="corner-img1" style={{ width: '400px', height: '200px', textAlign: 'left' }}>
                    <img src={require("./images/qr.jpg")} alt="" /> <p> GET IN TOUCH <br />JBROS INFRAS <br />S.F.No 377/1D, 377/1C2C,<br /> Kunnathur village,Annur taluk,<br />Kunnathurpudhur, Coimbatore, Tamil Nadu, 641107</p>
                    </div>
                    <div className="corner-img">
                    <img src={require("./images/facebook.png")} style={{ width: '25px', height: '30px' }} alt="Image 1" />
                    <img src={require("./images/twitter.png")} style={{ width: '40px', height: '30px' }} alt="Image 2" />
                    <img src={require("./images/whatsapp.png")} style={{ width: '25px', height: '30px' }} alt="Image 3" />
                    <img src={require("./images/instagram.png")} style={{ width: '25px', height: '30px' }} alt="Image 4" />
                    <img src={require("./images/linkedin.png")} style={{ width: '25px', height: '30px' }} alt="Image 5" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div> 
);
};
export default Contact;