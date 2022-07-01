import React from "react"
import cn from "classnames"

const Footer = () => {
  return (
    <footer
      className={cn("p-4", "pb-8", "flex", "justify-center", "text-slate-400")}
    >
      <div>
        <a
          href="https://github.com/ivan-ngchakming/portfolio"
          rel="noopener noreferrer"
          target="_blank"
          className={cn("flex", "flex-col", "items-center", "justify-center")}
        >
          <div>Built by Ivan Ng</div>
          <div>@ {new Date().getFullYear()}</div>
        </a>
      </div>
    </footer>
  )
}

export default Footer
