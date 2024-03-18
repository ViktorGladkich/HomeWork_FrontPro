import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Components/Pages/MainPage/MainPage";
import UsersPage from "./Components/Pages/UsersPage/UsersPage";
import ProductsPage from "./Components/Pages/ProductsPage/ProductsPage";
import TodoPage from "./Components/Pages/TodoPage/TodoPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
