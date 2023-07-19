import React from "react"
import { Link } from "gatsby"

import ProjectStartImg from "../../assets/images/project-start1.png"

const StartProjectWithUs = () => {
  return (
    <>
      <div className="project-start-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="project-start-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src={ProjectStartImg} alt="Project" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="project-start-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <span className="sub-title">Get Started</span>
                <h2>Take your first step</h2>
                <p>
                  We'd love to work with you and show you a whole new experience
                </p>

                <Link to="/contact" className="default-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </>
  )
}

export default StartProjectWithUs
