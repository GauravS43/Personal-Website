import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Components/header.js';
import { Introduction } from './Components/introduction.js'
import { FeaturedProject } from './Components/featured_project';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="wrapper">
    < Header />
    < Introduction />
    < FeaturedProject />

    {/* 
    < FeaturedBlogPost />
    < ContactMe (Footer) />
    */}

    {/* Project Page
    < Project />
    */}

  </div>
);