import { useState } from "react";
import "./App.css";
import Question from "./components/Question";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<Number>(0);

  const [userAnswer, setUserAnswer] = useState([]);

  // Keep all of the logic in App.

  const handleNextQuestion = () => {};

  return (
    <div>
      <h1>Programme Quiz</h1>

      {/* Questions components */}
      <Question
        question={Question[currentQuestion]}
        onAnswerClick={handleNextQuestion}
      />

      {/* Result component */}
    </div>
  );
}

export default App;
