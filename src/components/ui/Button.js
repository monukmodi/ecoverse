/**
 * Reusable Button component with different variants and sizes
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, outline)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 * @param {Object} props.rest - Additional props to spread
 */
const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-accent text-textDark hover:bg-accent/90 focus:ring-accent",
    outline:
      "border-2 border-primary text-primary hover:bg-primary/10 focus:ring-primary",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
