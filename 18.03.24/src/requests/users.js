export const getAllUsers = (func) => {
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => func(data.users));
};
