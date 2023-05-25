import React from "react"

function Header(props) {
    return (
        <div className="header">
            <div className="inner_header">
                <div className="initials_container">
                    <h1 onClick={props.toHome}> GS </h1>
                </div>

                <ul className="navigation">
                    <h2><li onClick={props.toHome}>Home</li></h2>
                    <h2><li onClick={props.toProject}>Projects</li></h2>
                    <h2><li onClick={props.toBlog}>Blog</li></h2>
                </ul>
            </div>
        </div >
    )
}

export { Header }