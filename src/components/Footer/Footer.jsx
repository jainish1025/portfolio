import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Jainish</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link ">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link ">Projects</a>
                </li>

                <li>
                      <a href="#contact" className="footer__link ">Contact Us</a>
                </li>
            </ul>

            <div className="footer__social">

                  <a href="https://www.instagram.com/_cute1025_/" className="footer__social-link" target="_blank" >
                      <i className="bx bxl-instagram"></i>
                  </a>

                  <a href="https://discord.com/channels/@me" className="footer__social-link" target="_blank" >
                      <i className="bx bxl-discord"></i>
                  </a>
                  <a href="https://twitter.com/RK99000209" className="footer__social-link" target="_blank" >
                      <i className="bx bxl-twitter"></i>
                  </a>

            </div>

            <span className="footer__copy">
             &#169; Cutetastic. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
