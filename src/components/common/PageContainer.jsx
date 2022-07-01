import cn from "classnames"
import React from "react"

const PageContainer = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "flex",
        "flex-col",
        "justify-center",
        "items-start",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default PageContainer
