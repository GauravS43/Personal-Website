import React from "react"
import { Header } from '../Components/header'
import { Footer } from '../Components/footer'
import { Post } from '../Components/post_template'

export function BlogPage(props) {
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