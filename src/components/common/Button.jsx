const Button = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-[#00B4FD] to-[#003ACE] hover:bg-none hover:bg-white hover:text-[#003ACE]",
    secondary:
      "border border-[#E9F4F9] hover:border-white hover:bg-white hover:text-[#003ACE]",
  };

  return (
    <button
      className={`rounded-xl px-16 py-4 text-sm font-mono font-medium uppercase leading-[130%] tracking-wide cursor-pointer transition-all duration-500 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;