import React from "react"
import { Post } from './post_template'
import { man_post, ml_post } from "../Data/d_blog"
import { Link } from "react-router-dom"

export function RecentPosts({ showModal }) {
    return (
        <div className="r_blog" >
            <h2 className="animation">Recent Blog Posts</h2>
            <div className="blog_row">
                <Post post_num={4} post_data={man_post} showModal={showModal} />
                <Post post_num={3} post_data={ml_post} showModal={showModal} />
            </div>
            <div className="link_container animation">
                <Link reloadDocument to="../blog">Blog</Link>
            </div>
        </div>
    )
}