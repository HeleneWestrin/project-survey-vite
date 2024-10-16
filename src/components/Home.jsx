import { Button } from "./ui/Button";
import homeImage from "../assets/home.png";

export const Home = ({ setSurveyStarted }) => {
  return (
    <main className="main-container">
      <img
        src={homeImage}
        alt="Cartoon of a person relaxed and sleeping on the sofa with abstract shapes in the background"
      />
      <h1>The Science of Happiness</h1>
      <p>Everyday Joy Booster Survey</p>
      <Button onClick={() => setSurveyStarted(true)} text="Let's begin!" />
    </main>
  );
};
