import { Link } from "react-router";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  to?: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button = ({
  children,
  color = "primary",
  size = "medium",
  to = "",
  onClick,
}: ButtonProps) => {
  const colorClasses = {
    primary:
      "border-primary bg-primary text-white hover:bg-transparent hover:text-primary",
    secondary:
      "border-secondary bg-secondary text-white hover:bg-transparent hover:text-secondary",
    tertiary:
      "border-tertiary  bg-tertiary text-white hover:bg-transparent hover:text-tertiary",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-3 text-sm",
    large: "px-12 py-4 text-base",
  };

  const buttonClasses = `${"group flex rounded border font-medium gap-2 cursor-pointer items-center justify-center"} ${
    colorClasses[color]
  } ${sizeClasses[size]} `;

  return to ? (
    <Link to={to} className={buttonClasses}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
