import cn from "classnames";
import PageContainer from "./common/PageContainer";

const Experiences = () => {
  return (
    <PageContainer id="experiences">
      <h2
        className={cn("text-2xl", "text-slate-400", "font-sans", "font-bold")}
      >
        <span className={cn("text-brightred", "font-mono")}>02.</span> Where
        I've Worked
      </h2>
    </PageContainer>
  );
};

export default Experiences;
