import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './pages/home/Home';
import Books from './pages/books/Books';
import About from './pages/about/About';
import Movies from './pages/movies/Movies';
import Visit from './pages/visit/Visit';

const App = () => {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="about" element={<About />} />
        <Route path="movies" element={<Movies />} />
        <Route path="visit" element={<Visit />} />
        </Route>
      </Routes>
    </HashRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>
);


