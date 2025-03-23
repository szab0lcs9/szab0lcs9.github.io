export const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg text-lg font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};