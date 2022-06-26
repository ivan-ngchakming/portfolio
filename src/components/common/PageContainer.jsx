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
        "h-[calc(100vh-82px)]",
        "snap-always",
        "snap-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default PageContainer
