import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Components/header.js';
import { HomePage, ProjectPage, BlogPage } from './pages';
import { Footer } from './Components/footer';

//Animation based on scroll
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

function Wrapper() {
  const [siteState, setSiteState] = React.useState(0)

  function toHome() {
    setSiteState(0)
  }

  function toProject() {
    setSiteState(1)
  }

  function toBlog() {
    setSiteState(2)
  }

  return (
    <div className="wrapper">
      < Header toHome={toHome} toProject={toProject} toBlog={toBlog} />
      <div className="inner_wrapper">
        {siteState === 0 && < HomePage toProject={toProject} toBlog={toBlog} />}
        {siteState === 1 && < ProjectPage />}
        {siteState === 2 && < BlogPage />}
        < Footer />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< Wrapper />);