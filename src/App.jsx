import { useState } from "react";
import { Home } from "./components/Home";
import { Survey } from "./components/Survey";
import { Results } from "./components/Results";

export const App = () => {
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [userAnswers, setUserAnswers] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
  });

  const handleSurveySubmit = (event) => {
    event.preventDefault();
    setCurrentStep(-1); //Switch to results
  };

  // Function to clear answers and start over
  const resetSurvey = () => {
    setSurveyStarted(false);
    setCurrentStep(1);
    setUserAnswers({
      answer1: "",
      answer2: "",
      answer3: "",
    });
  };

  return (
    <>
      {!surveyStarted ? (
        <Home setSurveyStarted={setSurveyStarted} />
      ) : currentStep === -1 ? (
        <Results
          setSurveyStarted={setSurveyStarted}
          setCurrentStep={setCurrentStep}
          userAnswers={userAnswers}
          resetSurvey={resetSurvey} // Pass reset function to Results
        />
      ) : (
        <Survey
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          onSubmit={handleSurveySubmit}
        />
      )}
    </>
  );
};
