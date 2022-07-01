import React from "react"
import cn from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import GitHubIcon from "../../assets/github.svg"
import LinkIcon from "../../assets/link.svg"
import PageContainer from "../common/PageContainer"

const ProjectCard = ({
  isEven,
  frontmatter: { title, description, githubUrl, liveUrl },
}) => {
  return (
    <div
      className={cn(
        "p-6 rounded-lg bg-brightred/10 w-full shadow-2xl shadow-black",
        "sm:bg-transparent sm:shadow-none sm:flex sm:flex-col sm:items-end"
      )}
    >
      <p className="font-mono text-xs font-normal my-3 text-brightred">
        Featured Project
      </p>
      <h2 className="text-slate-200 text-2xl tracking-wider font-sans font-semibold mb-3">
        {title}
      </h2>
      <p className="py-5 font-sans text-lg text-slate-400">{description}</p>

      <ul className="flex gap-2 text-slate-400 text-xs my-3">
        <li>tech1</li>
        <li>tech2</li>
        <li>tech3</li>
      </ul>

      <div className="mt-6 text-slate-400 flex">
        {githubUrl && (
          <a
            className="w-6 h-6 mr-4"
            href={githubUrl}
            rel="noopener noreferrer"
            aria-label="External Link"
            target="_blank"
          >
            <GitHubIcon className="w-6 h-6" />
          </a>
        )}
        {liveUrl && (
          <a
            className="w-6 h-6 mr-4"
            href={liveUrl}
            rel="noopener noreferrer"
            aria-label="External Link"
            target="_blank"
          >
            <LinkIcon className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  )
}

const Work = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query WorkComponentQuery {
      allMarkdownRemark(
        filter: { frontmatter: { featuredProject: { eq: true } } }
        sort: { order: DESC, fields: frontmatter___order }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              githubUrl
              liveUrl
            }
          }
        }
      }
    }
  `)

  return (
    <PageContainer id="work" className="mb-20">
      <h2
        className={cn("text-2xl", "text-slate-400", "font-sans", "font-bold")}
      >
        <span className={cn("text-brightred", "font-mono")}>03.</span> Some
        Things I've Built
      </h2>

      <div className="flex flex-col gap-6 my-5 w-full">
        {edges.map((node, index) => (
          <ProjectCard {...node.node} isEven={index % 2 == 0} />
        ))}
      </div>
    </PageContainer>
  )
}

export default Work
