import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

const WhatWeDo = () => {
  return (
    <>
      <div className="what-we-do-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="what-we-do-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <span className="sub-title">How do we help you?</span>
                <h2>Smart Home Systems and Products are Confusing</h2>
                <p>
                  There's a reason we're called Housemate. This is where our professional consultants will be your tech buddy to help you make better decisions in purchasing smart devices and appliances.
                </p>

                <div className="skills-item">
                  <div className="skills-header">
                    <h4 className="skills-title">Professional Services</h4>
                    {/*
                    <div className="skills-percentage">
                      <div className="count-box">85%</div>
  </div>*/}
                  </div>
                  <div className="skills-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width="85"></div>
                    </div>
                  </div>
                </div>

                <div className="skills-item">
                  <div className="skills-header">
                    <h4 className="skills-title">Products Procurement</h4>
                    {/*
                    <div className="skills-percentage">
                      <div className="count-box">15%</div>
  </div>*/}
                  </div>
                  <div className="skills-bar">
                    <div className="bar-inner">
                      <div className="bar progress-line" data-width="15"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="what-we-do-content-accordion"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
              <Accordion allowZeroExpanded preExpanded={["a"]}>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>Ensuring Compatibility</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      With so many different smart home products and systems available on the market, it can be difficult to ensure that they are all compatible with one another. A dedicated home server can help to create a seamless and interconnected smart home experience.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                
                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Network & Layout Optimization</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Setting up a smart home system can be a time-consuming process. From choosing the right products to ensuring they are properly integrated and configured, the process can be overwhelming for many home owners.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Total Value of Ownership</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        The cost, complexity and hassle of setting up a smart home often outweighs the benefits that it brings. We are here to change your mind.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
