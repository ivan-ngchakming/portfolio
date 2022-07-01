import React from "react"
import cn from "classnames"
import PageContainer from "../common/PageContainer"

const Contact = () => {
  return (
    <PageContainer id="contact" className="flex flex-col items-center">
      <h2 className={cn("text-brightred", "font-mono")}>04. What's Next</h2>

      <h2 className="font-sans text-4xl sm:text-6xl font-semibold text-slate-400">
        Get In Touch
      </h2>
      <p className="font-sans text-slate-400 text-center my-4">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
    </PageContainer>
  )
}

export default Contact
