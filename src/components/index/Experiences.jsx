import React, { useState } from "react"
import cn from "classnames"
import PageContainer from "../common/PageContainer"
import Title from "../common/Title"

const TabButton = ({ children, isActive, ...props }) => {
  return (
    <button
      className={cn(
        "py-2",
        "px-4",
        "min-w-[120px]",
        "transition-colors",
        "duration-300",
        "hover:bg-brightred/10",
        "hover:text-brightred",
        isActive ? "text-brightred" : "text-slate-400",
        isActive && "bg-brightred/10"
      )}
      {...props}
    >
      {children}
    </button>
  )
}

const Experiences = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <PageContainer
      id="about"
      className={cn("flex", "flex-col", "items-center")}
    >
      <Title n={2} title="Where I've Worked" />
      <div className={cn("w-full", "sm:flex")}>
        <div
          className={cn(
            "flex",
            "overflow-auto",
            "sm:overflow-visible",
            "w-full",
            "sm:w-[140px]",
            "pb-1",
            "relative",
            "sm:flex-col"
          )}
        >
          <TabButton isActive={activeTab === 0} onClick={() => setActiveTab(0)}>
            Oursky
          </TabButton>
          <TabButton isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
            Bowtie
          </TabButton>
          <TabButton isActive={activeTab === 2} onClick={() => setActiveTab(2)}>
            Grahpen
          </TabButton>
          <TabButton isActive={activeTab === 3} onClick={() => setActiveTab(3)}>
            Prudential
          </TabButton>
          <TabButton isActive={activeTab === 4} onClick={() => setActiveTab(4)}>
            SunLife
          </TabButton>
          <div
            className={cn(
              "absolute",
              "border-b",
              "border-brightred",
              "w-[120px]",
              "top-10",
              "left-0",
              "transition-transform",
              "duration-300",
              "sm:hidden"
            )}
            style={{ transform: `translateX(${activeTab * 120}px)` }}
          />
          <div
            className={cn(
              "absolute",
              "border-x-2",
              "border-brightred",
              "h-10",
              "transition-transform",
              "duration-300",
              "z-10",
              "hidden",
              "sm:block"
            )}
            style={{
              transform: `translateY(${activeTab * 40}px)`,
            }}
          />
          <div
            className={cn(
              "absolute",
              "border-l",
              "border-slate-600",
              "h-[200px]",
              "hidden",
              "sm:block",
              "translate-x-[1px]"
            )}
          />
        </div>
        <div className={cn("grow", "sm:ml-7", "mt-4", "sm:mt-0")}>
          <h3
            className={cn(
              "font-sans",
              "text-slate-300",
              "font-bold",
              "text-xl"
            )}
          >
            Software Engineer{" "}
            <a href="/#">
              <span className={cn("text-brightred")}>
                @
                <span
                  className={cn(
                    "after:bg-brightred",
                    "relative",
                    "after:transition-[width]",
                    "after:duration-300",
                    "hover:after:w-full",
                    "after:w-0",
                    "after:h-[1px]",
                    "after:absolute",
                    "after:left-0",
                    "after:bottom-0"
                  )}
                >
                  Oursky
                </span>
              </span>
            </a>
          </h3>
          <h4 className={cn("font-mono", "text-slate-400")}>
            June - September 2022
          </h4>
        </div>
      </div>
    </PageContainer>
  )
}

export default Experiences