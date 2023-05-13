import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Components/header.js';
import { Introduction } from './Components/introduction.js'
import { FeaturedProject } from './Components/featured_project';
import { RecentBlog } from './recent_posts';


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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="wrapper">
    < Header />
    < Introduction />
    < FeaturedProject />
    < RecentBlog />

    {/* 
    < ContactMe (Footer) />
    */}

    {/* Project Page
    < Project />
    */}

  </div>
);