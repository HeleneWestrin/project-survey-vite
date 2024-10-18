import { Button } from "./ui/Button";

import resultsImage from "../assets/results.png";

export const Results = ({
  setSurveyStarted,
  setCurrentStep,
  userAnswers,
  resetSurvey,
}) => {
  return (
    <main className="main-container">
      <img
        src={resultsImage}
        alt="Cartoon of a person sitting on top of a stack of oversized books and reading a book"
      />
      <h1>Your results</h1>
      <p>
        For you, <strong>{userAnswers.answer1.toLowerCase()}</strong> is a great
        way to feel happier, while{" "}
        <strong>{userAnswers.answer2.toLowerCase()}</strong> can also brighten
        your mood during the{" "}
        <strong>{userAnswers.answer3.toLowerCase()}</strong>.
      </p>
      <Button
        onClick={() => {
          setSurveyStarted(false);
          setCurrentStep(1);
          resetSurvey(); // Invoke resetSurvey function
        }}
        text="Start Over"
      />
    </main>
  );
};
