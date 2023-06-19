import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import "./App.js";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/out">Out</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/pokemon/:id" element={<PokemonDetail />} /> */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;