import React from "react"
import { Header } from '../Components/header'
import { Footer } from '../Components/footer'
import { Post } from '../Components/post_template'
import { Modal } from "../Components/modal"
import { sample_post } from '../Data/d_blog'

export function BlogPage() {
    const [modal, setModal] = React.useState(false)

    function updateModal() {
        console.log("changed");
        setModal(!modal);
    }

    return (
        <>
            < Header />
            < Modal display={modal} hideModal={updateModal} />
            <div className="inner_wrapper">
                <div id="scrollInform"></div>
                <div className="page_intro">
                    <h1>Blog</h1>
                </div>
                <div className="blog_row">
                    <Post post_data={sample_post} showModal={updateModal} />
                    <Post post_data={sample_post} showModal={updateModal} />
                </div>
                <div className="blog_row">
                    <Post post_data={sample_post} showModal={updateModal} />
                    <Post post_data={sample_post} showModal={updateModal} />
                </div>
                < Footer />
            </div>
        </>
    )
}