import { Button } from "./ui/Button";

export const Results = ({ setSurveyStarted, setCurrentStep }) => {
  return (
    <main>
      <h1>I am the Result!</h1>
      <Button
        onClick={() => {
          setSurveyStarted(false);
          setCurrentStep(1);
        }}
        text="Start Over"
      />
    </main>
  );
};
