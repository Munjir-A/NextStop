import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import "./App.css"
import Auth from './pages/auth';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
