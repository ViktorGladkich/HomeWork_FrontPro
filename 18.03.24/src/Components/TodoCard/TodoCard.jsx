import React from "react";
import styles from "./TodoCard.module.scss";

function TodoCard({ id, todo, completed }) {
  return (
    <div className={`${styles.todoCard} ${completed ? styles.done : styles.notDone}`}>
      <h2>{todo}.</h2>
      <p>Результат: {completed ? "выполнено!" : "Не выполнено!"}</p>
    </div>
  );
}

export default TodoCard;
