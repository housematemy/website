import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "../../assets/images/logo.png"
import whiteLogo from "../../assets/images/white-logo.png"

import InstagramImg1 from "../../assets/images/team/team-img1.jpg"
import InstagramImg2 from "../../assets/images/team/team-img2.jpg"

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false")
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal)
  }

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false")
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal)
  }

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand">
                <img src={Logo} alt="logo" className="main-logo" />
                <img src={whiteLogo} alt="logo" className="white-logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      to="/home-server"
                      className="nav-link"
                    >
                      Home Server
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/integrations"
                      className="nav-link"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/get-started"
                      className="nav-link"
                    >
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>

            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"
          }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="flaticon-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right ${isActiveSidebarModal ? "" : "show"
          }`}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="bx bx-x"></i>
            </button>

            <div className="modal-body">
              <div className="logo">
                <Link to="/" className="d-inline-block">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>

              <div className="instagram-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="box">
                      <img src={InstagramImg1} alt="Instagram" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        to="#"
                        target="_blank"
                        rel="noreferrer"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="box">
                      <img src={InstagramImg2} alt="Instagram" />
                      <i className="bx bxl-instagram"></i>
                      <a
                        to="#"
                        target="_blank"
                        rel="noreferrer"
                        className="link-btn"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-contact-info">
                <h2>
                  <p>WHATSAPP / GIVE US A CALL AT</p>
                  <a to="tel:+601175257535">+6011 7525 7535</a>
                  <span>OR</span>
                  <a to="mailto:hello@housemate.my">hello@housemate.my</a>
                </h2>
              </div>

              <ul className="social-list">
                <li>
                  <span>Follow Us On:</span>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/housemate.my"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/housemate.my"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.threads.com/@housemate.my"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-threads"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/housematemy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  )
}

export default Navbar
