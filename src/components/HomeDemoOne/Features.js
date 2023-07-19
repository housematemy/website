import React from "react"
import { Link } from "gatsby"

const Features = () => {
  return (
    <>
      <div className="featured-services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">What's different about us?</span>
            <h2>Smart Home is Not New</h2>
            <p>
              The complexity in setting up these systems based on your preferences has been a great challenge until you found us.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                  <i class='bx bx-server'></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  No Internet Required
                </h3>

                <p>
                  Everything operates within your local network through a local server that will sit next to your router. 
                </p>

              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                <i class='bx bx-user'></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  Personalized Automations
                </h3>

                <p>
                Technology that adapts to your unique being and natural state of living with intelligent controls.
                </p>


              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-featured-services-box">
                <div className="icon">
                <i class='bx bx-devices' ></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>

                <h3>
                  A Single App
                </h3>

                <p>
                Brand agnostic, that simply means we will help you integrate smart products from any brands to our system.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
