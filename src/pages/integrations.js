import React from "react"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from "../components/App/NavbarStyleTwo"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/App/Footer"
import { Link } from "gatsby"

import PortfolioImg1 from "../assets/images/integrations/integration-img1.png"
import PortfolioImg2 from "../assets/images/integrations/integration-img2.png"
import PortfolioImg3 from "../assets/images/integrations/integration-img3.png"
import PortfolioImg4 from "../assets/images/integrations/integration-img4.png"
import PortfolioImg5 from "../assets/images/integrations/integration-img5.png"
import PortfolioImg6 from "../assets/images/integrations/integration-img6.png"

const Integrations = () => {
  return (
    <Layout>
      <SEO title="Integrations" />

      <NavbarStyleTwo />

      <PageBanner pageTitle="Integrations" />

      <div className="services-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Communication is the key to successful relationships</span>
            <h2>What are Integrations?</h2>
            <p>
              It is an essential component that enables communication with the Home Server, and that makes it the backbone of a smart home.
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-portfolio-box">
                  <img src={PortfolioImg1} alt="Portfolio" />
                <div className="content">
                  <h3>
                    Ambient Lighting
                  </h3>
                  <span>e.g. LED, Lamps, Cove</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-portfolio-box">
                  <img src={PortfolioImg2} alt="Portfolio" />
                <div className="content">
                  <h3>
                    Shades & Covers
                  </h3>
                  <span>e.g. Curtains, Blinds, Gates</span>
               </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-portfolio-box">
                  <img src={PortfolioImg3} alt="Portfolio" />
                <div className="content">
                  <h3>
                    Voice Assistants
                  </h3>
                  <span>e.g. Google Assistant, Alexa, Siri</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-portfolio-box">
                  <img src={PortfolioImg4} alt="Portfolio" />
                <div className="content">
                  <h3>
                    Appliance Control
                  </h3>
                  <span>e.g. Switches, AC, Water Heater</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-portfolio-box">
                  <img src={PortfolioImg5} alt="Portfolio" />
                <div className="content">
                  <h3>
                    Wellbeing
                  </h3>
                  <span>e.g. Robot Vacuum, Humidifier, Air Purifier</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-portfolio-box">
                  <img src={PortfolioImg6} alt="Portfolio" />
                <div className="content">
                  <h3>
                    Home Monitoring
                  </h3>
                  <span>e.g. CCTV, Leakages, Smoke Detectors</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default Integrations
