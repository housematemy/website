import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import User1 from "../../assets/images/user1.jpg"
import User2 from "../../assets/images/user2.jpg"
import User3 from "../../assets/images/user3.jpg"
import TestimonialsImg from "../../assets/images/testimonials-img.jpg"

const TestimonialStyleOne = () => {
  return (
    <>
      <div className="testimonials-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="testimonials-content">
                <span className="sub-title">Testimonials</span>
                <h2>What Are Our Clients Saying About Us?</h2>

                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 6500,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="testimonials-slides"
                >
                  <SwiperSlide>
                    <div className="single-testimonials-item">
                      <p>
                       The home server is easy to use and has made my life so much more convenient. I can control everything from my phone, whether I’m at home or away. I highly recommend Housemate’s smart home service to anyone looking for an easy and reliable way to manage their home.
                      </p>

                      <div className="client-info">
                        <div className="d-flex align-items-center">
                          <img src={User1} alt="User" />
                          <div className="title">
                            <h3>Maisarah</h3>
                            <span>Home Owner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-testimonials-item">
                      <p>
                      I was hesitant to work with Housemate’s smart home service at first, but I’m so glad I did. The home server is incredibly powerful and it's able to suit all our client's requirements. Andrew is always available to help and quick to respond to any questions or concerns.
                      </p>

                      <div className="client-info">
                        <div className="d-flex align-items-center">
                          <img src={User2} alt="User" />
                          <div className="title">
                            <h3>Aaron</h3>
                            <span>Designer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="single-testimonials-item">
                      <p>
                      I’ve been using the smart home service for a few months now and it’s been great. I love being able to control all of my smart home devices from one central location and set up custom automations.
                      </p>

                      <div className="client-info">
                        <div className="d-flex align-items-center">
                          <img src={User3} alt="User" />
                          <div className="title">
                            <h3>Arifin</h3>
                            <span>Contractor</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="testimonials-image">
                <img src={TestimonialsImg} alt="Testimonials" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialStyleOne
