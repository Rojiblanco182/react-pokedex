import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Home from './views';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
