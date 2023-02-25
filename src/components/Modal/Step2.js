import React, { useState } from "react";
import {
  CopperIcon,
  HubspotIcon,
  PipeDriveIcon,
  SalesforceIcon,
  YoutubeIcon,
} from "../../assets/Logos";
import Title from "../Title";

const Arrow = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 8.333h12M10.666 5 14 8.333l-3.334 3.334"
      stroke="#00B2BD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CaretIcon = (props) => {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 10 8 6l-4 4"
        stroke="#00B2BD"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const FAQs = [
  {
    question: "What does Extention do with my CRM data?",
    answer:
      "Your CRM data and LinkedIn activity are confidential. Surfe does not store any of your business data, we merely pass them through between LinkedIn and your CRM.",
  },
  {
    question: "Do I need special permissions?",
    answer:
      "Your CRM data and LinkedIn activity are confidential. Surfe does not store any of your business data, we merely pass them through between LinkedIn and your CRM.",
  },
  {
    question: "I get an error, how can I get help?",
    answer:
      "Your CRM data and LinkedIn activity are confidential. Surfe does not store any of your business data, we merely pass them through between LinkedIn and your CRM.",
  },
];
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="mt-[50px] mx-[-40px] mb-[-42px] bg-[#EEEEEE] p-[40px] pt-[35px] rounded-bl-[20px] rounded-br-[20px] grid grid-rows-[repeat(3,auto)] gap-y-[20px]">
      {FAQs.map((faq, idx) => {
        const open = openIndex === idx;
        return (
          <div
            onClick={() => {
              setOpenIndex((index) => (index === idx ? -1 : idx));
            }}
            className="cursor-pointer"
          >
            <div className="flex justify-between items-center mb-[20px]">
              <div className="text-[16px] font-medium">{faq.question}</div>
              <CaretIcon className={open ? "rotate-180" : ""} />
            </div>
            {open && (
              <div className="text-[16px] text-[#898989] text-left">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const CRMs = [
  {
    logo: HubspotIcon,
    label: "Hubspot",
  },
  {
    logo: SalesforceIcon,
    label: "Salesforce",
  },
  {
    logo: PipeDriveIcon,
    label: "Pipedrive",
  },
  {
    logo: CopperIcon,
    label: "Copper",
  },
];
const Step2 = ({ onNext }) => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[19px]">
        {CRMs.map(({ logo: Logo, label }) => (
          <div className="group flex h-[150px] justify-between flex-col items-center rounded-[12px] pt-[20px] pb-[18px] hover:shadow-[0px_6px_34px_rgba(0,0,0,0.12)]">
            <div className="flex-1">
              <Logo />
            </div>
            <div className="text-[16px] group-hover:text-[#00B2BD]">
              {label}
            </div>
          </div>
        ))}
      </div>
      <Title className="pt-[40px] pb-[30px] ">Pick your favorite CRM</Title>
      <div
        onClick={onNext}
        className="cursor-pointer mx-auto gap-[15px] max-w-[300px] w-full rounded-[12px] font-medium text-[16px] text-[#00B2BD] border border-[#00B2BD] flex items-center min-h-[50px] text-center justify-center px-[15px]"
      >
        <span>
          <YoutubeIcon />
        </span>
        <div className="flex items-center justify-between flex-1">
          <span>Watch Extention in action</span>
          <Arrow />
        </div>
      </div>
      <Accordion />
    </>
  );
};
export default Step2;
