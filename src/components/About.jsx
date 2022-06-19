import cn from "classnames";
import PageContainer from "./common/PageContainer";

const Paragraph = ({ children }) => (
  <p
    className={cn(
      "font-sans",
      "text-base",
      "font-medium",
      "text-slate-400",
      "mb-6"
    )}
  >
    {children}
  </p>
);

const About = () => {
  return (
    <PageContainer
      id="about"
      className={cn("flex", "flex-col", "items-center")}
    >
      <div
        className={cn(
          "flex",
          "items-center",
          "justify-start",
          "w-full",
          "mb-10",
          "sm:px-12"
        )}
      >
        <h2
          className={cn(
            "text-2xl",
            "text-slate-400",
            "font-sans",
            "font-bold",
            "min-w-fit"
          )}
        >
          <span className={cn("text-brightred", "font-mono", "text-base")}>
            01.
          </span>{" "}
          About Me{" "}
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
      <div className="sm:flex">
        <div className={cn("sm:mr-8", "mb-8", "sm:mb-0", "sm:max-w-lg")}>
          <Paragraph>
            Hello! My name is Ivan and I enjoy creating things that live on the
            internet. My interest in web development started when I had to hack
            together a website for my Club in University. Since then, I have
            worked on various projects and have been learning new web technology
            every day.
          </Paragraph>
          <Paragraph>
            Here are a few technologies I’ve been working with recently:
          </Paragraph>
          <div className={cn("flex", "text-slate-400")}>
            <ul
              className={cn(
                "list-disc",
                "marker:text-brightred",
                "marker:content-['▹']",
                "marker:tracking-[0.5em]",
                "pl-6",
                "mr-10"
              )}
            >
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul
              className={cn(
                "list-disc",
                "pl-6",
                "marker:text-brightred",
                "marker:content-['▹']",
                "marker:tracking-[0.5em]"
              )}
            >
              <li>Typescript</li>
              <li>Python</li>
              <li>Golang</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <img
            src="/me.jpg"
            className="max-w-xs w-72 h-72 object-cover rounded-md"
          />
          <div
            className={cn(
              "absolute",
              "w-72",
              "h-72",
              "border-2",
              "border-brightred",
              "transition-transform",
              "translate-x-4",
              "translate-y-4",
              "-z-10",
              "rounded-md"
            )}
          ></div>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
