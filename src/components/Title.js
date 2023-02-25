import React from "react";

const Title = ({ children, className = "" }) => {
  return (
    <div className={`text-[36px] pb-[12px] font-semibold ${className}`}>
      {children}
    </div>
  );
};

export default Title;
