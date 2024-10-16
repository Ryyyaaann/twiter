
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './JS/Home';
import Sobre from './JS/Sobre';
import Navbar from './JS/Navbar';
import Cadastro from './JS/Cadastro';
import Login from './JS/Login';

const NotFound = () => <h2>404 - Page Not Found</h2>;

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
