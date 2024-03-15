import React from "react";

const Question = ({
  question,
  onAnswerClick,
}: {
  question: any;
  onAnswerClick: any;
}) => {
  return (
    <div className="questions">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.answerOptions.map((el: any) => {
          return (
            <li key={el.text}>
              <button onClick={() => onAnswerClick(el.isCorrect)}>
                {el.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
