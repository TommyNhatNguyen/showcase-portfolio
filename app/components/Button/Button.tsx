import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "link" | "icon" | "talk" | "hamburger" | "arrow";
  size?: "lg" | "md" | "default";
  className?: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  black?: boolean;
  isAnimated?: boolean;
  isRounded?: boolean;
  as?: "button" | "a" | "div";
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "default",
  className = "",
  icon: Icon,
  iconPosition = "right",
  black = false,
  isAnimated = true,
  isRounded = true,
  ...props
}) => {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "--btn-primary",
    link: "--btn-link",
    icon: "--btn-icon",
    talk: "btn-talk",
    hamburger: "btn-hamburger",
    arrow: "btn-arrow",
  };
  const sizeClasses = {
    lg: "--lg",
    md: "--md",
    default: "",
  };

  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    black ? "--black" : "",
    className,
    isRounded ? "--rounded" : "",
  ].join(" ");

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <div className="btn__icon">
          <Icon />
        </div>
      )}
      {children && <span className="btn__text">{children}</span>}
      {Icon && iconPosition === "right" && (
        <div className="btn__icon">
          <Icon />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {isAnimated ? (
          <>
            <div className="content-top">{content}</div>
            <div className="content-bottom">{content}</div>
          </>
        ) : (
          content
        )}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} onClick={onClick} {...props}>
      {isAnimated ? (
        <>
          <div className="content-top">{content}</div>
          <div className="content-bottom">{content}</div>
        </>
      ) : (
        content
      )}
    </button>
  );
};

export default Button;
