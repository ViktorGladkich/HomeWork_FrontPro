import React, { useContext } from "react";
import { Context } from "../../requests/context";
import TodoCard from "../TodoCard/TodoCard";
import styles from "./TodoContainer.module.scss";

function TodoContainer() {
  const { todos } = useContext(Context);
  return (
    <div className={styles.container}>
        {todos && todos.map((el) => <TodoCard key={el.id} {...el} />)}
        </div>
  );
}

export default TodoContainer;
