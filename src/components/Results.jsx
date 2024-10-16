import { Button } from "./ui/Button";

export const Results = ({ setSurveyStarted, setCurrentStep, userAnswers }) => {
  return (
    <main className="main-container">
      <h1>Your results</h1>
      <p>
        You answered <strong>{userAnswers.answer1}</strong> and you say{" "}
        <strong>{userAnswers.answer2}</strong> to music, and would dance to{" "}
        <strong>{userAnswers.answer3}</strong>.
      </p>
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
