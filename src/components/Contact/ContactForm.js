import React from "react"

import ContactImg from "../../assets/images/contact.png"

const ContactForm = () => {
  return (
    <>
      <div className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Get in Touch</span>
            <h2>
              Ready to Get Started? <span className="overlay"></span>
            </h2>
            <p>
              We are more than happy to answer any questions you may have.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-image">
                <img src={ContactImg} alt="Contact" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                {/* Update your getform API key here */}
                <form name="getStartedForm" method="POST" data-netlify="true"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="Your Email Address"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="number"
                          placeholder="Your Phone Number"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Your Subject"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="text"
                          cols="30"
                          rows="5"
                          placeholder="Write your message..."
                          className="form-control"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                      <button type="submit" className="default-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
