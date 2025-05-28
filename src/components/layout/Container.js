/**
 * Container component for consistent layout spacing and width constraints
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Container content
 * @param {Object} props.rest - Additional props to spread
 */
const Container = ({ className = "", children, ...rest }) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
