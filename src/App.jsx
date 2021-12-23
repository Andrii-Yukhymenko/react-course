import React, { useState, useEffect } from 'react';
import Posts from './pages/Posts';
import About from './pages/About';
import NotFound from './pages/NotFound/NotFound';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';

let headerLinks = [
  { link: '/posts', name: 'Посты' },
  { link: '/about', name: 'О нас' },
];

function App() {
  return (
    <>
      <Header>
        {headerLinks.map((item) => {
          return (
            <li key={item.link} className="menu__item">
              <Link to={item.link} className="menu__link">
                {item.name}
              </Link>
            </li>
          );
        })}
      </Header>

      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
