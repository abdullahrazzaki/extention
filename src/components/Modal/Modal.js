import React, { useCallback, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Modal = () => {
  const [state, setState] = useState({ step: 1 });
  const onNext = useCallback(() => {
    setState((st) => ({ ...st, step: st.step + 1 }));
  }, []);
  return (
    <div
      tabindex="-1"
      class="fixed top-0 left-0 right-0 z-50 w-screen p-4 min-h-screen overflow-x-auto overflow-y-auto md:inset-0 h-modal md:min-h-screen flex items-center justify-center"
    >
      <div class="  relative w-full h-auto max-w-[650px] md:h-auto max-h-[85vh] overflow-auto">
        <div class="rounded-[20px] shadow-[0px_16px_60px_rgba(0,0,0,0.1)] relative bg-white py-[42px] px-[40px]">
          <button type="button" class="absolute top-[47px] right-[40px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9999 16.9999L3 3"
                stroke="#262626"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 3L3 17"
                stroke="#262626"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div className="pb-[40px] text-[26px] text-[#262626] font-medium">
            Extention
          </div>
          {state.step === 1 && <Step1 onNext={onNext} />}
          {state.step === 2 && <Step2 onNext={onNext} />}
          {state.step === 3 && <Step3 />}
        </div>
      </div>
    </div>
  );
};
export default Modal;
