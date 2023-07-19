import React from "react"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from "../components/App/NavbarStyleTwo"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/App/Footer"
import ContactForm from "../components/Contact/ContactForm"

const GetStarted = () => {
  return (
    <Layout>
      <SEO title="Get Started" />

      <NavbarStyleTwo />

      <PageBanner pageTitle="Get Started" />

      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-map"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-map"></i>
                </div>
                <h3>Our Address</h3>
                <p>We can teleport to your place</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <h3>Contact</h3>
                <p>
                  Mobile: <a href="tel:+601175257535">+6011 7525 7535</a>
                </p>
                <p>
                  E-mail: <a href="mailto:hello@housemate.my">hello@housemate.my</a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <h3>Hours of Operation</h3>
                <p>Monday - Friday: 09:00 - 18:00</p>
                <p>Saturday: 10:30 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />

      <Footer />
    </Layout>
  )
}

export default GetStarted
