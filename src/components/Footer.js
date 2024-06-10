import React from 'react'
import '../styles/Footer_styles.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
          <img src={img1} alt='Maia' class="footer-image"></img>
          <img src={img2} alt='Lince' class="footer-image"></img>
        </div>
    </footer>
);
}

export default Footer
