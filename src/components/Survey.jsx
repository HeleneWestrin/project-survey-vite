import { ProgressIndicator } from "./ProgressIndicator";
import { Button } from "./ui/Button";

// The Survey component receives several props that control the current step of the survey, user answers, and form submission
export const Survey = ({
  currentStep, // Tracks which step (or question) the user is currently on
  setCurrentStep, // Function to update the current step
  userAnswers, // Object holding the user's answers to the questions
  setUserAnswers, // Function to update the user's answers
  onSubmit, // Callback function for handling form submission on the last step
}) => {

  // This function updates the user's answers when they interact with an input field (text, checkbox, radio, etc.)
  const updateUserAnswers = (event) => {
    const { name, value, type, checked } = event.target; // Extracting useful info from the event (which input changed)
    setUserAnswers((previous) => ({
      ...previous, // Spread operator to retain previous answers while updating the new answer
      [name]: type === "checkbox" ? checked : value, // For checkboxes, use 'checked' instead of 'value'
    }));
  };

  // This function advances the user to the next question (increments currentStep by 1)
  const onHandleNext = () => {
    setCurrentStep(currentStep + 1); // Set the next step by increasing the current step by 1
  };

  // JSX is returned here to render the appropriate question based on the current step
  return (
    <main className="full-width">
      {currentStep === 1 ? ( // Conditional rendering for Step 1
        <>
          <section className="hero">
            <ProgressIndicator currentStep={currentStep} />
            <h1 aria-labelledby="answer1">
              What is your favorite mood-boosting activity?
            </h1>
          </section>
          <form
            onSubmit={(event) => {
              event.preventDefault(); // Prevents the default form submission behavior (reloading the page)
              onHandleNext(currentStep, setCurrentStep); // Move to the next step when the form is submitted
            }}
          >
            <input
              id="answer1"
              type="text"
              name="answer1" // The name attribute is used to identify the answer in the updateUserAnswers function
              placeholder="Write your answer here..."
              value={userAnswers.answer1} // Controlled component: value is tied to the user's input
              onChange={updateUserAnswers} // Calls the function to update the answer when user types
            />
            <Button text="Next question" />
          </form>
        </>
      ) : currentStep === 2 ? ( // Conditional rendering for Step 2
        <>
          <ProgressIndicator currentStep={currentStep} />
          <h1>Step 2</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onHandleNext(currentStep, setCurrentStep);
            }}
          >
            <label>
              <input
                type="radio"
                name="answer2" // Same name is used for both radio buttons to group them together
                value="Yes, absolutely"
                checked={userAnswers.answer2 === "Yes, absolutely"} // Sets the radio to checked if it matches the user's answer
                onChange={updateUserAnswers} // Updates the answer when a different radio option is selected
              />
              Yes, absolutely
            </label>
            <label>
              <input
                type="radio"
                name="answer2"
                value="No, I like the silence"
                checked={userAnswers.answer2 === "No, I like the silence"}
                onChange={updateUserAnswers}
              />
              No, I like the silence
            </label>
            <Button text="Next question" />
          </form>
        </>
      ) : currentStep === 3 ? (
        <>
          <ProgressIndicator currentStep={currentStep} />
          <h1>Step 3</h1>
          <form onSubmit={onSubmit}>
            {/* This form submits the user's final answers */}
            <select
              name="answer3" // The name used to track the selected option
              value={userAnswers.answer3} // The selected option is controlled by this value
              onChange={updateUserAnswers} // Update the user's answer when a different option is chosen
            >
              <option value="">Select an option</option>
              <option value="select1">Select 1</option>
              <option value="select2">Select 2</option>
              <option value="select3">Select 3</option>
            </select>
            <Button text="Submit your answers" />
          </form>
        </>
      ) : (
        <h1>Question not found! 😱</h1> // Fallback for an invalid or unexpected currentStep value
      )}
    </main>
  );
};
