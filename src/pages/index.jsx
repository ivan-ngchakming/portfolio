import React from "react"
import cn from "classnames"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"
import Seo from "../components/common/seo"
import About from "../components/index/About"
import Contact from "../components/index/Contact"
import Experiences from "../components/index/Experiences"
import Intro from "../components/index/Intro"
import Work from "../components/index/Work"

const IndexPage = () => {
  return (
    <div className={cn("text-white", "font-mono", "relative", "w-full")}>
      <Seo />
      <Navbar />
      <div className={cn("sm:px-36", "px-8")}>
        <Intro />
        <About />
        <Experiences />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default IndexPage
