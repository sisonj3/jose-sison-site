import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from './pages/home';
import About from './pages/about';
import './App.css';
import './styles/navigation.css';

function App() {

  useEffect(() => {
    document.title = 'Jose Aurelio L. Sison';
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={
            <Home/>
          } />
          <Route path='about' element={ <About/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
