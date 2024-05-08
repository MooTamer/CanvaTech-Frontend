import React, { useState } from "react";
import { Check } from "lucide-react";
const Stepper = () => {
  const steps = ["Processing", "Order Confirmation", "Shipped", "On its way", "Delivered"];
  const [currentStep, setCurrentStep] = useState(3);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? (
                <Check size={20} strokeWidth={4} />
              ) : (
                i + 1
              )}
            </div>
            <p className="text-gray-500 default-text text-lg">{step}</p>
          </div>
        ))}
      </div>
      {/* {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )} */}
    </>
  );
};

export default Stepper;
