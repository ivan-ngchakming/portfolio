import React from "react"
import cn from "classnames"
import PageContainer from "../common/PageContainer"
import Button from "../common/Button"

const Contact = () => {
  return (
    <PageContainer
      id="contact"
      className="flex flex-col items-center my-20 sm:mb-40"
    >
      <h2 className={cn("text-brightred", "font-mono")}>04. What's Next</h2>

      <h2 className="font-sans text-4xl sm:text-6xl font-semibold text-slate-400">
        Get In Touch
      </h2>
      <p className="font-sans text-slate-400 text-center my-20 text-base max-w-3xl">
        I am currently looking for my next opportunity. Whether you have a
        question or just want to say hi, I’ll get back to you as soon as I can!
      </p>
      <Button
        className="px-6 py-4"
        Component="a"
        href="mailto:ivan.ng.chak.ming@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </Button>
    </PageContainer>
  )
}

export default Contact
