import React from "react"
import cn from "classnames"
import { graphql, useStaticQuery } from "gatsby"
import GitHubIcon from "../../assets/github.svg"
import LinkIcon from "../../assets/link.svg"
import PageContainer from "../common/PageContainer"
import ReactMarkdown from "react-markdown"

const ProjectCard = ({
  isEven,
  frontmatter: { title, description, githubUrl, liveUrl, techs, featuredImage },
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "p-6 rounded-lg bg-brightred/5 w-full shadow-2xl shadow-black",
        "sm:bg-transparent sm:shadow-none sm:flex sm:flex-col",
        isEven && "sm:items-end"
      )}
    >
      <p className="font-mono text-xs font-normal my-3 text-brightred">
        Featured Project
      </p>

      <a href={liveUrl ?? githubUrl}>
        <h2 className="text-slate-200 text-2xl tracking-wider font-sans font-semibold mb-3 hover:text-brightred transition-colors">
          {title}
        </h2>
      </a>

      <div className="sm:bg-slate-900 sm:w-2/3 sm:rounded-md">
        <p
          className={cn(
            "py-5 font-sans text-base text-slate-400 transition-shadow",
            "sm:px-4 sm:bg-brightred/10",
            "sm:shadow-black/30 hover:shadow-black/80 sm:shadow-2xl",
            isEven && "sm:text-right"
          )}
        >
          <ReactMarkdown className="markdown">{description}</ReactMarkdown>
        </p>
      </div>

      <ul className="flex gap-2 flex-wrap text-slate-400 text-xs my-3">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="mt-6 text-slate-400 flex">
        {githubUrl && (
          <a
            className="w-6 h-6 mr-4 hover:text-brightred transition-colors"
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
            className="w-6 h-6 mr-4 hover:text-brightred transition-colors"
            href={liveUrl}
            rel="noopener noreferrer"
            aria-label="External Link"
            target="_blank"
          >
            <LinkIcon className="w-6 h-6" />
          </a>
        )}
      </div>
      <div
        className={cn(
          "absolute top-0 -z-10 opacity-20 sm:opacity-70",
          "sm:bg-brightred",
          "sm:w-1/2 sm:h-2/3 sm:-translate-y-1/2 sm:top-1/2",
          "sm:rounded-md overflow-clip",
          !isEven ? "right-0" : "left-0"
        )}
      >
        <img className={cn("object-fill")} src={featuredImage.publicURL} />
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
              techs
              featuredImage {
                publicURL
              }
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
          <ProjectCard
            key={node.node.id}
            {...node.node}
            isEven={index % 2 == 0}
          />
        ))}
      </div>
    </PageContainer>
  )
}

export default Work
