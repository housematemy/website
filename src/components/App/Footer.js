import React from "react"
import { Link } from "gatsby"

import WhiteLogo from "../../assets/images/white-logo.png"
import Shape16 from "../../assets/images/shape/shape16.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-footer-widget">
                <Link to="/" className="logo">
                  <img src={WhiteLogo} alt="logo" />
                </Link>
                <p>
                Building connected homes that looks like the future, right now.
                </p>

                <ul className="social-link">
                <li>
                    <a
                      href="https://www.instagram.com/housemate.my/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/housemate.my/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.threads.net/@housemate.my"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/company/housematemy"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-footer-widget pl-5">
                <h3>Explore</h3>

                <ul className="footer-links-list">
                  <li>
                    <Link to="/get-started">Get Started</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-footer-widget pl-2">
                <h3>Resources</h3>

                <ul className="footer-links-list">
                <li>
                    <Link to="/home-server">Server</Link>
                  </li>
                  <li>
                    <Link to="/integrations/">Integrations</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-footer-widget">
                <h3>Get in touch</h3>

                <ul className="footer-contact-info">
                  <li>
                    <i className='bx bxl-whatsapp'></i>
                    <a href="https://wa.me/601175257535">+6011 7525 7535</a>
                  </li>
                  <li>
                    <i className="bx bx-envelope"></i>
                    <a href="mailto:hello@housemate.my">hello@housemate.my</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  <i className="bx bx-copyright"></i>
                  {currentYear} <strong>Housemate Automation Sdn. Bhd.</strong>
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-of-service">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="shape16">
          <img src={Shape16} alt="Shape" />
        </div>
      </footer>
    </>
  )
}

export default Footer
