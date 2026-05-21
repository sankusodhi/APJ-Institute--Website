import React from "react";
import logoSvg from "../assets/logo/large.png";

const Logo = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
    full: "w-32 h-32",
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img
        src={logoSvg}
        alt="APJ Institute Logo"
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

export default Logo;
