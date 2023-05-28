import React from "react"

export function Header() {
    return (
        <div className="header">
            <div className="inner_header">
                <div className="initials_container">
                    <a href="/home"><h1> GS </h1></a>
                </div>

                <ul className="navigation">
                    <a href="/home"><li>Home</li></a>
                    <a href="/projects"><li>Projects</li></a>
                    <a href="/blog"><li>Blog</li></a>
                </ul>
            </div>
        </div >
    )
}