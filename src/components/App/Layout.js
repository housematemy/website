import React from "react"
import AOS from "aos"
import GoTop from "./GoTop"
import DarkAndLightMode from "./DarkAndLightMode"

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init()
  }, [])
  
  return (
    <>
      {children}

      <GoTop />
    
      <DarkAndLightMode />
    </>
  )
}
export default Layout
