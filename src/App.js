import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './views';
import PokemonPage from './views/PokemonPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<PokemonPage />} />
      </Routes>
    </div>
  );
}

export default App;
