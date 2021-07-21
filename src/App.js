import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Reset from "./components/Reset";
import Footer from "./components/Footer";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Header />
      <Counter counter={counter} setCounter={setCounter} />
      <Reset setCounter={setCounter} />
      <Footer />
    </div>
  );
};

export default App;
