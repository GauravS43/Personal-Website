import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './Components/header.js';
import { Introduction } from './Components/introduction.js'
//test
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    < Header />
    < Introduction />

    {/* 
    < FeaturedProject />
    < FeaturedBlogPost />
    < ContactMe (Footer) />
    */}

    {/* Project Page
    < Project />
    */}

  </>
);