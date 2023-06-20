import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import App from "./App.js";
import Register from "./Register.js";

function RoutesTinder() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/home">About</Link>
        <Link to="/register">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/pokemon/:id" element={<PokemonDetail />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default RoutesTinder;