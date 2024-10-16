import { ProgressIndicator } from "./ProgressIndicator";
import "./SurveyHero.css";

export const SurveyHero = ({ currentStep, question, id }) => {
  return (
    <section className="hero">
      <ProgressIndicator currentStep={currentStep} />
      <h1 id={id} className="hero-title">
        {question}
      </h1>
    </section>
  );
};
