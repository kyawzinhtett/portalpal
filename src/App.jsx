import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CardDetail from "./components/Card/CardDetail";
import Character from "./Pages/Character";
import Location from "./Pages/Location";
import Episode from "./Pages/Episode";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Character />} />
        <Route path="/characters/:id" element={<CardDetail />} />

        <Route path="/episodes" element={<Episode />} />
        <Route path="/episodes/:id" element={<CardDetail />} />

        <Route path="/locations" element={<Location />} />
        <Route path="/locations/:id" element={<CardDetail />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="App container">
      <div className="row justify-content-center align-items-center vh-100 mt-5 mt-md-0">
        <div className="col-md-6">
          <img
            src="/images/hero.png"
            alt="Hero Image"
            className="img-fluid w-100 px-md-0 px-5"
          />
        </div>

        <div className="col-md-6 px-4 px-md-0">
          <h1 className="display-5 fw-semibold text-green schwifty">
            Discover the <br />
            Rick and Morty Universe
          </h1>
          <p className="lead">
            Explore a vast collection of characters, places, and adventures from
            the Rick and Morty series. Dive into the multiverse and uncover
            fascinating details about your favorite episodes.
          </p>
          <Link to="/characters" className="btn bg-green btn-lg mb-3">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
