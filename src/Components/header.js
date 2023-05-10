import React from "react"

function Header() {
    return (
        <div class="header">
            <div class="inner_header">
                <div class="initials_container">
                    <h1> GS </h1>
                </div>

                <ul class="navigation">
                    <a><li>Home</li></a>
                    <a><li>Projects</li></a>
                    <a><li>Blog</li></a>
                </ul>
            </div>
        </div >
    )
}

export { Header }