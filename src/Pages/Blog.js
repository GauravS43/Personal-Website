import React from "react"
import { Header } from '../Components/header'
import { Footer } from '../Components/footer'
import { Post } from '../Components/post_template'
import { Modal } from "../Components/modal"
import { website_post, sf_rl_post, ml_post } from '../Data/d_blog'

export function BlogPage() {
    const [modal, setModal] = React.useState(0)

    function updateModal(post_num) {
        console.log(post_num)
        setModal(post_num);
    }

    return (
        <>
            < Header />
            < Modal display_state={modal} hideModal={() => updateModal(0)} />
            <div className="inner_wrapper">
                <div id="scrollInform"></div>
                <div className="page_intro">
                    <h1>Blog</h1>
                </div>
                <div className="blog_wrapper">
                    <div className="blog_row">
                        <Post post_num={3} post_data={ml_post} showModal={updateModal} />
                        <Post post_num={2} post_data={sf_rl_post} showModal={updateModal} />
                    </div>
                </div>
                <div className="blog_wrapper">
                    <div className="blog_row">
                        <Post post_num={1} post_data={website_post} showModal={updateModal} />
                    </div>
                </div>
                < Footer />
            </div>
        </>
    )
}