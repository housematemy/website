import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "../../assets/images/white-logo.png"
import BlackLogo from "../../assets/images/logo.png"

import InstagramImg1 from "../../assets/images/team/team-img1.jpg"
import InstagramImg2 from "../../assets/images/team/team-img2.jpg"

const NavbarStyleTwo = () => {
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
      <div id="navbar" className="navbar-area navbar-color-white">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link to="/" className="navbar-brand">
                <img src={Logo} alt="logo" />
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
                  <img src={BlackLogo} alt="Logo" />
                </Link>
              </div>

              <div className="instagram-list">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
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

                  <div className="col-lg-4 col-md-4 col-sm-4 col-6">
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
                  <a to="tel:+11234567890">+60 (11) 7525 7535</a>
                  <span>OR</span>
                  <a to="mailto:hello@mibix.com">hello@housemate.my</a>
                </h2>
              </div>

              <ul className="social-list">
                <li>
                  <span>Follow Us On:</span>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitch.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitch"></i>
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

export default NavbarStyleTwo
