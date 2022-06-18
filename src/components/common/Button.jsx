import cn from "classnames";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "px-4",
        "py-2",
        "border",
        "border-brightred",
        "rounded-md",
        "text-brightred",
        "hover:bg-red-500/20",
        "transition-colors",
        "shadow-2xl",
        "hover:shadow-brightred/80",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
