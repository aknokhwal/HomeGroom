import './App.css';
import Home from './components/Home'
import {Signin, CreateAccount} from './components/Sign';
import Book from './components/Book';
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path='/book' element={<Book />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
