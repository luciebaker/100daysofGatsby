import React from "react"
import "./bootstrap.min.css"
import "../sass/layout.scss"
import Navbar from "../components/global/navbar"
import Footer from "../components/global/footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
