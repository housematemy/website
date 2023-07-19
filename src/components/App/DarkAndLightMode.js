import React, { useState, useEffect } from "react"

const DarkAndLightMode = () => {
  // Light/Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("theme")
    if (storedPreference === "dark") {
      setIsDarkMode(true)
    }
  }, [])

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")

    // Update the class on the <html> element to apply the selected mode
    const htmlElement = document.querySelector("html")
    if (isDarkMode) {
      htmlElement.classList.add("dark")
    } else {
      htmlElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <>
      <div className="switch-box">
        <label id="switch" className="switch" title="Switch to Dark/Light">
          <input type="checkbox" onClick={handleToggle} id="slider" />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  )
}

export default DarkAndLightMode
