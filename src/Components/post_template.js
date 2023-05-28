import React from "react"
import sf from "./Images/sf.png"

export function Post(props) {
    return (
        <div className="post_wrapper">
            <div className="post_inner">
                <div className="post_left">
                    <img src={sf} alt="Featured Project" />
                </div>
                <div className="post_right">
                    <h2>Title</h2>
                    <h3>text</h3>
                </div>
            </div>
        </div>
    )
}