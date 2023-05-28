import React from "react"

export function Post({ post_data, showModal }) {
    return (
        <div className="blog_post animation">
            <h3>{post_data[0]}</h3>
            <div className="date">
                {post_data[1]}
            </div>
            <h4>{post_data[2]}</h4>
            <div className="whiteBox"></div>
            <div className="enlarger">
                <h3 onClick={showModal}>Read more →</h3>
            </div>
        </div>
    )
}