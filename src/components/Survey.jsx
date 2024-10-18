import { useState } from "react";
import { SurveyHero } from "./SurveyHero";
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

  // JSX is returned here to render the appropriate question based on the current step
  return (
    <main className="survey">
      {currentStep === 1 ? ( // Conditional rendering for Step 1
        <>
          <SurveyHero
            currentStep={currentStep}
            question="What is your favorite mood-boosting activity?"
            id="question-1"
          />
          <section className="form-container">
            <form
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
          />
          <section className="form-container">
            <form
              aria-labelledby="question-2"
              onSubmit={(event) => {
                event.preventDefault();
                onHandleNext(currentStep, setCurrentStep);
              }}
            >
              <fieldset>
                <label>
                  <input
                    type="radio"
                    name="answer2" // Same name is used for both radio buttons to group them together
                    value="Listening to music"
                    checked={userAnswers.answer2 === "Listening to music"} // Sets the radio to checked if it matches the user's answer
                    onChange={updateUserAnswers} // Updates the answer when a different radio option is selected
                  />
                  Listening to music
                </label>
                <label>
                  <input
                    type="radio"
                    name="answer2"
                    value="Spending time outdoors"
                    checked={userAnswers.answer2 === "Spending time outdoors"}
                    onChange={updateUserAnswers}
                  />
                  Spending time outdoors
                </label>
                <label>
                  <input
                    type="radio"
                    name="answer2"
                    value="Being around friends or family"
                    checked={
                      userAnswers.answer2 === "Being around friends or family"
                    }
                    onChange={updateUserAnswers}
                  />
                  Being around friends or family
                </label>
                <label>
                  <input
                    type="radio"
                    name="answer2"
                    value="Eating your favorite food"
                    checked={
                      userAnswers.answer2 === "Eating your favorite food"
                    }
                    onChange={updateUserAnswers}
                  />
                  Eating your favorite food
                </label>
                <label>
                  <input
                    type="radio"
                    name="answer2"
                    value="Learning something new"
                    checked={userAnswers.answer2 === "Learning something new"}
                    onChange={updateUserAnswers}
                  />
                  Learning something new
                </label>
              </fieldset>
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
          />
          <section className="form-container">
            <form onSubmit={onSubmit}>
              {/* This form submits the user's final answers */}
              <select
                name="answer3" // The name used to track the selected option
                value={userAnswers.answer3} // The selected option is controlled by this value
                onChange={updateUserAnswers} // Update the user's answer when a different option is chosen
              >
                <option value="">Select an option</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
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
