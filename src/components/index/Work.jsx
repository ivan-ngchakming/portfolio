import React from "react"
import cn from "classnames"
import PageContainer from "../common/PageContainer"

const Work = () => {
  return (
    <PageContainer id="work">
      <h2
        className={cn("text-2xl", "text-slate-400", "font-sans", "font-bold")}
      >
        <span className={cn("text-brightred", "font-mono")}>03.</span> Some
        Things I've Built
      </h2>
    </PageContainer>
  )
}

export default Work
