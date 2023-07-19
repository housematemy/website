import React from "react"
import { Link } from "gatsby"

import TeamImg1 from "../../assets/images/team/team-img1.jpg"
import TeamImg2 from "../../assets/images/team/team-img2.jpg"

const OurTeamStyleOne = () => {
  return (
    <>
      <div className="team-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-team-box">
                <img src={TeamImg1} alt="team-image" />

                <div className="content">
                  <h3>Andrew Raj</h3>
                  <span>Consultant</span>
                </div>

                <ul className="social-link">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
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
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-team-box">
                <img src={TeamImg2} alt="team-image" />

                <div className="content">
                  <h3>Teo Zhi Qin</h3>
                  <span>Chief Community Manager</span>
                </div>

                <ul className="social-link">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="d-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
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

            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="section-title">
                <span className="sub-title">The Housemates</span>
                <h2>Meet the Team</h2>

                <Link to="/get-started" className="learn-more-btn">
                  <i className="left-icon flaticon-next-button"></i>
                  Contact us <i className="right-icon flaticon-next-button"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeamStyleOne
