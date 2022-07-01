import React from "react"
import cn from "classnames"
import Button from "../common/Button"
import PageContainer from "../common/PageContainer"

const Intro = () => {
  return (
    <PageContainer className="sm:h-[calc(100vh-122px)] h-[calc(100vh-96px)]">
      <h1 className={cn("text-brightred", "ml-1", "mb-2")}>Hi, my name is</h1>
      <h2
        className={cn(
          "text-slate-200",
          "font-sans",
          "font-bold",
          "text-4xl",
          "sm:text-6xl",
          "mb-2"
        )}
      >
        Ivan Ng.
      </h2>
      <h3
        className={cn(
          "text-slate-400",
          "font-sans",
          "font-bold",
          "text-4xl",
          "sm:text-6xl",
          "mb-8"
        )}
      >
        I build things for the web.
      </h3>
      <p
        className={cn(
          "font-sans",
          "text-sm",
          "sm:text-base",
          "font-medium",
          "text-slate-400",
          "leading-6",
          "sm:max-w-2xl",
          "tracking-widest"
        )}
      >
        I’m a software developer with a passion for building things that people
        love.
      </p>

      <Button className={cn("mt-4")} Component="a" href="/#about">
        Learn more
      </Button>
    </PageContainer>
  )
}

export default Intro
