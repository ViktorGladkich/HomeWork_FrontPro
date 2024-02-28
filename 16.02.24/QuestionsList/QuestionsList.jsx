import React, { useEffect, useState } from "react";
import Questions from "../Questions/Questions";

function QuestionsList() {
  const [matter, setMatter] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=9")
      .then((res) => res.json())
      .then((data) => {
        setMatter(data.results);
      });
  }, []);

  return (
    <div>
      {matter &&
        matter.map((matterItem, index) => (
          <Questions key={index} {...matterItem} />
        ))}
    </div>
  );
}

export default QuestionsList;
