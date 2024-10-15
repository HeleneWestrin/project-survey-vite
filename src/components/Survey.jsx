import { ProgressIndicator } from "./ProgressIndicator";
import { Button } from "./ui/Button";

export const Survey = ({ currentStep, setCurrentStep, onSubmit }) => {
  const onHandleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <main className="full-width">
      {currentStep === 1 ? (
        <>
          <ProgressIndicator />
          <h1>Step 1</h1>
          <Button
            onClick={() => onHandleNext(currentStep, setCurrentStep)}
            text="Next question"
          />
        </>
      ) : currentStep === 2 ? (
        <>
          <ProgressIndicator />
          <h1>Step 2</h1>
          <Button
            onClick={() => onHandleNext(currentStep, setCurrentStep)}
            text="Next question"
          />
        </>
      ) : currentStep === 3 ? (
        <>
          <ProgressIndicator />
          <h1>Step 3</h1>
          <Button onClick={onSubmit} text="Submit" />
        </>
      ) : (
        <h1>Question not found!</h1>
      )}
    </main>
  );
};
