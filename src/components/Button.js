import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`  leading-[24px] cursor-pointer bg-[#00B2BD] py-[18px] text-center min-h-[60px] rounded-[12px] text-white font-medium text-[20px] ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Button;
