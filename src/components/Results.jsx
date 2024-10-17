import { Button } from "./ui/Button";

import resultsImage from "../assets/results.png";

export const Results = ({ setSurveyStarted, setCurrentStep, userAnswers, resetSurvey }) => {
  return (
    <main className="main-container">
      <img
        src={resultsImage}
        alt="Cartoon of a person sitting on top of a stack of oversized books and reading a book"
      />
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
          resetSurvey(); // Invoke resetSurvey function
        }}
        text="Start Over"
      />
    </main>
  );
};