import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import Seo from "../components/common/seo"
import removeComments from "remark-remove-comments"

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={materialDark}
      wrapLines={true}
      showLineNumbers
    >
      {value}
    </SyntaxHighlighter>
  )
}

export default function Template({ data }) {
  const { markdownRemark } = data
  const {
    rawMarkdownBody,
    frontmatter: { title },
  } = markdownRemark
  return (
    <div className="m-10">
      <Seo title={title} />
      <a className="pl-1 text-slate-400" href="/">
        {"<"} Home
      </a>
      <ReactMarkdown
        className="markdown"
        remarkPlugins={[remarkGfm, removeComments]}
        renderers={{ code: CodeBlock }}
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
        title
      }
    }
  }
`
