import cn from "classnames"
import React from "react"

const Button = ({ children, className, Component = "button", ...props }) => {
  return (
    <Component
      className={cn(
        "px-4",
        "py-2",
        "border",
        "border-brightred",
        "rounded-md",
        "text-brightred",
        "hover:bg-red-500/20",
        "transition-colors",
        "shadow-2xl",
        "hover:shadow-brightred/80",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button
