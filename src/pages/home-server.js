import React from "react"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from "../components/App/NavbarStyleTwo"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/App/Footer"
import StartProjectWithUs from "../components/Common/StartProjectWithUs"

import ServicesImg1 from "../assets/images/services/services-img1.png"
import ServicesImg2 from "../assets/images/services/services-img2.png"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const SingleServices = () => {
  return (
    <Layout>
      <SEO title="Home Server" />

      <NavbarStyleTwo />

      <PageBanner pageTitle="Home Server" />

      <div className="overview-area ptb-100">
        <div className="container">
          <div className="overview-box">
            <div className="overview-content">
              <div className="content">
                <span className="sub-title">What is a Home Server?</span>
                <h2>Do You Really Need A Home Server?</h2>
                <p>
                It is a centralized local system that interconnects all people, pets, appliances & services. This is essential in a modern home that values simplicity but requires an intelligent workhorse that is reliable, private & accesible at all times. 
                </p>
                <div className="features-text">
                  <h4>Connect Everything</h4>
                  <p>
                    The home server is the unifying glue that can interact with devices that speak different languages. By languages we mean different protocols such as Wi-Fi, Bluetooth, Zigbee, Thread, Matter and the likes.
                  </p>
                </div>
                <div className="features-text">
                  <h4>Fully Under Your Control</h4>
                  <p>
                     If your devices aren't functioning as they should, do you want to be reliant on the internet or the manufacturer to get the issues resolved? Your home should be under your control within your network.
                  </p>
                </div>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <img src={ServicesImg1} alt="Services" />
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="overview-image">
              <div className="image">
                <img src={ServicesImg2} alt="Services" />
              </div>
            </div>

            <div className="overview-content">
              <div className="content right-content">
                <Accordion className="accordion-list" allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Q: Why Housemate's Home Server?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        A: We are the only service in Malaysia that do not deploy a proprietary smart home solution. Instead we use an open standard solution that is deemed as one of the best Home Server system in the world. We love doing what we do, however if we go out of business, your home will be totally fine!
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Q: What is a home server?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        A: It is a computing device that is built using a typical server architecture pre-loaded with a home automation system.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Q: What if the server fails or breaks down?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        A: We will ensure that there is always a fallback method to control the devices should the server fail. Our consultants will take into account the criticality of a service governed by the home server.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Q: Can the server be hacked?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        A: The server is built on the same operating system that is powering millions of servers in the world. We do not open any ports in your network for your system to be accessed remotely. In fact, we use an encrypted tunnel to ensure the security of your connection to your home server when you're away.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>


                </Accordion>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">What are the benefits of a Home Server?</span>
            <h2>Core Features</h2>
            <p>
              The Home Server is the brain that controls everything around your home whether it's the  automations, touch panels or app controls.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i class='bx bx-palette'></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Brand Agnostic</h3>
                <p>
                  We do not care about the brands of devices that will be connected, but we do have brands that we love and can be integrated easily to the home server.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <i class='bx bx-border-outer'></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Localized</h3>
                <p>
                  As much as possible, we'd like your devices & appliances to be localized to ensure stability as well as to reduce dependency on the internet.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <i class='bx bxs-zap'></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Speed</h3>
                <p>
                  The server sits within your local network, therefore any command or trigger happens in your home and will not use your internet bandwidth.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <i class='bx bx-shield-quarter'></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Reliability</h3>
                <p>
                  What if your smart device that is managed by a cloud goes down or the manufacturers stop supporting that specific product? With localized integrations, you truly own your devices.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                <i class='bx bx-lock-open'></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Open Standards</h3>
                <p>
                  Whether it's the software or the hardware, we use open standards so you don't have to rely on us solely but we'd definitely love to continue being your housemate.
                </p>
              </div>
            </div>
{/*}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <i className="flaticon-reputation"></i>
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>Reputation Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
  </div>*/}
          </div>
        </div>
      </div>

      {/*<SEOAnalysisForm />

      <Pricing />*/}

      <StartProjectWithUs />

      <Footer />
    </Layout>
  )
}

export default SingleServices
