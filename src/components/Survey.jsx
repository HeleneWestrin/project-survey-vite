import { ProgressIndicator } from "./ProgressIndicator";
import { Button } from "./ui/Button";

export const Survey = ({
  currentStep,
  setCurrentStep,
  userAnswers,
  setUserAnswers,
  onSubmit,
}) => {
  const updateUserAnswers = (event) => {
    const { name, value, type, checked } = event.target;
    setUserAnswers((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onHandleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <main className="full-width">
      {currentStep === 1 ? (
        <>
          <section className="hero">
            <ProgressIndicator />
            <h1 aria-labelledby="answer1">
              What is your favorite mood-boosting activity?
            </h1>
          </section>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onHandleNext(currentStep, setCurrentStep);
            }}
          >
            <input
              id="answer1"
              type="text"
              name="answer1"
              placeholder="Write your answer here..."
              value={userAnswers.answer1}
              onChange={updateUserAnswers}
            />
            <Button text="Next question" />
          </form>
        </>
      ) : currentStep === 2 ? (
        <>
          <ProgressIndicator />
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
                name="answer2"
                value="Yes, absolutely"
                checked={userAnswers.answer2 === "Yes, absolutely"}
                onChange={updateUserAnswers}
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
          <ProgressIndicator />
          <h1>Step 3</h1>
          <form onSubmit={onSubmit}>
            <select
              name="answer3"
              value={userAnswers.answer3}
              onChange={updateUserAnswers}
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
        <h1>Question not found! 😱</h1>
      )}
    </main>
  );
};
