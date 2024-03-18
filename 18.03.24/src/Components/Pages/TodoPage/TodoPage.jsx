import React, { useEffect, useState } from "react";
import { BurgerArrow } from "react-burger-icons";
import { getAllTodo } from "../../../requests/todo";
import { Context } from "../../../requests/context";
import TodoContainer from "../../TodoContainer/TodoContainer";
import styles from "./TodoPage.module.scss";

function TodoPage() {
  const [todos, setTodo] = useState([]);
  const [isClosed, setIsClosed] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  console.log(todos);

  return (
    <>
      <div>
        <Context.Provider value={{ todos }}>
          <TodoContainer />
        </Context.Provider>
      </div>
      <div className={styles.buttonScroll}>
        <button
          onClick={() => {
            setIsClosed(!isClosed);
            scrollTop();
          }}
          style={{
            width: "50px",
            height: "50px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <BurgerArrow isClosed={isClosed} className={styles.icon} />
        </button>
      </div>
    </>
  );
}

export default TodoPage;
