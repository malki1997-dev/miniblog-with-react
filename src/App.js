import logo from './logo.svg';
import './App.css';
import Home from'./component/Home';
import Detaille from'./component/Detaille';
import {BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/detaille" element={<Detaille />} />
      </Routes>
  
      </BrowserRouter>
  );
}

export default App;
