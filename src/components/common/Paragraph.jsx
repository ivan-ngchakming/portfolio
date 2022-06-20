import cn from "classnames";

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

export default Paragraph;
