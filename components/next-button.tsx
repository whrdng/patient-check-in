import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useState } from "react";
import doubleArrow from "../public/double_arrow.svg";
import { NextButtonProps } from "../types";

const NextButton = ({
  tailwind,
  setFormStep,
  isNextButtonActive,
  numForms,
  formStep,
  getValueFns,
  isValidMarkers,
}: NextButtonProps) => {
  const router = useRouter();

  const condition =
    formStep + 1 === numForms && !isValidMarkers.includes(false);

  const [isFinished, toggleFinish] = useState(condition);

  useEffect(() => {
    condition ? toggleFinish(true) : toggleFinish(false);
  }, [condition]);

  const buttonColor = isNextButtonActive ? "bg-blue-700" : "bg-gray-300";

  const onClick: MouseEventHandler = (e) => {
    setFormStep((step) => (step + 1 >= numForms ? step : step + 1));
    if (formStep + 1 === numForms && isFinished) {
      router.push("/completed");
    }
  };
  return (
    <button
      type="button"
      disabled={isNextButtonActive ? false : true}
      onClick={onClick}
      className={`flex shrink-0 justify-center items-center ${buttonColor} h-10 
      text-white rounded-full ml-auto px-6
      ${tailwind || ""}`}
    >
      {isFinished || formStep + 1 === numForms ? "Finish" : "Next"}
      <div className="ml-3">
        <Image src={doubleArrow} alt="Next double arrow" />
      </div>
    </button>
  );
};

export { NextButton };
