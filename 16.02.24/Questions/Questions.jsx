import React, { useState } from "react";

function Questions(props) {
  const { question, correct_answer, incorrect_answers } = props;
  const [selectedAnswer, setSelectedAnswer] = useState();

  const answerSelect = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div>
      <h2>{question}</h2>

      <div>
        <p>Выберите правильный ответ:</p>
        <ul>
          {incorrect_answers.map((answer, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={answer}
                  onChange={answerSelect}
                />
                {answer}
              </label>
            </li>
          ))}

          <li>
            <label>
              <input
                type="radio"
                name="answer"
                value={correct_answer}
                onChange={answerSelect}
              />
              {correct_answer}
            </label>
          </li>
        </ul>
      </div>

      {selectedAnswer === correct_answer && <p>Верно!</p>}
    </div>
  );
}

export default Questions;
