const booksDatabase = {
  1: { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
  2: {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
  },
  3: {
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma",
  },
};

function getBookInfoById(bookId) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (booksDatabase[bookId]) {
        res(booksDatabase[bookId]);
      } else {
        rej(`Книга с id ${bookId} не найдена`);
      }
    }, 2000);
  });
}

const bookId = 4;

getBookInfoById(bookId)
  .then((bookInfo) => {
    console.log(`Информация о книге ID: ${bookId}`);
    console.log(`Название: ${bookInfo.title}`);
    console.log(`Автор: ${bookInfo.author}`);
  })
  .catch((error) => {
    console.error("Ошибка при получении информации о книге:", error);
  });
