import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Seo from "../components/common/seo"
import removeComments from "remark-remove-comments"
import cn from "classnames"
import { renderDateRange } from "../utils"

export default function Template({ data }) {
  const { markdownRemark } = data
  const {
    rawMarkdownBody,
    frontmatter: { jobTitle, companyName, companyUrl, startDate, endDate },
  } = markdownRemark
  return (
    <div className="text-slate-400 m-10">
      <Seo title={`Experience - ${jobTitle} @ ${companyName}`} />
      <h1 className="font-sans text-slate-200 font-bold text-5xl mb-6">
        {jobTitle}{" "}
        <a href={companyUrl}>
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
              {companyName}
            </span>
          </span>
        </a>
      </h1>

      <h3 className={cn("font-mono", "text-slate-400")}>
        {renderDateRange(startDate, endDate)}
      </h3>

      <ReactMarkdown
        className="markdown"
        remarkPlugins={[remarkGfm, removeComments]}
      >
        {rawMarkdownBody}
      </ReactMarkdown>
    </div>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        jobTitle
        companyName
        companyUrl
        startDate
        endDate
      }
    }
  }
`
