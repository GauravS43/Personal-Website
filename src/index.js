import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './Pages/Home'
import { ProjectsPage } from './Pages/Projects'
import { BlogPage } from './Pages/Blog'

/*Animation based on scroll
if (window.innerWidth > 600) {
  window.addEventListener('load', (event) => {
    let interObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          var len = entry.target.classList.length;
          if (entry.target.classList[len - 1] === "left")
            entry.target.classList.add("animateLEFT");
          else if (entry.target.classList[len - 1] === "right")
            entry.target.classList.add("animateRIGHT");
          else
            entry.target.classList.add("animateUP");
          interObs.unobserve(entry.target);
        }
      });
    });
    document.querySelectorAll('.animation').forEach(obj => {
      interObs.observe(obj);
    })
  });
}
*/

function Wrapper() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route index element={< HomePage />} />
          <Route path='/home' element={< HomePage />} />
          <Route path='/projects' element={< ProjectsPage />} />
          <Route path='/blog' element={< BlogPage />} />
          {/* <Route path='*' element={}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Wrapper />);