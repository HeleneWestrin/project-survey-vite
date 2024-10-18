import "./ProgressIndicator.css";
import Checkmark from "../assets/checkmark.svg?react";

export const ProgressIndicator = ({ currentStep }) => {
  // Function that determines which CSS class to apply to each circle based on current step
  const getCircleClass = (step) => {
    if (step < currentStep) return "completed";
    if (step === currentStep) return "active";
    return "";
  };

  const setAriaDisabled = (step) => {
    if (step < currentStep || step > currentStep) return "true";
    if (step === currentStep) return "false";
  };

  return (
    <div className="progress-indicator">
      {/* Map iterates over steps 1, 2, 3 and for each step, it calls getCircleClass(step) to determine appropriate class */}
      {[1, 2, 3].map((step) => (
        <div
          key={step}
          aria-disabled={setAriaDisabled(step)}
          className={`circle ${getCircleClass(step)}`}
        >
          {/* If step is less than current step, it displays a checkmark, otherwise it displays the step number */}
          <span>
            {step < currentStep ? (
              <>
                <p className="sr-only">Step {step} (completed)</p>
                <Checkmark />
              </>
            ) : (
              <>
                <p>
                  <span className="sr-only">Step</span> {step}
                </p>
              </>
            )}
          </span>
        </div>
      ))}
    </div>
  );
};
