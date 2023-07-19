import React, { useState } from "react"
import ModalVideo from "react-modal-video"
import { Link } from "gatsby"

const MainBanner = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className="main-banner-area overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="main-banner-content">
                <span 
                  className="sub-title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Next-Gen Smart Home Automation
                </span>

                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >Experience the Magical World of Modern Living</h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  We help home owners integrate products and services into a
                  locally connected home server that can transform the way you live!
                </p>

                <div 
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="d-flex align-items-center">
                    <Link to="/get-started" className="default-btn">
                      Get Started
                    </Link>
                    {/* Watch video button
                    <div onClick={() => setOpen(true)} className="video-btn">
                      <i className="flaticon-play-button"></i> Watch Video
                    </div>*/} 
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="main-banner-image"
                data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="600"
              >
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default MainBanner
