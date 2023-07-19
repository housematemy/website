import React from "react"

const PageBanner = ({ pageTitle }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1>{pageTitle}</h1>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  )
}

export default PageBanner
