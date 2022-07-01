import React from "react"
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import Seo from "../components/common/seo"

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
    <>
      <Seo title={title} />
      <ReactMarkdown
        className="markdown m-10"
        remarkPlugins={[remarkGfm]}
        renderers={{ code: CodeBlock }}
      >
        {rawMarkdownBody}
      </ReactMarkdown>
    </>
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
