class Shape {
  constructor(className) {
    this.element = document.createElement("div");

    this.element.classList.add("shape", className);
  }
  render() {
    document.querySelector(".container").append(this.element);
  }
  setStyle(target) {
    Object.assign(this.element.style, target);
  }
}
// let shape = new Shape("circle");
// shape.render();

// let rectangle = new Shape("rectangle");
// rectangle.render();

class Circle extends Shape {
  constructor() {
    super("circle");
  }
}

let circle = new Circle();
circle.setStyle({
  background: "gold",
  borderRadius: "50px",
});
circle.render();

class Rectangle extends Shape {
  constructor() {
    super("rectangle");
  }
}
let rectangle = new Rectangle();
rectangle.setStyle({
  background: "black",
  borderRadius: "50px",
});
rectangle.render();
