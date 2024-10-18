import { forwardRef } from "react";
import { ProgressIndicator } from "./ProgressIndicator";
import "./SurveyHero.css";

// Use forwardRef to allow ref to be passed to the SurveyHero component
export const SurveyHero = forwardRef(({ currentStep, question, id }, ref) => {
  return (
    <section className="hero">
      <ProgressIndicator currentStep={currentStep} />
      <h1 tabIndex="-1" id={id} className="hero-title" ref={ref}>
        {question}
      </h1>
    </section>
  );
});

// Add a display name for better debugging
SurveyHero.displayName = "SurveyHero";
