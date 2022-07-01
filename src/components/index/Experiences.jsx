import React, { useMemo, useState } from "react"
import cn from "classnames"
import PageContainer from "../common/PageContainer"
import Title from "../common/Title"
import { useStaticQuery, graphql } from "gatsby"
import { renderDateRange } from "../../utils"

const TabButton = ({ children, isActive, ...props }) => {
  return (
    <button
      className={cn(
        "py-2",
        "px-4",
        "min-w-[120px]",
        "transition-colors",
        "duration-300",
        "hover:bg-brightred/10",
        "hover:text-brightred",
        isActive ? "text-brightred" : "text-slate-400",
        isActive && "bg-brightred/10"
      )}
      {...props}
    >
      {children}
    </button>
  )
}

const Experiences = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query ExperiencesComponentQuery {
      allMarkdownRemark(
        filter: { frontmatter: { featuredExperience: { eq: true } } }
        sort: { order: DESC, fields: frontmatter___endDate }
      ) {
        edges {
          node {
            id
            frontmatter {
              companyName
              companyUrl
              description
              endDate
              featuredExperience
              jobTitle
              startDate
              templateKey
            }
          }
        }
      }
    }
  `)

  const [activeTab, setActiveTab] = useState(edges[0].node.id)

  const activeEntry = useMemo(
    () => edges.find(node => node.node.id === activeTab).node,
    [activeTab, edges]
  )

  const tabIndex = useMemo(() => {
    return edges.map(edge => edge.node.id).indexOf(activeTab)
  }, [activeTab, edges])

  return (
    <PageContainer
      id="experiences"
      className={cn("flex", "flex-col", "items-center", "mb-20")}
    >
      <Title n={2} title="Where I've Worked" />
      <div
        className={cn(
          "flex",
          "flex-col",
          "sm:flex-row",
          "items-center",
          "sm:items-start",
          "w-screen",
          "sm:w-[700px]",
          "sm:flex",
          "sm:min-h-[400px]"
        )}
      >
        <div
          className={cn(
            "flex",
            "overflow-auto",
            "w-[90vw]",
            "pb-1",
            "relative",
            "sm:overflow-visible",
            "sm:min-w-[140px]",
            "sm:max-w-[140px]",
            "sm:flex-col"
          )}
        >
          {edges.map(({ node }) => (
            <TabButton
              key={node.id}
              isActive={activeTab === node.id}
              onClick={() => setActiveTab(node.id)}
            >
              {node.frontmatter.companyName}
            </TabButton>
          ))}
          <div
            className={cn(
              "absolute",
              "border-b",
              "border-brightred",
              "w-[120px]",
              "top-10",
              "left-0",
              "transition-transform",
              "duration-300",
              "sm:hidden"
            )}
            style={{
              transform: `translateX(${tabIndex * 120}px)`,
            }}
          />
          <div
            className={cn(
              "absolute",
              "border-x-2",
              "border-brightred",
              "h-10",
              "transition-transform",
              "duration-300",
              "z-10",
              "hidden",
              "sm:block"
            )}
            style={{
              transform: `translateY(${tabIndex * 40}px)`,
            }}
          />
          <div
            className={cn(
              "absolute",
              "border-l",
              "border-slate-600",
              "h-[200px]",
              "hidden",
              "sm:block",
              "translate-x-[1px]"
            )}
          />
        </div>

        <div
          className={cn(
            "grow",
            "w-screen",
            "sm:w-auto",
            "mx-0",
            "px-8",
            "sm:ml-7",
            "mt-4",
            "sm:mt-0",
            "min-h-[350px]"
          )}
        >
          <h3
            className={cn(
              "font-sans",
              "text-slate-300",
              "font-bold",
              "text-xl"
            )}
          >
            {activeEntry.frontmatter.jobTitle}{" "}
            <a href={activeEntry.frontmatter.companyUrl}>
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
                  {activeEntry.frontmatter.companyName}
                </span>
              </span>
            </a>
          </h3>
          <h4 className={cn("font-mono", "text-slate-400")}>
            {renderDateRange(
              activeEntry.frontmatter.startDate,
              activeEntry.frontmatter.endDate
            )}
          </h4>
          <p
            className={cn("font-sans", "font-normal", "text-slate-400", "mt-4")}
          >
            {activeEntry.frontmatter.description}
          </p>
        </div>
      </div>
    </PageContainer>
  )
}

export default Experiences
