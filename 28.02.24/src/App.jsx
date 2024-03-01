import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
