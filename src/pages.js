import React from "react"
import { Introduction } from './Components/introduction.js'
import { FeaturedProject } from './Components/featured_project';
import { RecentBlog } from './Components/recent_posts';

function HomePage(props) {
    return (
        <>
            < Introduction />
            < FeaturedProject toProject={props.toProject} />
            < RecentBlog toBlog={props.toBlog} />
        </>
    )
}

function ProjectPage(props) {
    return (
        <>
        </>
    )
}

function BlogPage(props) {
    return (
        <>
        </>
    )
}

export { HomePage, ProjectPage, BlogPage }