import React from "react"
import cn from "classnames"
import PageContainer from "../common/PageContainer"
import Title from "../common/Title"
import Paragraph from "../common/Paragraph"
import MeImg from "../../images/me.jpg"

const About = () => {
  return (
    <PageContainer
      id="about"
      className={cn("flex", "flex-col", "items-center", "mb-40")}
    >
      <Title n={1} title="About Me" />
      <div className="sm:flex">
        <div className={cn("sm:mr-8", "mb-8", "sm:mb-0", "sm:max-w-lg")}>
          <Paragraph>
            Hello! My name is Ivan and I enjoy creating things that live on the
            internet. My interest in web development started when I had to hack
            together a website for my Club in University. Since then, I have
            worked on various projects and have been learning new web technology
            every day.
          </Paragraph>
          <Paragraph>
            Here are a few technologies I’ve been working with recently:
          </Paragraph>
          <div className={cn("flex", "text-slate-400")}>
            <ul
              className={cn(
                "list-disc",
                "marker:text-brightred",
                "marker:content-['▹']",
                "marker:tracking-[0.5em]",
                "pl-6",
                "mr-10"
              )}
            >
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul
              className={cn(
                "list-disc",
                "pl-6",
                "marker:text-brightred",
                "marker:content-['▹']",
                "marker:tracking-[0.5em]"
              )}
            >
              <li>Typescript</li>
              <li>Python</li>
              <li>Golang</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <img
            src={MeImg}
            alt="my face"
            className="max-w-xs w-72 h-72 object-cover rounded-md"
          />
          <div
            className={cn(
              "absolute",
              "w-72",
              "h-72",
              "border-2",
              "border-brightred",
              "transition-transform",
              "translate-x-4",
              "translate-y-4",
              "-z-10",
              "rounded-md"
            )}
          ></div>
        </div>
      </div>
    </PageContainer>
  )
}

export default About
