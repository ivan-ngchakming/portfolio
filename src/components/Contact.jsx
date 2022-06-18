import cn from "classnames";
import PageContainer from "./common/PageContainer";

const Contact = () => {
  return (
    <PageContainer id="working">
      <h2
        className={cn("text-2xl", "text-slate-400", "font-sans", "font-bold")}
      >
        <span className={cn("text-brightred", "font-mono")}>04.</span> What's
        Next
      </h2>
    </PageContainer>
  );
};

export default Contact;
