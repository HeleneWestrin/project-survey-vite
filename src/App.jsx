import { useState } from "react";
import { Home } from "./components/Home";
import { Survey } from "./components/Survey";
import { Results } from "./components/Results";

export const App = () => {
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleSurveySubmit = (answers) => {
    setUserAnswers(answers);
    setCurrentStep(-1); //Switch to results
  };

  return (
    <>
      {!surveyStarted ? (
        <Home setSurveyStarted={setSurveyStarted} />
      ) : currentStep === -1 ? (
        <Results
          setSurveyStarted={setSurveyStarted}
          setCurrentStep={setCurrentStep}
          answers={userAnswers}
        />
      ) : (
        <Survey
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          onSubmit={handleSurveySubmit}
        />
      )}
    </>
  );
};
