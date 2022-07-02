import cn from "classnames"
import React from "react"

const Title = ({ n, title, className }) => {
  return (
    <div
      className={cn(
        "flex",
        "items-center",
        "justify-start",
        "w-full",
        "mb-10",
        "sm:px-12",
        className
      )}
    >
      <h2
        className={cn(
          "text-2xl",
          "text-slate-300",
          "font-sans",
          "font-bold",
          "min-w-fit"
        )}
      >
        <span className={cn("text-brightred", "font-mono", "text-base")}>
          0{n}.
        </span>{" "}
        {title}{" "}
      </h2>
      <span
        className={cn(
          "border-b-[0.1px]",
          "border-slate-600",
          "h-[1px]",
          // "min-w-full",
          "grow",
          "sm:w-40",
          "ml-8"
        )}
      ></span>
    </div>
  )
}

export default Title
