import React from "react";
import Image from "../../assets/Image";
import Button from "../Button";
import Title from "../Title";

const Step1 = ({ onNext }) => {
  return (
    <div className="pt-[40px] px-[40px] pb-[42px]">
      {" "}
      <Title>Welcome to Extention</Title>
      <div className="text-center text-[16px] mb-[12px]">
        Make your CRM work everywhere
      </div>
      <Image className="py-[32px] mx-auto max-w-full w-full md:px-[60px]" />
      <Button onClick={onNext}>Get started!</Button>
      <div class="mt-[30px]">
        <p class="font-normal text-[16px] text-center  text-[#898989]">
          By continuing, you agree to Extention{" "}
          <span className="text-[#00B2BD] underline">Terms of Use</span> and{" "}
          <span className="text-[#00B2BD] underline">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};
export default Step1;
