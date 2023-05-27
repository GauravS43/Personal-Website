import React from "react"
import { Header } from './Components/header'
import { Footer } from './Components/footer'
import { Introduction } from './Components/introduction'
import { FeaturedProject } from './Components/featured_project';
import { RecentBlog } from './Components/recent_posts';
import { Post } from './Components/post_template'

function HomePage() {
    return (
        <>
            < Header />
            <div className="inner_wrapper">
                < Introduction />
                < FeaturedProject />
                < RecentBlog />
                < Footer />
            </div>
        </>
    )
}

function ProjectPage(props) {
    return (
        <>
            < Header />
            <div className="inner_wrapper">
                <div id="scrollInform"></div>
                <div className="page_intro">
                    <h1>Projects</h1>
                </div>
                <FeaturedProject toProject={props.toProject} />
                <FeaturedProject toProject={props.toProject} />
                <FeaturedProject toProject={props.toProject} />
                <FeaturedProject toProject={props.toProject} />
                < Footer />
            </div>
        </>
    )
}

function BlogPage(props) {
    return (
        <>
            < Header />
            <div className="inner_wrapper">
                <div id="scrollInform"></div>
                <div className="page_intro">
                    <h1>Blog</h1>
                </div>
                <Post />
                < Footer />
            </div>
        </>
    )
}

export { HomePage, ProjectPage, BlogPage }