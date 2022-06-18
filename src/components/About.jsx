import cn from "classnames";
import PageContainer from "./common/PageContainer";

const About = () => {
  return (
    <PageContainer id="about" className={cn("flex", "flex-col")}>
      <div className={cn("flex", "items-center", "mb-10")}>
        <h2
          className={cn("text-2xl", "text-slate-400", "font-sans", "font-bold")}
        >
          <span className={cn("text-brightred", "font-mono")}>01.</span> About
          Me{" "}
        </h2>
        <span
          className={cn(
            "border-b-[0.1px]",
            "border-slate-600",
            "h-[1px]",
            "w-40",
            "ml-8"
          )}
        ></span>
      </div>
      <div>
        <p>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <p>
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
      </div>
    </PageContainer>
  );
};

export default About;
