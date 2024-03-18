export const getAllTodo = (callback) => {
  fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((data) => callback(data.todos));
};
