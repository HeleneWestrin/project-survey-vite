import { Button } from "./ui/Button";

export const Home = ({ setSurveyStarted }) => {
  return (
    <main>
      I am the home screen.
      <Button onClick={() => setSurveyStarted(true)} text="Let's begin!" />
    </main>
  );
};
