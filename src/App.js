import './App.css';
import Home from './components/Home'
import {Signin, CreateAccount} from './components/Sign';
import Book from './components/Book';
import Worker from './components/Worker';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('Sign-in');

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home value={email}/>} />
        <Route path="/signin" element={<Signin setEmail={setEmail}/>} />
        <Route path="/signup" element={<CreateAccount setEmail={setEmail}/>} />
        <Route path='/book' element={<Book value={email}/>} />
        <Route path="/worker" element={<Worker />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
