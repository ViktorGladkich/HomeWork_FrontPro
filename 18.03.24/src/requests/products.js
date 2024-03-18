export const getAllProducts = (func) => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => func(data.products));
};
