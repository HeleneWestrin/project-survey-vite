import { useState, useEffect, useRef } from "react";
import { SurveyHero } from "./SurveyHero";
import { RadioButtonGroup } from "./ui/RadioButtonGroup";
import { Button } from "./ui/Button";
import "./Survey.css";

// The Survey component receives several props that control the current step of the survey, user answers, and form submission
export const Survey = ({
  currentStep, // Tracks which step (or question) the user is currently on
  setCurrentStep, // Function to update the current step
  userAnswers, // Object holding the user's answers to the questions
  setUserAnswers, // Function to update the user's answers
  onSubmit, // Callback function for handling form submission on the last step
}) => {
  // State to track error messages
  const [errorMessage, setErrorMessage] = useState("");

  // Ref for the SurveyHero title (h1)
  const heroTitleRef = useRef(null);

  useEffect(() => {
    // When the current step changes, focus on the title element
    if (heroTitleRef.current) {
      setTimeout(() => {
        heroTitleRef.current.focus();
      }, 150);
    }
  }, [currentStep]);

  // This function updates the user's answers when they interact with an input field (text, checkbox, radio, etc.)
  const updateUserAnswers = (event) => {
    const { name, value, type, checked } = event.target; // Extracting useful info from the event (which input changed)
    setUserAnswers((previous) => ({
      ...previous, // Spread operator to retain previous answers while updating the new answer
      [name]: type === "checkbox" ? checked : value, // For checkboxes, use 'checked' instead of 'value'
    }));
    setErrorMessage(""); // Clear error message when user interacts with form
  };

  // This function advances the user to the next question (increments currentStep by 1)
  const onHandleNext = () => {
    // If the question is not answered, do not proceed to the next step
    if (!areAllFieldsValid()) return;
    // Set the next step by increasing the current step by 1
    setCurrentStep(currentStep + 1);
  };

  // Check if the userAnswer object has empty values
  const areAllFieldsValid = () => {
    const requiredFields = Object.keys(userAnswers).filter((key) =>
      key.startsWith(`answer${currentStep}`)
    );
    return requiredFields.every(
      (key) => userAnswers[key] && userAnswers[key].trim() !== ""
    );
  };

  // Function that updates errorMessage state when user tries to click disabled button
  const handleDisabledClick = () => {
    setErrorMessage("Please answer the question before proceeding.");
  };

  const updateUserAnswersDirect = (name, value) => {
    setUserAnswers((previous) => ({
      ...previous,
      [name]: value,
    }));
    setErrorMessage(""); // Clear error message when user interacts with form
  };

  const handleKeyDown = (e, name, value) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault(); // Prevents default behavior
      updateUserAnswersDirect(name, value.toLowerCase()); // Set the selected radio
    }
  };

  // Options to pass into the RadioButtonGroup component
  const stepTwoOptions = [
    "Listening to music",
    "Spending time outdoors",
    "Being around friends or family",
    "Eating your favorite food",
    "Learning something new",
  ];

  // JSX is returned here to render the appropriate question based on the current step
  return (
    <main className="survey">
      {currentStep === 1 ? ( // Conditional rendering for Step 1
        <>
          <SurveyHero
            currentStep={currentStep}
            question="What is your favorite mood-boosting activity?"
            id="question-1"
            ref={heroTitleRef}
          />
          <section className="form-container">
            <form
              aria-labelledby="question-1"
              onSubmit={(event) => {
                event.preventDefault(); // Prevents the default form submission behavior (reloading the page)
                onHandleNext(currentStep, setCurrentStep); // Move to the next step when the form is submitted
              }}
            >
              <input
                aria-labelledby="question-1"
                type="text"
                name="answer1" // The name attribute is used to identify the answer in the updateUserAnswers function
                placeholder="Write your answer here..."
                value={userAnswers.answer1} // Controlled component: value is tied to the user's input
                onChange={updateUserAnswers} // Calls the function to update the answer when user types
              />
              {/* handleDisabledClick triggers if button is clicked while disabled */}
              <Button
                text="Next question"
                disabled={!areAllFieldsValid()}
                onDisabledClick={handleDisabledClick}
              />
            </form>
            {/* Conditionally render <p> tag to display errorMessage if it has a truthy value */}
            {errorMessage && <p>{errorMessage}</p>}
          </section>
        </>
      ) : currentStep === 2 ? ( // Conditional rendering for Step 2
        <>
          <SurveyHero
            currentStep={currentStep}
            question="Which of these things tends to brighten your mood the most?"
            id="question-2"
            ref={heroTitleRef}
          />
          <section className="form-container">
            <form
              aria-labelledby="question-2"
              onSubmit={(event) => {
                event.preventDefault();
                onHandleNext(currentStep, setCurrentStep);
              }}
            >
              <RadioButtonGroup
                name="answer2"
                options={stepTwoOptions}
                userAnswers={userAnswers}
                updateUserAnswers={updateUserAnswers}
                handleKeyDown={handleKeyDown}
              />
              <Button
                text="Next question"
                disabled={!areAllFieldsValid()}
                onDisabledClick={handleDisabledClick}
              />
            </form>
            {errorMessage && <p>{errorMessage}</p>}
          </section>
        </>
      ) : currentStep === 3 ? (
        <>
          <SurveyHero
            currentStep={currentStep}
            question="What time of day do you usually feel the happiest?"
            id="question-3"
            ref={heroTitleRef}
          />
          <section className="form-container">
            <form
              aria-labelledby="question-3"
              onSubmit={(event) => {
                event.preventDefault();
                onSubmit(event);
              }}
            >
              {/* This form submits the user's final answers */}
              <select
                name="answer3" // The name used to track the selected option
                value={userAnswers.answer3} // The selected option is controlled by this value
                onChange={updateUserAnswers} // Update the user's answer when a different option is chosen
              >
                <option value="">Select an option</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
              </select>
              <Button
                text="Submit your answers"
                disabled={!areAllFieldsValid()}
                onDisabledClick={handleDisabledClick}
              />
            </form>
            {errorMessage && <p>{errorMessage}</p>}
          </section>
        </>
      ) : (
        <h1>Question not found! 😱</h1> // Fallback for an invalid or unexpected currentStep value
      )}
    </main>
  );
};
